import { useState } from "react";

const TransformationInput = ({ transformations, onAdd, onRemove }) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const handleAdd = () => {

        if (!name.trim() || !image.trim()) return;

        onAdd({
            name: name.trim(),
            image: image.trim()
        });

        setName("");
        setImage("");
    };

    return (

        <div>

            <label className="block mb-2">
                Transformaciones
            </label>

            <div className="space-y-3">

                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                        w-full p-3 rounded-xl
                        bg-gray-800 border border-gray-700
                    "
                />

                <input
                    type="text"
                    placeholder="Imagen URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="
                        w-full p-3 rounded-xl
                        bg-gray-800 border border-gray-700
                    "
                />

                {image && (
                    <img
                        src={image}
                        alt="preview"
                        className="
                            w-32 h-32 object-cover object-top rounded-xl
                            border border-purple-500
                        "
                    />
                )}

                <button
                    type="button"
                    onClick={handleAdd}
                    className="
                        px-4 py-2 rounded-xl
                        bg-purple-600 hover:bg-purple-500
                        transition
                    "
                >
                    Agregar transformación
                </button>

            </div>

            <div className="flex flex-wrap gap-4 mt-6">

                {transformations.map((t, index) => (

                    <div
                        key={index}
                        className="
                            bg-gray-900 border border-purple-500/30
                            rounded-xl p-3 w-40
                            flex flex-col
                        "
                    >

                        <img
                            src={t.image}
                            alt={t.name}
                            className="
                                w-full h-32 object-cover object-top rounded-lg mb-2
                            "
                        />

                        <p className="text-sm font-bold text-purple-300">
                            {t.name}
                        </p>

                        <div className="flex justify-evenly items-center mt-auto pt-3">
                            <button
                            type="button"
                            onClick={() => {

                                setName(t.name);
                                setImage(t.image);

                                onRemove(index);
                            }}
                            className="
                                mt-1 text-xs text-yellow-400
                                hover:text-yellow-300
                            "
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className="
                                    mt-1 text-xs text-red-400
                                    hover:text-red-300
                                "
                            >
                                Eliminar
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default TransformationInput;