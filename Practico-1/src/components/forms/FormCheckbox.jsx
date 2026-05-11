const FormCheckbox = ({ label, register }) => (
    <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register} />
        {label}
    </label>
);

export default FormCheckbox;