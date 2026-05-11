import { useState, useMemo } from "react";

export function useFilters(data) {

    const [search, setSearch] = useState("");

    const [saga, setSaga] = useState("all");
    const [status, setStatus] = useState("all");
    const [canon, setCanon] = useState("all");
    const [planet, setPlanet] = useState("all");

    const filteredData = useMemo(() => {

        return data.filter(item => {

            const matchesSearch =
                item.name.toLowerCase().includes(search.toLowerCase());

            const matchesSaga =
                saga === "all" ||
                item.firstAppearance === saga;

            const matchesStatus =
                status === "all" ||
                (status === "alive" && item.isAlive) ||
                (status === "dead" && !item.isAlive);

            const matchesCanon =
                canon === "all" ||
                (canon === "canon" && item.isCanon) ||
                (canon === "noncanon" && !item.isCanon);

            const matchesPlanet =
                planet === "all" ||
                item.planet === planet;

            return (
                matchesSearch &&
                matchesSaga &&
                matchesStatus &&
                matchesCanon &&
                matchesPlanet
            );
        });

    }, [data, search, saga, status, canon, planet]);

    return {
        search,
        setSearch,

        saga,
        setSaga,

        status,
        setStatus,

        canon,
        setCanon,

        planet,
        setPlanet,

        filteredData
    };
}