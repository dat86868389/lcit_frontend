// async function getAllData(page) {
//   const res = await fetch(`http://localhost:8080/demo/all`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export const metadata = {
  title: "Tất cả các bài viết",
};

export default async function CallApi({ params }) {
  // const data = await getAllData(params.page - 1);
  // console.log("data la: ",data);
  return (
    <>
      <main className="pt-24">
        <p>Xem log đi</p>
      </main>
    </>
  );
}
