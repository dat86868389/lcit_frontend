"use client"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const textAnimation = document.querySelector(".text-aimation");
    console.log(textAnimation);
  }, []);

  return (
    <header className="background-color-header font-sans">
      <div className="py-2 bg-sky-500 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <span className="italic">
            <i className="fa-regular fa-calendar"></i> 01/11/2023
          </span>
          <span className="uppercase text-aimation">
            Trung tâm công nghệ thông tin và truyền thông lào cai
          </span>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <img src="/images/logo1.png" />
        </div>

        <ul className="navbar flex uppercase text-sm">
          <li className="px-2 py-1 rounded-lg border-2 border-solid mr-1 navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base">
            <Link href={`#`}>Trang chủ</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid mr-1 navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base">
            <Link href={`#`}>tin tức</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>
              Ebook <i className="fa-solid fa-caret-down"></i>
            </Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>Dịch vụ</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>Giới thiệu</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>Báo giá</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>Đào tạo</Link>
          </li>

          <li className="px-2 py-1 rounded-lg border-2 border-solid navlink hover:bg-blue-500 hover:border-blue-500 hover:text-base mr-1">
            <Link href={`#`}>Tuyển dụng</Link>
          </li>
        </ul>

        <div className="search">
          <form>
            <input
              type="search"
              className="w-36 py-1 px-2 border-2 border-solid text-sm border-color-blue"
              placeholder="TÌM KIẾM..."
            />
          </form>
        </div>
      </div>
    </header>
  );
}
