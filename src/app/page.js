import News from "@/components/News";
import TopPost from "../components/TopPost";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata = {
  title: "Trang chủ",
};

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="container mx-auto">
        <TopPost />
        <News />
        <AboutUs />
        <Banner />
      </div>
    </>
  );
}
