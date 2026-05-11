import { Link } from "react-router-dom";
import { useCrudItem } from "../../hooks/useCrudItem";

const ItemCard = ({ item }) => {

    const { handleDelete } = useCrudItem();

    return (
        <div className="
            group relative w-64
            rounded-2xl overflow-hidden
            bg-gray-950
            border border-yellow-900/40
            hover:border-yellow-500/70
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div className="relative h-72 overflow-hidden bg-black">
                <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent" />

                <span className={`
                    absolute top-3 right-3
                    text-xs font-bold px-2 py-1 rounded-full
                    flex items-center gap-1
                    ${item.isAlive
                        ? "bg-green-500/20 text-green-400 border border-green-500/40"
                        : "bg-red-500/20 text-red-400 border border-red-500/40"
                    }
                `}>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.isAlive ? "bg-green-400" : "bg-red-400"}`} />
                    {item.isAlive ? "Vivo" : "Muerto"}
                </span>

                <span
                    className={`
                        absolute top-3 left-3
                        text-xs font-bold px-2 py-1 rounded-full border
                        ${item.isCanon
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/40"
                            : "bg-red-500/20 text-red-400 border-red-500/40"
                        }
                    `}
                >
                    {item.isCanon ? "Canon" : "No Canon"}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-lg font-black text-white uppercase tracking-wide leading-tight">
                        {item.name}
                    </h2>
                    <p className="text-yellow-500/80 text-xs font-semibold mt-0.5">
                        {item.race} · {item.planet}
                    </p>
                </div>
            </div>

            <div className="px-4 py-3 flex justify-between items-center border-t border-yellow-900/30">
                <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Género</p>
                    <p className="text-gray-200 text-sm font-semibold">{item.gender}</p>
                </div>
                <div className="w-px h-8 bg-yellow-900/40" />
                <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Poder</p>
                    <p className="text-yellow-400 text-sm font-black">{item.powerLevel?.toLocaleString()}</p>
                </div>
                <div className="w-px h-8 bg-yellow-900/40" />
                <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Saga</p>
                    <p className="text-gray-200 text-xs font-semibold truncate max-w-16">{item.firstAppearance?.replace("Dragon Ball ", "DB ")}</p>
                </div>
            </div>

            <div className="px-4 pb-4 flex gap-2">
                <Link
                    to={`/items/${item.id}`}
                    className="
                        flex-1 text-center py-1.5 rounded-lg text-xs font-bold
                        bg-transparent border border-blue-600/60
                        text-blue-400 hover:bg-blue-600/20
                        transition-colors
                    "
                >
                    Ver
                </Link>
                <Link
                    to={`/items/edit/${item.id}`}
                    className="
                        flex-1 text-center py-1.5 rounded-lg text-xs font-bold
                        bg-transparent border border-yellow-500/60
                        text-yellow-400 hover:bg-yellow-500/20
                        transition-colors
                    "
                >
                    Editar
                </Link>
                <button
                    onClick={() => handleDelete(item)}
                    className="
                        px-3 py-1.5 rounded-lg text-xs font-bold
                        bg-transparent border border-red-700/60
                        text-red-400 hover:bg-red-700/20
                        transition-colors
                    "
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ItemCard;