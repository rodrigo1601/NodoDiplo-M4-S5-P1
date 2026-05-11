function SearchBar({ value, onChange }) {

    return (
        <div className="flex justify-center mb-6">

            <input
                type="text"
                placeholder="Buscar personaje..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full max-w-md
                    px-5 py-3
                    rounded-xl
                    bg-gray-900
                    border border-yellow-500/30
                    text-yellow-100
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-yellow-400
                    focus:ring-2
                    focus:ring-yellow-500/30
                    transition-all
                    shadow-lg shadow-yellow-500/5
                "
            />

        </div>
    );
}

export default SearchBar;