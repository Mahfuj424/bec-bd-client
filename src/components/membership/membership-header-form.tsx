import Image from "next/image";

export default function MembershipFormHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="relative w-64 h-20">
          <Image
            src="/placeholder.svg?height=80&width=256"
            alt="YES Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold">Membership Application Form</h1>
      <p className="text-muted-foreground">Young Engineering Society (YES)</p>
    </div>
  );
}
