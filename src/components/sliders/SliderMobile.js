"use client";
import { useEffect, useState } from "react";

const fakeData = {
  data1: [
    {
      title: "Tin tức mới nhất 9",
      date: "11/09/2023",
      author: "Nguyễn Tiến Đạt",
      thumbnail: "/images/blog1.jpg",
    },

    {
      title: "Tin tức mới nhất 9",
      date: "11/09/2023",
      author: "Nguyễn Tiến Đạt",
      thumbnail: "/images/blog1.jpg",
    },

    {
      title: "Tin tức mới nhất 9",
      date: "11/09/2023",
      author: "Nguyễn Tiến Đạt",
      thumbnail: "/images/blog1.jpg",
    },

    {
      title: "Tin tức mới nhất 9",
      date: "11/09/2023",
      author: "Nguyễn Tiến Đạt",
      thumbnail: "/images/blog1.jpg",
    },
  ],
};
export default function SliderMobile() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const size = fakeData.data1.length;
  const totalPage = size;

  const moveLeft = () => {
    if (page === 0) {
      setPage(totalPage - 1);
    } else {
      setPage(page - 1);
    }
  };

  const moveRight = () => {
    if (page === totalPage - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const naviPage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    setData(fakeData.data1);
  }, []);

  return (
    <div className="w-full mx-auto overflow-hidden mt-2 sm:hidden relative">
      <div
        className="absolute top-1/3 cursor-pointer bg-primary-blur p-4 btn-move z-10"
        onClick={() => moveLeft()}
      >
        <i className="fa-solid fa-caret-left"></i>
      </div>

      <div
        className="absolute top-1/3 right-0 cursor-pointer bg-primary-blur p-4 btn-move z-10"
        onClick={() => moveRight()}
      >
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div
        className="slide-items relative flex"
        style={{
          width: totalPage * 100 + "%",
          marginLeft: page * -1 * 100 + "%",
        }}
      >
        {data.map((e) => (
          <a href="#" className="w-full">
            <div className="bg-white rounded-md w-full">
              <img
                src={e.thumbnail}
                alt={`anh ${e.title}`}
                className="h-64 w-full rounded-t-md"
              />
              <div className="mt-2 w-11/12 mx-auto">
                <div className="border-b-2">
                  <p className="text-3xl font-bold text-color-black pb-5 h-28">
                    {e.title}
                  </p>
                </div>

                <div className="flex py-4">
                  <p className="text-color-black border-r pr-2 color-clendar">
                    {e.date}
                  </p>
                  <p className="font-semibold pl-2 text-color-primary">
                    {e.author}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="container mx-auto pagination-slide flex justify-center py-4">
        {data.map((e, i) => (
          <div
            className={`pagination-slide-radio rounded-full w-5 h-5 border mx-1.5 cursor-pointer ${
              i === page ? "bg-header" : ""
            }`}
            onClick={() => naviPage(i)}
          />
        ))}
      </div>
    </div>
  );
}
