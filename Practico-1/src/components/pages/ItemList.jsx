import { useState } from "react";
import { useItem } from "../../hooks/useItem";
import ItemCard from "./ItemCard";
import SearchBar from "../SearchBar";
import Filters from "../Filters";
import { useListaPersonajes } from "../../hooks/useListaPersonajes";


const ItemList = () => {
    const { items, getItems, deleteItem } = useItem();

    const { allFilters, allPagination } = useListaPersonajes();

    const [reloading, setReloading] = useState(false);

    const handleReload = async () => {

        if (reloading) return;

        setReloading(true);

        await getItems();

        setTimeout(() => {
            setReloading(false);
        }, 10000);
    };

    return (
        <div className="min-h-screen bg-black px-6 py-10">

            <div className="text-center mb-12">
                <p className="text-orange-500 text-xs font-bold tracking-[0.4em] uppercase mb-2">
                    ★ Dragon Ball Universe ★
                </p>
                <h1 className="text-5xl font-black text-yellow-400 uppercase tracking-tight"
                    style={{ textShadow: "0 0 40px rgba(251,146,60,0.4)" }}>
                    Personajes
                </h1>
                <div className="mt-3 mx-auto w-20 h-px bg-linear-to-r from-transparent via-orange-500 to-transparent" />
                <p className="text-gray-600 mt-3 text-xs tracking-widest uppercase">
                    {items.length} personajes encontrados
                </p>
            </div>

            <div className="max-w-6xl mx-auto mb-10 flex flex-col gap-6">

                <div className="flex justify-center">
                    <button
                        onClick={handleReload}
                        disabled={reloading}
                        className={`
                            px-5 py-3 rounded-xl
                            border border-yellow-500/40
                            font-bold tracking-wide
                            transition-all
                            shadow-lg shadow-yellow-500/10

                            ${reloading
                                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 hover:scale-105"
                            }
                        `}
                    >
                        {reloading ? "No disponible" : "Recargar"}
                    </button>
                </div>

                <SearchBar
                    value={allFilters.search}
                    onChange={allFilters.setSearch}
                />

                <Filters
                    items={items}

                    saga={allFilters.saga}
                    setSaga={allFilters.setSaga}

                    status={allFilters.status}
                    setStatus={allFilters.setStatus}

                    canon={allFilters.canon}
                    setCanon={allFilters.setCanon}

                    planet={allFilters.planet}
                    setPlanet={allFilters.setPlanet}
                />

            </div>

            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
                {allFilters.filteredData.map(item => (
                    <ItemCard
                        key={item.id}
                        item={{ ...item, onDelete: deleteItem }}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center mt-10 gap-4">

                <button
                    onClick={allPagination.prevPage}
                    disabled={allPagination.currentPage === 1}
                    className={`
                        px-5 py-2.5 rounded-xl
                        border border-yellow-500/30
                        font-bold text-sm tracking-wide
                        transition-all duration-200
                        shadow-lg shadow-yellow-500/10

                        ${allPagination.currentPage === 1
                            ? "bg-gray-900 text-gray-600 cursor-not-allowed opacity-60"
                            : `
                                bg-yellow-500/20
                                text-yellow-400
                                hover:bg-yellow-500/30
                                hover:scale-105
                                hover:border-yellow-400
                            `
                        }
                    `}
                >
                    ← Anterior
                </button>

                <div className="
                    px-5 py-2.5 rounded-xl
                    bg-gray-900
                    border border-orange-500/20
                    text-sm tracking-widest uppercase
                    text-yellow-100
                    shadow-lg shadow-orange-500/5
                ">
                    Página
                    <span className="text-yellow-400 font-black mx-2">
                        {allPagination.currentPage}
                    </span>
                    de
                    <span className="text-orange-400 font-black mx-2">
                        {allPagination.totalPages}
                    </span>
                </div>

                <button
                    onClick={allPagination.nextPage}
                    disabled={allPagination.currentPage === allPagination.totalPages}
                    className={`
                        px-5 py-2.5 rounded-xl
                        border border-yellow-500/30
                        font-bold text-sm tracking-wide
                        transition-all duration-200
                        shadow-lg shadow-yellow-500/10

                        ${allPagination.currentPage === allPagination.totalPages
                            ? "bg-gray-900 text-gray-600 cursor-not-allowed opacity-60"
                            : `
                                bg-yellow-500/20
                                text-yellow-400
                                hover:bg-yellow-500/30
                                hover:scale-105
                                hover:border-yellow-400
                            `
                        }
                    `}
                >
                    Siguiente →
                </button>

            </div>
        </div>
    );
};

export default ItemList;