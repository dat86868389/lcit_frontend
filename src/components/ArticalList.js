"use client";

import Link from "next/link";
import Pagination from "./Pagination";

export default function ArticalList(props) {
  return (
    <div className="container mx-auto mb-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 sm:col-span-1 lg:col-span-3">
          <h1>Danh sách các bài viết</h1>
          <div className="grid md:col-span-2 lg:grid-cols-3 gap-5">
            {props.data.map((e) => (
              <div className="bg-white border" key={e.id}>
                <Link href={`#`} title={e.text}>
                  <div className="w-full h-40">
                    <img src={e.image} className="w-full h-full" />
                  </div>

                  <div className="mt-4 p-2">
                    <p className="font-medium text-xl truncate-2">{e.text}</p>
                    <p>
                      <i className="fa-regular fa-user"></i>{" "}
                      {`${e.owner.firstName} ${e.owner.lastName}`}
                    </p>
                    <p>
                      <i className="fa-regular fa-calendar"></i>{" "}
                      {`${printDate(e.publishDate)}`}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            <div className="lg:col-span-3 flex justify-center items-center">
              <Pagination 
                page={props.page}
                totalRecord={props.total}
                recordPerPage={props.recordPerPage}
              />
            </div>
          </div>
        </div>

        <div>Các bài viết được xem nhiều</div>
      </div>
    </div>
  );
}

const printDate = (date) => {
  const d = new Date(date);
  return `${d.getDate() > 9 ? d.getDate() : `0${d.getDate}`}-${
    d.getMonth() > 9 ? d.getMonth() : `0${d.getMonth()}`
  }-${d.getFullYear()}`;
};
