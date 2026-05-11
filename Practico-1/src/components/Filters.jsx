import { useMemo } from "react";

const SAGA_OPTIONS = [
    "Dragon Ball",
    "Dragon Ball Z",
    "Dragon Ball GT",
    "Dragon Ball Super",
    "Dragon Ball Heroes"
];


const selectStyle = `
    px-4 py-3 rounded-xl
    bg-gray-900
    border border-yellow-500/30
    text-yellow-100
    focus:outline-none
    focus:border-yellow-400
    focus:ring-2
    focus:ring-yellow-500/30
    transition-all
    shadow-lg shadow-yellow-500/5
`;

function Filters({
    items,
    saga,
    setSaga,
    status,
    setStatus,
    canon,
    setCanon,
    planet,
    setPlanet
}) {

    const planets = useMemo(() => {

        const unique = [
            ...new Set(
                items
                    .map(item => item.planet?.trim())
                    .filter(Boolean)
            )
        ];

        return unique.sort();

    }, [items]);

    return (

        <div className="flex flex-wrap gap-4 mb-8">

            <select
                value={saga}
                onChange={(e) => setSaga(e.target.value)}
                className={selectStyle}
            >
                <option value="all">Todas las sagas</option>

                {SAGA_OPTIONS.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={selectStyle}
            >
                <option value="all">Todos</option>
                <option value="alive">Vivos</option>
                <option value="dead">Muertos</option>
            </select>

            <select
                value={canon}
                onChange={(e) => setCanon(e.target.value)}
                className={selectStyle}
            >
                <option value="all">Canon y no canon</option>
                <option value="canon">Canon</option>
                <option value="noncanon">No canon</option>
            </select>

            <select
                value={planet}
                onChange={(e) => setPlanet(e.target.value)}
                className={selectStyle}
            >
                <option value="all">Todos los planetas</option>

                {planets.map(p => (
                    <option key={p} value={p}>
                        {p}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default Filters;