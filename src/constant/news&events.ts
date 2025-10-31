// Define types for news and events
interface NewsEvent {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  type: "news" | "events";
  location?: string;
  time?: string;
}

export const newsEvents: NewsEvent[] = [
  {
    id: 1,
    title: "Annual Engineering Conference 2025",
    excerpt:
      "Join the Bangladesh Engineers Council for our annual conference featuring keynote speakers from across South Asia discussing sustainable infrastructure development.",
    date: "2025-09-15",
    image: "/carousel/slider3.jpg",
    type: "events",
    location: "Bangabandhu International Conference Center, Dhaka",
    time: "09:00 AM - 05:00 PM",
  },
  {
    id: 2,
    title: "BEC Signs MoU with International Engineering Alliance",
    excerpt:
      "Bangladesh Engineers Council has signed a Memorandum of Understanding with the International Engineering Alliance to enhance global recognition of Bangladeshi engineering qualifications.",
    date: "2025-03-10",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
  {
    id: 3,
    title: "Professional Development Workshop Series",
    excerpt:
      "Enhance your engineering skills with our monthly workshop series covering the latest technologies and methodologies in civil, electrical, and mechanical engineering.",
    date: "2025-04-05",
    image: "/carousel/slider1.jpg",
    type: "events",
    location: "BEC Headquarters, Dhaka",
    time: "02:00 PM - 04:00 PM",
  },
  {
    id: 4,
    title: "New Registration Guidelines for Engineering Professionals",
    excerpt:
      "BEC announces updated registration guidelines and professional standards for engineers practicing in Bangladesh, effective from April 2025.",
    date: "2025-03-22",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
  {
    id: 5,
    title: "BEC Launches Scholarship Program for Engineering Students",
    excerpt:
      "The Bangladesh Engineers Council introduces a comprehensive scholarship program to support promising engineering students from underprivileged backgrounds.",
    date: "2025-03-18",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
  {
    id: 6,
    title: "Workshop: Climate Resilient Infrastructure Design",
    excerpt:
      "An interactive workshop exploring climate-adaptive engineering solutions for Bangladesh's unique geographical challenges.",
    date: "2025-05-12",
    image: "/carousel/slider3.jpg",
    type: "events",
    location: "BUET Campus, Dhaka",
    time: "10:00 AM - 01:00 PM",
  },
  {
    id: 7,
    title: "BEC Celebrates National Engineers Day",
    excerpt:
      "Join us for a day of celebration honoring the contributions of engineers to Bangladesh's development and progress.",
    date: "2025-05-25",
    image: "/carousel/slider1.jpg",
    type: "events",
    location: "National Museum, Dhaka",
    time: "10:00 AM - 06:00 PM",
  },
  {
    id: 8,
    title: "New Technical Standards Published for Construction Industry",
    excerpt:
      "BEC releases updated technical standards for the construction industry focusing on safety and sustainability.",
    date: "2025-04-10",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
  {
    id: 9,
    title: "Engineering Innovation Competition 2025",
    excerpt:
      "Submit your innovative engineering solutions to compete for recognition and funding opportunities.",
    date: "2025-06-15",
    image: "/carousel/slider3.jpg",
    type: "events",
    location: "Bangladesh University of Engineering and Technology",
    time: "09:00 AM - 04:00 PM",
  },
  {
    id: 10,
    title: "BEC Partners with Ministry of Education for STEM Initiative",
    excerpt:
      "A new partnership aims to strengthen STEM education in schools across Bangladesh.",
    date: "2025-04-18",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
  {
    id: 11,
    title: "International Engineering Conference on Renewable Energy",
    excerpt:
      "Global experts gather to discuss the latest advancements in renewable energy technologies.",
    date: "2025-07-20",
    image: "/carousel/slider1.jpg",
    type: "events",
    location: "Radisson Blu Dhaka Water Garden",
    time: "09:00 AM - 05:00 PM",
  },
  {
    id: 12,
    title: "BEC Announces New Executive Committee",
    excerpt:
      "The Bangladesh Engineers Council welcomes its newly elected executive committee for the 2025-2027 term.",
    date: "2025-03-30",
    image: "/carousel/slider2.jpg",
    type: "news",
  },
];

export function getEventById(id: number): NewsEvent | undefined {
  return newsEvents.find((event) => event.id === id)
}

export function getEventsByType(type: "events" | "news"): NewsEvent[] {
  return newsEvents.filter((event) => event.type === type)
}
