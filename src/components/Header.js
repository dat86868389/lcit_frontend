"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <header>
      <div className="w-screen shadow-lg bg-header fixed left-0 right-0 z-30">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="logo">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo_lcit"
                width="100%"
                className="h-20"
              />
            </Link>
          </div>

          <div
            className={`navbar h-0 absolute left-0 top-0 right-0 mt-20 z-10 bg-header xl:bg-none xl:mt-0 xl:static xl:h-auto xl:overflow-auto xl:h-full ${
              activeNav ? "active" : ""
            }`}
          >
            <ul className="container mx-auto px-3 xl:flex xl:px-0 xl:items-center">
              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Giới thiệu <i className="fa-solid fa-caret-down"></i>
                </a>

                <ul className="px-2 z-10 sub-menu xl:absolute xl:z-20 xl:px-8 xl:py-2">
                  <li className="py-1">
                    <Link href="/#introduction"> - Giới thiệu chung </Link>
                  </li>

                  <li className="py-1">
                    <Link href="/organizational_chart">
                      - Sơ đồ tổ chức bộ máy trung tâm CNNT&TT Lào Cai
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Sách điện tử <i className="fa-solid fa-caret-down"></i>
                </a>

                <ul className="px-2 z-10 sub-menu xl:absolute xl:z-20 xl:px-8 xl:py-2">
                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/van_kien_dai_hoi/index.html"
                      target="_blank"
                    >
                      Văn kiện đại hội
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/so_tay_cham_soc_tre_mac_covid19_tai_nha/index.html"
                      target="_blank"
                    >
                      Sổ tay chăm sóc trẻ mắc COVID-19 tại nhà
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/lich-su-db-khoi-cq/"
                      target="_blank"
                    >
                      Lịch sử đảng bộ khối các cơ quan tỉnh Lào Cai
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link href="http://lcit.vn/ebook/so_tay/" target="_blank">
                      Sổ tay phát ngôn và cung cấp thông tin cho báo trí
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/05._QD_3389_QD_UNBD/"
                      target="_blank"
                    >
                      QĐ 3389/QĐ-UBND_ PT- KTXH, ĐTC và DT_NSNN tỉnh Lào Cai năm
                      2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/06._KH_dau_tu_cong_tinh_Lao_Cai"
                      target="_blank"
                    >
                      KH ĐTC năm 2023 tỉnh Lào Cai
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/07_H_BacHa"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Bắc Hà năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/3389.QĐ_UBND_Huyen_Bao_Thang"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Bảo Thắng năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/09_H_BaoYen/"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Bảo Yên năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/10_H_BatXat"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Bát Xát năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/11_H_MuongKhuong"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Mường Khương năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/12_H_VanBan"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Văn Bàn năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/13_H_Simacai"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN H. Simacai năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/v2/14_TH_LaoCai"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN TP Lào Cai năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/3389.QĐ_UBND_Thi_xa_SaPa"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN T.x Sa Pa năm 2023
                    </Link>
                  </li>

                  <li className="py-1">
                    <Link
                      href="http://lcit.vn/ebook/3389_ebook/3389.QĐ_UBND_Tinh_Lao_Cai"
                      target="_blank"
                    >
                      Chỉ tiêu KH_KTXH, ĐTC và DT_NSNN Tỉnh Lào Cai năm 2023
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Tin tức <i className="fa-solid fa-caret-down"></i>
                </a>

                <ul className="px-2 z-10 sub-menu xl:absolute xl:z-20 xl:px-8 xl:py-2">
                  <li className="py-1">
                    <a href="#"> - Bản tin nội bộ </a>
                  </li>

                  <li className="py-1">
                    <a href="#"> - Tin công nghệ </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Dịch vụ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Liên hệ <i className="fa-solid fa-caret-down"></i>
                </a>
                <ul className="px-2 z-10 sub-menu xl:absolute xl:z-20 xl:px-8 xl:py-2">
                  <li className="py-1">
                    <a href="#"> - Phòng chăm sóc khách hàng </a>
                  </li>

                  <li className="py-1">
                    <a href="#"> - Phòng kỹ thuật </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Báo giá
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="uppercase lg:px-2 transition duration-200 block relative py-2"
                >
                  Đào tạo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="uppercase transition duration-200 block relative py-2"
                >
                  Tuyển dụng
                </a>
              </li>

              <li className="lg:ml-2 lg:hidden">
                <form className="border-black search-box">
                  <input
                    type="text"
                    name="key"
                    className="w-11/12 outline-0 py-1 px-2"
                    placeholder="TÌM KIẾM..."
                  />
                  <button className="px-2 py-1 button-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>
            </ul>
          </div>

          <button
            className="button_show_menu text-3xl p-2 lg:block xl:hidden"
            onClick={() => toggleNav()}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <form className="border-black search-box hidden lg:flex">
            <input
              type="text"
              name="key"
              className="w-10 md:w-32 xl:w-40 outline-0 py-1 px-2 hidden lg:block"
              placeholder="TÌM KIẾM..."
            />
            <button className="px-2 py-1 button-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
