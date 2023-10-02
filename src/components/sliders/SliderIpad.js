"use client";

import { useState, useEffect } from "react";

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

export default function SliderIpad() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const size = fakeData.data1.length;
  const itemPerPage = 2;
  const totalPage =
    size % itemPerPage === 0
      ? Number.parseInt(size / itemPerPage)
      : Number.parseInt(size / itemPerPage + 1);
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
    let dataArr = [];
    let tempData = fakeData.data1.slice();
    for (let i = 0; i < totalPage; i++) {
      dataArr = [...dataArr, tempData.slice(0, itemPerPage)];
      tempData.splice(0, itemPerPage);
    }
    setData(dataArr);
  }, []);
  return (
    <div className="w-full mx-auto overflow-hidden mt-2 lg:hidden sm:block hidden relative">
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
        className="slide-items-1 relative flex"
        style={{
          width: totalPage * 100 + "%",
          marginLeft: page * 100 * -1 + "%",
        }}
      >
        {data.map((arr) => {
          return (
            <div className="w-full flex">
              {arr.map((e) => (
                <a href="#" className="w-3/6 mr-1">
                  <div className="bg-white rounded-md w-full">
                    <img
                      src={e.thumbnail}
                      alt={`anh của bài viết: ${e.title}`}
                      className="h-64 w-full rounded-t-md"
                    />
                    <div className="mt-2 w-11/12 mx-auto">
                      <div className="border-b-2">
                        <p className="text-3xl font-bold text-color-black h-28">
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
          );
        })}
      </div>
      <div className="container mx-auto pagination-slide flex justify-center py-4">
        {data.map((e, i) => (
          <div
            className={`pagination-slide-radio-1 rounded-full w-5 h-5 border mx-1.5 cursor-pointer ${
              i === page ? "bg-header" : ""
            }`}
            onClick={() => naviPage(i)}
          />
        ))}
      </div>
    </div>
  );
}
