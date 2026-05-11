function Footer() {
    return (
        <footer
            className="
                bg-black/90
                border-t border-orange-500/40
                text-gray-300
                shadow-inner
            "
        >
            <div
                className="
                    max-w-7xl mx-auto
                    px-6 py-8
                    flex flex-col items-center
                    gap-3
                    text-center
                "
            >

                <h2 className="text-xl font-bold text-yellow-400">
                    Dragon Ball Character Manager
                </h2>

                <p className="text-sm text-gray-400">
                    © 2026 Todos los derechos reservados
                </p>

                <p className="text-sm text-gray-500">
                    Hecho con React + Tailwind por Roberto Rodrigo Ibañez
                </p>

            </div>
        </footer>
    );
}

export default Footer;