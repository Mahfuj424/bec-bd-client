
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Calendar } from "lucide-react"
import { getEventById } from "@/constant/news&events"

interface EventDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params
  const event = getEventById(Number.parseInt(id))

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured image */}
        <div className="mb-8 rounded-lg overflow-hidden bg-muted h-96">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        </div>

        {/* Event type badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              event.type === "events"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            }`}
          >
            {event.type === "events" ? "📅 Events" : "📰 News"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-foreground">{event.title}</h1>

        {/* Meta information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium text-foreground">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium text-foreground">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">{event.location}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none mb-8">
          <p className="text-lg text-muted-foreground mb-6">{event.excerpt}</p>
        </div>

        {/* Call to action */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Interested in this {event.type === "events" ? "event" : "news"}?
          </h3>
          <p className="text-muted-foreground mb-4">
            {event.type === "events"
              ? "Register now to secure your spot and join us for this exciting event."
              : "Stay updated with the latest news and developments in the engineering community."}
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            {event.type === "events" ? "Register Now" : "Learn More"}
          </button>
        </div>
      </div>
    </main>
  )
}
