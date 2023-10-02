import ArticalList from "@/components/ArticalList";

async function getAllData(page) {
  const res = await fetch(`https://dummyapi.io/data/v1/post?page=${page}`, {
    headers: { "app-id": "650952fc366e3a442c7d7cf1" },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata = {
  title: 'Tất cả các bài viết',
}

export default async function SeeAllArtical({ params }) {
  const data = await getAllData(params.page - 1);
  return (
    <>
      <main className="pt-24">
        <ArticalList
          data={data.data}
          page={params.page}
          total={data.total}
          recordPerPage={data.limit}
        />
      </main>
    </>
  );
}
