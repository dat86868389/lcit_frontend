import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import ItemSection from "@/components/ItemsSection";
import dynamic from "next/dynamic";
import LastestNews from "@/components/LastestNews";

const Introduction = dynamic(() => import("@/components/Introduction"), {
  ssr: false,
});

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata = {
  title: 'Trang chủ',
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <main className="pt-24">
        <LastestNews />
        <Banner />
        <Introduction />
        <ItemSection listBook={data}/>
        <Contact />
      </main>
    </>
  );
}
