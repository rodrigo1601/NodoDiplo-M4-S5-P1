const TransformationList = ({ transformations = [] }) => {

    if (transformations.length === 0) {

        return (
            <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">
                    Transformaciones
                </h3>

                <p className="text-gray-600 text-sm italic">
                    Sin transformaciones
                </p>
            </div>
        );
    }

    return (

        <div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-bold">
                Transformaciones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

                {transformations.map((t, index) => (

                    <div
                        key={`${t.name}-${index}`}
                        className="group bg-gray-900 border border-purple-500/20 rounded-2xl overflow-hidden
                                transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                    >

                        <div className="relative h-52 overflow-hidden">

                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                        </div>

                        <div className="p-4">

                            <h4 className="text-purple-300 font-black uppercase tracking-wide text-sm">
                                {t.name}
                            </h4>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default TransformationList;