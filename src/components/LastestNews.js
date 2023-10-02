import Link from "next/link";
import SliderIpad from "./sliders/SliderIpad";
import SliderMobile from "./sliders/SliderMobile";
import SliderPC from "./sliders/SliderPC";

export default function LastestNews() {
  return (
    <>
      <div className="latest-news p-4 flex items-center relative overflow-hidden bg-white">
        <div className="sub_bg_img2">
          <img src="/images/sub_bg_2.gif" alt="" />
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold sm:text-5xl lg:text-6xl">
              Tin tức mới nhất
            </span>
            <Link href="/see_all/1" className="p-1 rounded lg:p-3 bg-header z-20">
              Xem tất cả
            </Link>
          </div>
          <SliderMobile />
          <SliderIpad />
          <SliderPC />
        </div>
      </div>
    </>
  );
}