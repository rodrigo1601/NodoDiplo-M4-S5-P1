import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useItem } from "../../hooks/useItem";
import TransformationList from "../TransformationList";

const StatBadge = ({ label, value, accent = false }) => (
    <div className="flex flex-col items-center bg-gray-900 border border-yellow-900/40 rounded-xl px-4 py-3 min-w-24">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
        <p className={`text-sm font-black ${accent ? "text-yellow-400" : "text-gray-200"}`}>{value}</p>
    </div>
);

const TagList = ({ label, items, color = "yellow" }) => {
    const colors = {
        yellow: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",
        purple: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
    };

    return (
        <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">{label}</h3>
            {items.length === 0 ? (
                <p className="text-gray-600 text-sm italic">Sin registros</p>
            ) : (
                <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <span key={index} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${colors[color]}`}>
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Detail = () => {
    const { id } = useParams();
    const { itemDetail, getItemById } = useItem();

    useEffect(() => {
        getItemById(id);
    }, [id, getItemById]);

    if (!itemDetail) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-yellow-400 text-lg font-black uppercase tracking-widest animate-pulse">
                    Cargando...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-4xl mx-auto">

                <Link
                    to="/items"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-semibold mb-8 transition-colors"
                >
                    ← Volver a la lista
                </Link>

                <div className="flex flex-col md:flex-row gap-8 mb-10">

                    <div className="relative w-full md:w-72 shrink-0">
                        <div className="rounded-2xl overflow-hidden border-2 border-yellow-900/50 h-96 md:h-full">
                            <img
                                src={itemDetail.avatar}
                                alt={itemDetail.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <span className={`
                            absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full
                            flex items-center gap-1.5
                            ${itemDetail.isAlive
                                ? "bg-green-500/20 text-green-400 border border-green-500/40"
                                : "bg-red-500/20 text-red-400 border border-red-500/40"
                            }
                        `}>
                            <span className={`w-1.5 h-1.5 rounded-full ${itemDetail.isAlive ? "bg-green-400" : "bg-red-400"}`} />
                            {itemDetail.isAlive ? "Vivo" : "Muerto"}
                        </span>

                        {itemDetail.isCanon && (
                            <span className="
                                absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full
                                bg-yellow-500/20 text-yellow-400 border border-yellow-500/40
                            ">
                                Canon
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col justify-between flex-1">

                        <div>
                            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">
                                {itemDetail.firstAppearance}
                            </p>
                            <h1
                                className="text-4xl md:text-5xl font-black uppercase text-white mb-1 leading-tight"
                                style={{ textShadow: "0 0 30px rgba(251,146,60,0.3)" }}
                            >
                                {itemDetail.name}
                            </h1>
                            <p className="text-yellow-500/70 text-sm font-semibold mb-6">
                                {itemDetail.race} · {itemDetail.planet}
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {itemDetail.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <StatBadge label="Género"     value={itemDetail.gender} />
                            <StatBadge label="Afiliación" value={itemDetail.affiliation || "—"} />
                            <StatBadge label="Nivel de poder" value={itemDetail.powerLevel?.toLocaleString()} accent />
                        </div>

                    </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-yellow-900/60 to-transparent mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <TagList
                        label="Técnicas"
                        items={itemDetail.techniques}
                        color="yellow"
                    />
                    <TransformationList
                        transformations={itemDetail.transformations}
                    />
                </div>

            </div>
        </div>
    );
};

export default Detail;