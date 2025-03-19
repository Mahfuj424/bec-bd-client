import CarouselBanner from "./CarouselBanner";

const bannerSlides = [
  {
    id: 1,
    imageUrl: "/carousel/slider1.jpg",
    title: "Do you want to be a member?",
  },
  {
    id: 2,
    imageUrl: "/carousel/slider2.jpg",
    title: "Do you want to be a member?",
  },
  {
    id: 3,
    imageUrl: "/carousel/slider3.jpg",
    title: "Do you want to be a member?",
  },
];

export default function Banner() {
  return (
    <main className="w-full">
      <CarouselBanner slides={bannerSlides} />
    </main>
  );
}
