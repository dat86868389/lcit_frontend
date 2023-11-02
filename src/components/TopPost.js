"use client";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function TopPost() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-2 mt-8">
      <div className="row-span-4 top-post p-2">
        <Link href={`#`}>
          <div className="w-full h-96 overflow-hidden">
            <img src="/images/blog1.jpg" className="w-full h-full" />
          </div>
          <p className="text-5xl font-semibold title">Bài viết số 1</p>
          <div className="flex justify-between">
            <p>NTDat</p>
            <p>20/2/2021</p>
          </div>
        </Link>
      </div>

    
      <div className="top-post hover:shadow-md p-2 hover:shadow-sky-600">
        <Link href={`#`}>
          <div className="flex h-full">
            <div className="w-44 h-full ">
              <div className="w-44 h-full overflow-hidden">
                <img src="/images/blog2.jpg" className="w-full h-full" />
              </div>
            </div>
            <div className="ml-2">
              <p className="text-elipse-2">
                Blog 2 wdqwd wqd qwdqwd wq wqd wq dwq w2 qwe wq qgrtgre erg erg ert ertre
                tre tre tre tre tert re tre wqewqewqe wqe wqe wqwq eqwe wqe wq
                ưqe
              </p>
              <div className="flex justify-between mt-2">
              <p>NTDat</p>
              <p>25/12/2021</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="top-post hover:shadow-md p-2 hover:shadow-sky-600">
        <Link href={`#`}>
          <div className="flex h-full">
            <div className="w-44 h-full ">
              <div className="w-44 h-full overflow-hidden">
                <img src="/images/blog3.jpg" className="w-full h-full" />
              </div>
            </div>
            <div className="ml-2">
              <p className="text-elipse-2">
                Blog 3 wdqwd wqd qwdqwd wq wqd wq dwq w2 qwe wq qgrtgre erg erg ert ertre
                tre tre tre tre tert re tre wqewqewqe wqe wqe wqwq eqwe wqe wq
                ưqe
              </p>
              <div className="flex justify-between mt-2">
              <p>NTDat</p>
              <p>25/12/2021</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="top-post hover:shadow-md p-2 hover:shadow-sky-600">
        <Link href={`#`}>
          <div className="flex h-full">
            <div className="w-44 h-full ">
              <div className="w-44 h-full overflow-hidden">
                <img src="/images/blog4.jpg" className="w-full h-full" />
              </div>
            </div>
            <div className="ml-2">
              <p className="text-elipse-2">
                Blog 4 wdqwd wqd qwdqwd wq wqd wq dwq w2 qwe wq qgrtgre erg erg ert ertre
                tre tre tre tre tert re tre wqewqewqe wqe wqe wqwq eqwe wqe wq
                ưqe
              </p>
              <div className="flex justify-between mt-2">
              <p>NTDat</p>
              <p>25/12/2021</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="top-post hover:shadow-md p-2 hover:shadow-sky-600">
        <Link href={`#`}>
          <div className="flex h-full">
            <div className="w-44 h-full ">
              <div className="w-44 h-full overflow-hidden">
                <img src="/images/blog5.jpg" className="w-full h-full" />
              </div>
            </div>
            <div className="ml-2">
              <p className="text-elipse-2">
                Blog 5 wdqwd wqd qwdqwd wq wqd wq dwq w2 qwe wq qgrtgre erg erg ert ertre
                tre tre tre tre tert re tre wqewqewqe wqe wqe wqwq eqwe wqe wq
                ưqe
              </p>
              <div className="flex justify-between mt-2">
              <p>NTDat</p>
              <p>25/12/2021</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}
