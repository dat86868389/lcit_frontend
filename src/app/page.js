import dynamic from "next/dynamic";


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

      </main>
    </>
  );
}
