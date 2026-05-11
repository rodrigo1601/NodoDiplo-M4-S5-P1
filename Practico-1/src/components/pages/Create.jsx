import { Link, useNavigate } from "react-router-dom";
import { useCrudItem } from "../../hooks/useCrudItem";
import CharacterForm from "../forms/CharacterForm";

const Create = () => {
    const navigate = useNavigate();
    const { handleCreate } = useCrudItem();

    const handleSubmit = async (data) => {
        const ok = await handleCreate(data);
        if (ok) navigate("/items");
    };

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-3xl mx-auto bg-gray-900 border border-yellow-500/30 rounded-2xl p-8 shadow-xl">

                <Link to="/items" className="inline-block mb-6 text-yellow-400 hover:text-yellow-300">
                    ← Volver
                </Link>

                <h1 className="text-4xl font-black text-yellow-400 mb-8">
                    Crear Personaje
                </h1>

                <CharacterForm onSubmit={handleSubmit} />

            </div>
        </div>
    );
};

export default Create;