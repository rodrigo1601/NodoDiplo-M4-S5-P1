import { Link } from "react-router-dom";
import homeBG from "../../assets/home/dragon-ball-wallpaper-home.gif";
import dbLogo from "../../assets/home/DB-logo.png";

const Home = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center gap-8 text-white"
            style={{
                backgroundImage: `url(${homeBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">

                <img
                    src={dbLogo}
                    alt="Dragon Ball Logo"
                    className="w-1/3 drop-shadow-[0_0_20px_orange]"
                />

                <h1 className="text-5xl font-extrabold text-center text-yellow-400 drop-shadow-lg">
                    Dragon Ball Characters
                </h1>

                <p className="text-lg text-center max-w-xl text-gray-200">
                    Explora, crea y edita personajes del universo Dragon Ball.
                </p>

                <div className="flex gap-4 mt-4">

                    <Link
                        to="/items"
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-orange-500
                            hover:bg-orange-600
                            transition
                            duration-300
                            font-bold
                            shadow-lg
                            hover:scale-105
                        "
                    >
                        Ver Personajes
                    </Link>

                    <Link
                        to="/create"
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-blue-600
                            hover:bg-blue-700
                            transition
                            duration-300
                            font-bold
                            shadow-lg
                            hover:scale-105
                        "
                    >
                        Crear Personaje
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Home;