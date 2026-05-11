const FormSelect = ({ label, register, error, options = [] }) => (
    <div>
        <label className="block mb-2">{label}</label>
        <select
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            {...register}
        >
            <option value="">Seleccionar</option>
            {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        {error && <p className="text-red-400 mt-1">{error.message}</p>}
    </div>
);

export default FormSelect;