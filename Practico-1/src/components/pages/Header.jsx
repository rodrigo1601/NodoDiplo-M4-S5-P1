import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/home/DB-logo.png";
import esferaLogo from "../../assets/icons/esfera.png";
import shenronLogo from "../../assets/icons/shenron.png";
import radarLogo from "../../assets/icons/radar.webp";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="
                sticky top-0 z-50
                bg-black/70 backdrop-blur-md
                border-b border-orange-500/40
                shadow-lg
            "
        >
            <div
                className="
                    max-w-7xl mx-auto
                    px-6 py-4
                    flex justify-between items-center
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-30 h-10
                            flex items-center justify-center
                        "
                    >
                        <img src={logo} alt="Logo" />
                    </div>

                    <h1
                        className="
                            hidden sm:block
                            text-2xl font-extrabold
                            text-yellow-400
                            tracking-wide
                            drop-shadow-lg
                        "
                    >
                        Dragon Ball Universe
                    </h1>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        md:hidden
                        flex flex-col gap-1
                        p-2
                    "
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>

                <nav className="hidden md:flex items-center gap-4">

                    <Link
                        to="/"
                        className="
                            flex items-center justify-center
                            px-4 py-2
                            rounded-xl
                            border border-yellow-500/40
                            hover:bg-gray-600
                            text-white
                            font-semibold
                            transition duration-300
                            hover:scale-105
                            shadow-md
                        "
                    >
                        <img
                            src={esferaLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Inicio
                    </Link>

                    <Link
                        to="/items"
                        className="
                            flex items-center justify-center
                            px-4 py-2
                            rounded-xl
                            border border-green-600/40
                            hover:bg-green-700
                            text-white
                            font-semibold
                            transition duration-300
                            hover:scale-105
                            shadow-md
                        "
                    >
                        <img
                            src={radarLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Ver Personajes
                    </Link>

                    <Link
                        to="/create"
                        className="
                            flex items-center justify-center
                            px-4 py-2
                            rounded-xl
                            border border-orange-500/40
                            hover:bg-orange-600
                            text-white
                            font-semibold
                            transition duration-300
                            hover:scale-105
                            shadow-md
                        "
                    >
                        <img
                            src={shenronLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Crear Personaje
                    </Link>

                </nav>
            </div>

            {menuOpen && (
                <nav
                    className="
                        md:hidden
                        flex flex-col
                        gap-3
                        px-6 pb-4
                        bg-black/90
                    "
                >

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="
                            flex items-center
                            px-4 py-3
                            rounded-xl
                            border border-yellow-500/40
                            hover:bg-gray-700
                            text-white
                            font-semibold
                        "
                    >
                        <img
                            src={esferaLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Inicio
                    </Link>

                    <Link
                        to="/items"
                        onClick={() => setMenuOpen(false)}
                        className="
                            flex items-center
                            px-4 py-3
                            rounded-xl
                            border border-green-600/40
                            hover:bg-green-700
                            text-white
                            font-semibold
                        "
                    >
                        <img
                            src={radarLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Ver Personajes
                    </Link>

                    <Link
                        to="/create"
                        onClick={() => setMenuOpen(false)}
                        className="
                            flex items-center
                            px-4 py-3
                            rounded-xl
                            border border-orange-500/40
                            hover:bg-orange-600
                            text-white
                            font-semibold
                        "
                    >
                        <img
                            src={shenronLogo}
                            alt="Logo"
                            className="h-5 mr-2"
                        />
                        Crear Personaje
                    </Link>

                </nav>
            )}
        </header>
    );
}

export default Header;