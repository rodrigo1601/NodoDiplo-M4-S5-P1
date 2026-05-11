import { useState } from "react";

export function usePagination(data = [], itemsPerPage = 20) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.max(Math.ceil(data.length / itemsPerPage), 1);

    const safePage = Math.min(currentPage, totalPages);

    const indexOfLast = safePage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    const currentData = data.slice(indexOfFirst, indexOfLast);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const goToPage = (page) => setCurrentPage(page);

    return {
        currentPage: safePage,
        totalPages,
        currentData,
        nextPage,
        prevPage,
        goToPage
    };
}