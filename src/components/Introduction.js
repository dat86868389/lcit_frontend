"use client";
import { useEffect } from "react";

export default function Introduction() {
  useEffect(() => {
    // introduction-details
    const introductionDetails = document.querySelector(".introduction-details");
    window.addEventListener(
      "scroll",
      () => {
        const top = introductionDetails.offsetTop - 500;
        const html = document.documentElement;
        if (html.scrollTop >= top) {
          if (!introductionDetails.classList.contains("active")) {
            introductionDetails.classList.add("active");
          }
        }
      },
      { passive: true }
    );
  }, []);

  return (
    <div className="introduction overflow-hidden relative" id="introduction">
      <div className="sub_bg_img1">
        <img src="/images/sub_bg_1.gif" alt="" />
      </div>
      <div className="container w-fit mx-auto">
        <div className="relative w-fit intro_title">
          <p className="text-3xl font-black mb-3 text-center">Giới thiệu chung</p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-1 lg:grid-cols-4 introduction-details">
          <div className="lg:col-span-2">
            <p className="font-bold intro-animation relative text-center text-2xl">
              Tên đầy đủ
            </p>
            <p className="text-center">
              Trung tâm Công nghệ Thông tin và Truyền thông Lào Cai
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-bold intro-animation relative text-center text-2xl">
              Giám đốc trung tâm
            </p>
            <p className="text-center">Nguyễn Hồng Quang</p>
          </div>
          <div className="lg:col-span-4">
            <p className="indent-4">
              Trung tâm Công nghệ Thông tin và Truyền thông Lào Cai được thành
              lập theo Quyết định số: 418/QĐ-UB ngày 17/12/2001 của Uỷ ban Nhân
              dân tỉnh Lào Cai với tên gọi là Trung tâm Công nghệ thông tin tỉnh
              Lào Cai. Là đơn vị kỹ thuật thực hiện các nhiệm vụ về ứng dụng và
              phát triển Công nghệ thông tin và Truyền thông; Tổ chức đào tạo,
              bồi dưỡng, thi cấp chứng chỉ ứng dụng Công nghệ thông tin; Cung
              cấp và thực hiện các dịch vụ khác trong lĩnh vực ứng dụng Công
              nghệ thông tin và Truyền thông trên địa bàn tỉnh Lào Cai.
            </p>
          </div>
          <div>
            <p className="indent-4">
              Ngày 10/10/2006 theo Quyết định số 2836/QĐ.UBND của Uỷ ban Nhân
              dân tỉnh Lào Cai về việc kiện toàn đổi tên “Trung tâm Công nghệ
              thông tin tỉnh Lào Cai” thành “Trung tâm Công nghệ Thông tin và
              Viễn thông Lào Cai”
            </p>
          </div>
          <div>
            <p className="indent-4">
              Ngày 5/11/2013, theo Quyết định số 3048/QĐ-UBND của UBND tỉnh Lào
              Cai về kiện toàn, đổi tên “Trung tâm Công nghệ Thông tin và Viễn
              thông Lào Cai” thành “Trung tâm Công nghệ thông tin và Truyền
              thông Lào Cai”;
            </p>
          </div>

          <div className="indent-4">
            <p>
              Quyết định số 1473/QĐ-UBND ngày 18 tháng 5 năm 2018 của UBND tỉnh
              Lào Cai về việc sửa đổi, bổ sung một số Điều tại Quyết định số
              3048/QĐ-UBND ngày 5/11/2013 của UBND tỉnh Lào Cai.
            </p>
          </div>
          <div className="indent-4">
            <p>
              Quyết định số 348/QĐ-UBND ngày 01/02/2019 của UBND tỉnh Lào Cai Về
              việc kiện toàn, chức năng nhiệm vụ, cơ cấu tổ chức bộ máy và
              chuyển đổi cơ chế tài chính sang đơn vị đảm bảo chi thường xuyên
              của Trung tâm Công nghệ thông tin và Truyền thông thuộc Sở Thông
              tin và Truyền thông
            </p>
          </div>

          <div className="lg:col-span-4">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/eRh50jbOEI0?si=J9E0rPArzaw7Jn8f"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
