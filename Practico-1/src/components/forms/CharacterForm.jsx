import { useForm } from "react-hook-form";
import { useTagList } from "../../hooks/useTagList";
import { useList } from "../../hooks/useList";
import AvatarPreview from "./AvatarPreview";
import TagInput from "./TagInput";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import TransformationInput from "./TransformationInput";

const GENDER_OPTIONS    = ["Hombre", "Mujer", "Desconocido"];
const SAGA_OPTIONS      = ["Dragon Ball", "Dragon Ball Z", "Dragon Ball GT", "Dragon Ball Super", "Dragon Ball Heroes"];

const CharacterForm = ({ onSubmit, defaultValues = {}, submitLabel = "Guardar", initialTechniques = [], initialTransformations = [] }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        values: {
            name: "", avatar: "", gender: "", race: "",
            planet: "", isAlive: false, isCanon: false,
            powerLevel: 0, affiliation: "", description: "",
            firstAppearance: "", ...defaultValues
        }
    });

    const techniques      = useTagList(initialTechniques);
    const transformations = useList(initialTransformations);

    const submit = (data) => {
        onSubmit({ ...data, techniques: techniques.tags, transformations: transformations.items });
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-6">

            <FormInput
                label="Nombre"
                register={register("name", { required: "El nombre es obligatorio" })}
                error={errors.name}
            />

            <FormInput
                label="Avatar URL"
                register={register("avatar", { required: "El avatar es obligatorio" })}
                error={errors.avatar}
            />

            <AvatarPreview url={watch("avatar")} />

            <div>
                <label className="block mb-2">Descripción</label>
                <textarea
                    rows="4"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    {...register("description", { required: "La descripción es obligatoria", minLength: { value: 5, message: "Mínimo 5 letras" } })}
                />
                {errors.description && <p className="text-red-400 mt-1">{errors.description.message}</p>}
            </div>

            <FormSelect
                label="Género"
                register={register("gender", { required: "Selecciona un género" })}
                error={errors.gender}
                options={GENDER_OPTIONS}
            />

            <FormInput
                label="Raza"
                register={register("race", { required: "La raza es obligatoria", minLength: { value: 5, message: "Mínimo 5 letras" } })}
                error={errors.race}
            />

            <FormInput
                label="Planeta"
                register={register("planet", { required: "El planeta es obligatorio", minLength: { value: 3, message: "Mínimo 3 letras" } })}
                error={errors.planet}
            />

            <div className="flex gap-6">
                <FormCheckbox label="Está vivo" register={register("isAlive")} />
                <FormCheckbox label="Es canon"  register={register("isCanon")} />
            </div>

            <FormInput
                label="Nivel de poder"
                type="number"
                register={register("powerLevel", { min: { value: 0, message: "No puede ser negativo" } })}
                error={errors.powerLevel}
            />

            <FormInput
                label="Afiliación"
                register={register("affiliation")}
            />

            <FormSelect
                label="Primera aparición"
                register={register("firstAppearance", { required: "Selecciona una saga" })}
                error={errors.firstAppearance}
                options={SAGA_OPTIONS}
            />

            <TagInput label="Técnicas" color="yellow"
                input={techniques.input} setInput={techniques.setInput}
                tags={techniques.tags} onAdd={techniques.add} onRemove={techniques.remove} />

            <TransformationInput
                transformations={transformations.items}
                onAdd={transformations.add}
                onRemove={transformations.remove}
            />

            <button type="submit"
                className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition">
                {submitLabel}
            </button>

        </form>
    );
};

export default CharacterForm;