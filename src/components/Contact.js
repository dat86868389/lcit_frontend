export default function Contact() {
  return (
    <div className="contact p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div>
            <h1 className="font-semibold text-3xl">Chúng tôi có thể giúp gì?</h1>
            <p className="text-color-brown">
              Để không ngừng nâng cao chất lượng dịch vụ và đáp ứng tốt hơn nữa
              các yêu cầu của Quý khách, chúng tôi mong muốn nhận được các thông
              tin phản hồi. Nếu Quý khách có bất kỳ thắc mắc hoặc đóng góp nào,
              xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây. Chúng
              tôi sẽ phản hồi lại Quý khách trong thời gian sớm nhất.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              <div className="flex mt-5">
                <div className="rounded-full bg-header text-white h-fit p-5 flex justify-center items-center">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-2xl">Địa chỉ của chúng tôi</p>
                  <p className="text-color-brown">
                    Sở thông tin truyền thông Lào Cai - Đại lộ Trần Hưng Đạo,
                    Phường Nam Cường, Thành phố Lào Cai, Lào Cai
                  </p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="rounded-full bg-header text-white h-fit p-5 flex justify-center items-center">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-2xl">Số điện thoại hỗ trợ</p>
                  <p className="text-color-brown">Hotline: 1900 1234</p>
                  <p className="text-color-brown">Hotline: 1900 3234</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="rounded-full bg-header text-white h-fit p-5 flex justify-center items-center">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <div className="ml-3">
                  <p className="font-semibold text-2xl">Email</p>
                  <p className="text-color-brown">trungtamcntttt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p>
                <label className="text-color-brown" htmlFor="contact-name">
                  Họ và tên
                </label>
              </p>
              <input
                type="text"
                placeholder="Họ và tên"
                id="contact-name"
                className="py-2 w-full px-2 bg-input"
              />
            </div>

            <div>
              <p>
                <label className="text-color-brown" htmlFor="contact-email">
                  Email
                </label>
              </p>
              <input
                type="text"
                placeholder="Email"
                id="contact-email"
                className="py-2 w-full px-2 bg-input"
              />
            </div>

            <div>
              <p>
                <label className="text-color-brown" htmlFor="contact-phone">
                  Số điện thoại
                </label>
              </p>
              <input
                type="text"
                placeholder="Số điện thoại"
                id="contact-phone"
                className="py-2 w-full px-2 bg-input"
              />
            </div>

            <div>
              <p>
                <label className="text-color-brown" htmlFor="contact-adress">
                  Địa chỉ
                </label>
              </p>
              <input
                type="text"
                placeholder="Địa chỉ (có thể bỏ trống)"
                id="contact-adress"
                className="py-2 w-full px-2 bg-input"
              />
            </div>

            <div className="col-span-2">
              <p>
                <label className="text-color-brown" htmlFor="contact-message">
                  Lời nhắn
                </label>
              </p>
              <textarea
                className="w-full p-2 bg-input"
                rows="6"
                id="contact-message"
                placeholder="Lời nhắn - tối đa 255 ký tự"
                maxLength="255"
              ></textarea>
            </div>

            <button className="bg-primary text-white py-2 col-span-2">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}
