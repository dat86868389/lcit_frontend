import Image from "next/image";
export default function ItemSection(props) {
  return (
    <div className="most-viewed-news py-3 mt-10">
      <div className="container mx-auto">
        <div className="relative border-linear py-6">
          <div className="absolute title-2">
            <h1 className="font-black w-fit text-2xl rounded-full bg-header text-white p-3">
              Tin xem nhiều
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 mt-2 gap-3 px-2">
            {props.listBook.splice(0, 8).map((e) => (
              <div className="shadow-md artical_hover p-2 hover:shadow-gray-800 transition duration-200">
                <a href="#" title={e.title}>
                  <div className="flex">
                    <div>
                    <div className="block w-20 h-20">
                      <img src="/images/blog1.jpg" alt="anh j do" className="w-full h-full"/>
                    </div>
                    </div>

                    <div className="ml-2">
                      <p className="artical_hover_title truncate-2">
                        {e.title}
                      </p>
                      <p>
                        <i className="fa-regular fa-calendar"></i> 15/09/2023
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
