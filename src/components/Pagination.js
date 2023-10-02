import Link from "next/link";

export default function Pagination(props) {
  const totalRecord = Number.parseInt(props.totalRecord);
  const page = Number.parseInt(props.page);
  const recordPerPage = Number.parseInt(props.recordPerPage);
  const pageSize = Number.parseInt(
    totalRecord % recordPerPage === 0
      ? totalRecord / recordPerPage
      : totalRecord / recordPerPage + 1
  );
  const leftSide = 2;
  const rightSide = 2;
  const midSide = 3;

  return printPageButtons(pageSize, leftSide, midSide, rightSide, page);
}

const printPageButtons = (pageSize, leftSide, midSide, rightSide, page) => {
  const leftMidRight = leftSide + midSide + rightSide;
  console.log(page);
  let html = [];
  if (pageSize <= leftMidRight) {
    for (let index = 1; index <= pageSize; index++) {
      html.push(
        <Link href={`/see_all/${index}`} className="bg-header mx-1 text-white px-3 py-2">
          {index}
        </Link>
      );
    }
    return html;
  } else {
    if (page <= leftSide + midSide -1) {
      for (let index = 1; index <= leftSide+midSide; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
      html.push(<span>...</span>);
      for (let index = pageSize - rightSide + 1; index <= pageSize; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
    } else if (page >= pageSize - rightSide - leftSide) {
      for (let index = 1; index <= leftSide; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
      html.push(<span>...</span>);
      for (
        let index = pageSize - rightSide - leftSide;
        index <= pageSize;
        index++
      ) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
    } else {
      console.log(123125);
      for (let index = 1; index <= leftSide; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
      html.push(<span>...</span>);
      for (let index = page - 1; index <= page + 1; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
      html.push(<span>...</span>);
      for (let index = pageSize - rightSide + 1; index <= pageSize; index++) {
        html.push(
          <Link
            href={`/see_all/${index}`}
            className="bg-header mx-1 text-white px-3 py-2"
          >
            {index}
          </Link>
        );
      }
    }

    return html;
  }
};
