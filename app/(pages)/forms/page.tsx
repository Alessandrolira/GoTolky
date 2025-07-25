"use client"

import { useState } from "react"

export default function Forms() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [telefone, setTelefone] = useState("")
  const [telefoneRaw, setTelefoneRaw] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [loading, setLoading] = useState(false)

  async function enviarDados() {
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_API_KEY

    if (!baseUrl) {
      console.error("API key is not defined in the environment variables.")
      setLoading(false)
      return
    }

    const dataHoraEnvio = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    })

    const body = `nome=${encodeURIComponent(nome)}&telefone=${encodeURIComponent(
      telefone,
    )}&email=${encodeURIComponent(email)}&empresa=${encodeURIComponent(
      empresa,
    )}&dataHoraEnvio=${encodeURIComponent(dataHoraEnvio)}`

    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      })

      const data = await res.text()

      if (data === "200") {
        setMensagem("Sucesso")
        setLoading(false)

        // Limpar campos
        setNome("")
        setEmail("")
        setTelefone("")
        setEmpresa("")

      } else {
        console.error("Resposta inesperada:", data)
        setLoading(false)
      }
    } catch (error) {
      console.error("Erro no envio:", error)
      setLoading(false)
    }
  }

  function formatarTelefone(valor: string) {
    if (valor.length === 0) {
      setTelefoneRaw("")
      setTelefone("")
      return
    }

    const numeros = valor.replace(/\D/g, "")

    if (numeros.length === 0) {
      setTelefoneRaw("")
      setTelefone("")
      return
    }

    const limitado = numeros.slice(0, 11)

    setTelefoneRaw(limitado)

    let formatado = ""

    if (limitado.length <= 2) {
      formatado = `(${limitado}`
    } else if (limitado.length <= 7) {
      formatado = `(${limitado.slice(0, 2)}) ${limitado.slice(2)}`
    } else {
      if (limitado.length === 11) {
        formatado = `(${limitado.slice(0, 2)}) ${limitado.slice(
          2,
          7,
        )}-${limitado.slice(7)}`
      } else {
        formatado = `(${limitado.slice(0, 2)}) ${limitado.slice(
          2,
          6,
        )}-${limitado.slice(6)}`
      }
    }

    setTelefone(formatado)
  }

  return (
    <div className="py-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#0c0c1c] overflow-hidden px-4">
      {/* Círculos orbitais com efeito neon */}
      <div className="animate-pulse-slow mb-8">
        <img
          src="./GoTolkyLogo.png"
          alt="GoTolky Logo"
          className="w-36 drop-shadow-[0_0_20px_gray]"
        />
      </div>
      {/* Formulário */}
      <form
        className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-12 text-white shadow-[0_0_10px_var(--azul)] relative z-20"
        onSubmit={(event: any) => {
          event.preventDefault()
          enviarDados()
        }}
      >
        <h1 className="text-center text-3xl font-extrabold mb-4 ">
          Contato Comercial
        </h1>
        {mensagem === "Sucesso" ? (
          <div className="text-center text-white mb-4">
            <p className="text-green-400 text-[0.8em]">
              Sua mensagem foi adicionada ao nosso sistema, em breve nossos
              consultores entrarão em contato
            </p>
          </div>
        ) : null}

        <p className="text-center text-white/70 mb-10 text-sm">
          Preencha o formulário e nossa equipe entrará em contato o mais breve
          possível 🚀
        </p>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Seu nome"
            className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="seu telefone"
            className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
            value={telefone}
            onChange={(e) => formatarTelefone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Empresa"
            className="p-4 rounded-lg bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-[var(--azul)] transition"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition transform duration-300 disabled:opacity-60"
          >
            {loading ? (
              <img src="/loader.png" alt="Load" className="w-[1.5em] animate-spin" />
            ) : (
              "Enviar"
            )}
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
