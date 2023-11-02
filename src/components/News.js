import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function News() {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex items-center justify-between">
        <p className="text-3xl text-sky-500 font-bold">Tin xem nhiều</p>
        
    
        <Link href={`#`} className="text-base hover:text-sky-500">
          Xem thêm <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden hover:text-sky-500">
          <Link href={`#`}>
            <img src="/images/blog1.jpg" className="rounded-lg w-full h-40" />
            <p className="text-center text-elipse-2">
              Bài viết số 1 wqewq wqwew wqe ưqe wqewq ewq wqe wqewq ewqe  ưq
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
