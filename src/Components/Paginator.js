import {useState} from "react";

export default function Paginator({totalItemsCount, pageSize, onPageChanged, portionSize = 3}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(page => {
            return <span key={page} onClick={(e) => {
                             onPageChanged(page)}}>{page}</span>})}
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}
