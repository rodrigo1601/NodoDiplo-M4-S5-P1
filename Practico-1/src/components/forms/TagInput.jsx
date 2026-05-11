const TagInput = ({ label, color = "yellow", input, setInput, tags, onAdd, onRemove }) => {

    const colorMap = {
        yellow: { btn: "bg-blue-600",    tag: "bg-yellow-500 text-black" },
        purple: { btn: "bg-purple-600",  tag: "bg-purple-500 text-white" },
    };

    const { btn, tag } = colorMap[color];

    return (
        <div>
            <label className="block mb-2">{label}</label>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), onAdd())}
                    className="flex-1 p-3 rounded bg-gray-800 border border-gray-700"
                />
                <button type="button" onClick={onAdd} className={`px-4 py-2 rounded ${btn}`}>
                    Agregar
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((item, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full flex items-center gap-2 ${tag}`}>
                        {item}
                        <button type="button" onClick={() => onRemove(index)}>✕</button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagInput;