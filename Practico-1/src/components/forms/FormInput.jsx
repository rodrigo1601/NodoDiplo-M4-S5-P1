const FormInput = ({ label, register, error, ...props }) => (
    <div>
        <label className="block mb-2">{label}</label>
        <input
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            {...register}
            {...props}
        />
        {error && <p className="text-red-400 mt-1">{error.message}</p>}
    </div>
);

export default FormInput;