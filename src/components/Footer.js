export default function Footer() {
  return (
    <footer className="relative bg-footer">
      <div className="container mx-auto text-white py-10">
        <div className="grid lg:grid-cols-3 gap-2">
          <div>
            <h1 className="text-4xl font-semibold">
              Trung tâm CNTT & TT tỉnh Lào Cai
            </h1>
            <ul className="pl-3">
              <li className="py-1">
                <i className="fa-regular fa-file-lines"></i> Giấy phép số:
                020841285
              </li>
              <li className="py-1">
                <i className="fa-solid fa-flag"></i> Nguyễn Hồng Quang
              </li>
              <li className="py-1">
                <i className="fa-solid fa-location-dot"></i> Đại lộ Trần Hưng
                Đạo, Phường Nam Cường, Thành phố Lào Cai, Lào Cai
              </li>
              <li className="py-1">
                <i className="fa-solid fa-phone"></i> +84-24-0841285
              </li>
              <li className="py-1">
                <i className="fa-solid fa-fax"></i> +84-24-0841285
              </li>
              <li className="py-1">
                <i className="fa-solid fa-envelope"></i>{" "}
                contact@lcit.laocai.gov.vn
              </li>
              <li className="py-1">
                <i className="fa-solid fa-globe"></i> http://lcit.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
