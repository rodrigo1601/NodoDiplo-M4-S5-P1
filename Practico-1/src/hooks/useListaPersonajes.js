import { useItem } from "./useItem";
import { useFilters } from "./useFilters";
import { usePagination } from "./usePagination";

export function useListaPersonajes() {
    const { items, loading } = useItem();

    const allFilters = useFilters(items);

    const allPagination = usePagination(allFilters.filteredData, 20);

    return {
        loading,
        allFilters,
        allPagination
    };
}