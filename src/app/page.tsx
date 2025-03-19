import Banner from "@/components/Home/Banner/Banner";
import HomeComponents from "@/components/Home/Home/HomeComponents";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mt-24">
        <HomeComponents />
      </div>
    </div>
  );
}
