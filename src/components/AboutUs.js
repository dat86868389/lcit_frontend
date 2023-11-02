export default function AboutUs() {
  return (
    <div className="container mt-4">
      <p className="text-3xl text-sky-500 font-bold">Về chúng tôi</p>
      <div className="grid grid-cols-3">
        <div className="p-4">
          <div className="w-fit relative h-fit z-10">
            <img
              src="/images/stttt.png"
              className="w-80 h-80 rounded-full relative z-20"
            />
            <div className="bg-sky-500 top-0 balloon"></div>
          </div>
        </div>

        <div className="col-span-2">
          <p className="indent-4">
            Trung tâm Công nghệ Thông tin và Truyền thông Lào Cai được thành lập
            theo Quyết định số: 418/QĐ-UB ngày 17/12/2001 của Uỷ ban Nhân dân
            tỉnh Lào Cai với tên gọi là Trung tâm Công nghệ thông tin tỉnh Lào
            Cai. Là đơn vị kỹ thuật thực hiện các nhiệm vụ về ứng dụng và phát
            triển Công nghệ thông tin và Truyền thông; Tổ chức đào tạo, bồi
            dưỡng, thi cấp chứng chỉ ứng dụng Công nghệ thông tin; Cung cấp và
            thực hiện các dịch vụ khác trong lĩnh vực ứng dụng Công nghệ thông
            tin và Truyền thông trên địa bàn tỉnh Lào Cai.
          </p>

          <p className="indent-4 mt-2">
            Ngày 10/10/2006 theo Quyết định số 2836/QĐ.UBND của Uỷ ban Nhân dân
            tỉnh Lào Cai về việc kiện toàn đổi tên “Trung tâm Công nghệ thông
            tin tỉnh Lào Cai” thành “Trung tâm Công nghệ Thông tin và Viễn thông
            Lào Cai”
          </p>

          <p className="indent-4 mt-2">
            Ngày 5/11/2013, theo Quyết định số 3048/QĐ-UBND của UBND tỉnh Lào
            Cai về kiện toàn, đổi tên “Trung tâm Công nghệ Thông tin và Viễn
            thông Lào Cai” thành “Trung tâm Công nghệ thông tin và Truyền thông
            Lào Cai”;
          </p>

          <p className="indent-4 mt-2">
            Quyết định số 1473/QĐ-UBND ngày 18 tháng 5 năm 2018 của UBND tỉnh
            Lào Cai về việc sửa đổi, bổ sung một số Điều tại Quyết định số
            3048/QĐ-UBND ngày 5/11/2013 của UBND tỉnh Lào Cai
          </p>
          <p className="indent-4 mt-2">
            Quyết định số 348/QĐ-UBND ngày 01/02/2019 của UBND tỉnh Lào Cai Về
            việc kiện toàn, chức năng nhiệm vụ, cơ cấu tổ chức bộ máy và chuyển
            đổi cơ chế tài chính sang đơn vị đảm bảo chi thường xuyên của Trung
            tâm Công nghệ thông tin và Truyền thông thuộc Sở Thông tin và Truyền
            thông
          </p>
        </div>
      </div>
    </div>
  );
}
