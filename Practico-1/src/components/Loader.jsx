import { useItem } from "../hooks/useItem";

const Loader = () => {

    const { loading, loadingText } = useItem();

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className=" bg-gray-900 border border-yellow-500 px-6 py-4 rounded-xl text-center shadow-lg">

                <div className="animate-spin w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-3"></div>

                <p className="text-yellow-400 font-bold">
                    {loadingText}
                </p>

            </div>
        </div>
    );
};

export default Loader;