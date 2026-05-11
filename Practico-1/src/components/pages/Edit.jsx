import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useItem } from "../../hooks/useItem";
import { useCrudItem } from "../../hooks/useCrudItem";
import CharacterForm from "../forms/CharacterForm";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { itemDetail, getItemById } = useItem();
    const { handleUpdate } = useCrudItem();

    useEffect(() => {
        getItemById(id);
    }, [id]);

    const handleSubmit = async (data) => {
        const ok = await handleUpdate(id, data);
        if (ok) navigate("/items");
    };

    if (!itemDetail) return <p className="text-white p-10">Cargando...</p>;

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-3xl mx-auto bg-gray-900 border border-yellow-500/30 rounded-2xl p-8 shadow-xl">

                <Link to="/items" className="inline-block mb-6 text-yellow-400 hover:text-yellow-300">
                    ← Volver
                </Link>

                <h1 className="text-4xl font-black text-yellow-400 mb-8">
                    Editar Personaje
                </h1>

                <CharacterForm
                    key={itemDetail.id}
                    onSubmit={handleSubmit}
                    defaultValues={itemDetail}
                    initialTechniques={itemDetail.techniques}
                    initialTransformations={itemDetail.transformations}
                    submitLabel="Guardar cambios"
                />

            </div>
        </div>
    );
};

export default Edit;