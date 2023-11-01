import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-800 py-2">
      <div className="container mx-auto grid grid-cols-3 text-white gap-4">
        <div>
          <div className="h-12">
            <span className="font-extrabold">
              Trung tâm công nghệ thông tin và truyền thông Lào Cai (LCIT)
            </span>
          </div>
          <ul className="text-sm">
            <li className="py-1">
              <i className="fa-regular fa-file-lines"></i> Giấy phép số:
              020841285
            </li>
            <li className="py-1">
              <i className="fa-regular fa-flag"></i> Chịu trách nhiệm: Nguyễn
              Hồng Quang
            </li>
            <li className="py-1">
              <i className="fa-solid fa-location-dot"></i> Địa chỉ: Đại lộ Trần
              Hưng Đạo, Phường Nam Cường, Thành phố Lào Cai, Lào Cai
            </li>
            <li className="py-1">
              <i className="fa-solid fa-phone"></i> Điện thoại: +84-24-0841285
            </li>
            <li className="py-1">
              <i className="fa-solid fa-fax"></i> Fax: +84-24-0841285
            </li>
            <li className="py-1">
              <i className="fa-solid fa-envelope"></i> Email:
              contact@lcit.laocai.gov.vn
            </li>
            <li className="py-1">
              <i className="fa-solid fa-globe"></i> Website:{" "}
              <Link className="text-sky-500 underline" href={`#`}>
                http://lcit.vn
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-x-2 border-solid border-white px-4">
          <div className="h-12">
            <span className="font-extrabold">Thể loại</span>
          </div>
          <ul className="text-sm">
            <li className="py-1 flex items-center justify-between w-full">
              <Link href={`#`}>Tin tức</Link>
              <p>100</p>
            </li>

            <li className="py-1 flex items-center justify-between w-full">
              <Link href={`#`}>Dịch vụ</Link>
              <p>2</p>
            </li>

            <li className="py-1 flex items-center justify-between w-full">
              <Link href={`#`}>Báo giá</Link>
              <p>2</p>
            </li>

            <li className="py-1 flex items-center justify-between w-full">
              <Link href={`#`}>Tuyển dụng</Link>
              <p>2</p>
            </li>

            <li className="py-1 flex items-center justify-between w-full">
              <Link href={`#`}>Đào tạo</Link>
              <p>2</p>
            </li>
          </ul>
        </div>

        <div className="text-black">
          <div className="h-12">
            <span className="font-extrabold text-white">
              Hãy đặt câu hỏi cho chúng tôi
            </span>
          </div>

          <form>
            <input placeholder="Họ và tên" className="w-full p-2 mb-2 border-2 border-solid border-sky-700"/>
            <input placeholder=" Đơn vị công tác" className="w-full p-2 mb-2 border-2 border-solid border-sky-700"/>
            <textarea placeholder="Câu hỏi hoặc yêu câu" className="w-full p-2 mb-2 border-2 border-solid border-sky-700"/> <br />
            <button className="border-2 py-2 px-8 text-white bg-sky-700 hover:border-amber-500 hover:bg-amber-700">Gửi</button>
          </form>
        </div>

        <div className="col-span-3 w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d921.8755227703771!2d104.00249322728975!3d22.44775888781024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd157824e5ef79%3A0x9fa81a79692d1c37!2zVHJ1bmcgdMOibSBjw7RuZyBuZ2jhu4cgdGjDtG5nIHRpbiB2w6AgdHJ1eeG7gW4gdGjDtG5nIEzDoG8gY2Fp!5e0!3m2!1svi!2s!4v1698806124255!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
