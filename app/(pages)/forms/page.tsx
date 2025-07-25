export default function Forms() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#0c0c1c] overflow-hidden px-4">
            {/* Círculos orbitais com efeito neon */}
            <div className="absolute top-25 z-10 animate-pulse-slow">
                <img
                    src="./GoTolkyLogo.png"
                    alt="GoTolky Logo"
                    className="w-36 drop-shadow-[0_0_20px_var(--azul)]"
                />
            </div>

            {/* Formulário */}
            <form className="mt-[10rem] w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-12 text-white shadow-[0_0_10px_var(--azul)] relative z-20">
                <h1 className="text-center text-3xl font-extrabold mb-8 text-[var(--azul)] drop-shadow-[0_0_12px_var(--azul)]">
                    Contato Comercial
                </h1>

                <p className="text-center text-white/70 mb-10 text-sm">
                    Preencha o formulário e nossa equipe entrará em contato o mais breve possível 🚀
                </p>

                <div className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
                    />
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
                    />
                    <input
                        type="text"
                        placeholder="Empresa"
                        className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
                    />
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        type="submit"
                        className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition transform duration-300"
                    >
                        Enviar
                    </button>
                </div>
            </form>

            {/* Linhas decorativas tech */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent opacity-30 rounded-full" />
            <div className="absolute top-32 right-0 w-2 h-32 bg-gradient-to-t from-cyan-500 to-transparent opacity-20 rounded-full" />
        </div>
    )
}
