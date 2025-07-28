"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

  const [detalhesVisaoCliente, setDetalhesVisaoCliente] = useState(false);
  const [detalhesVisaoGerencial, setDetalhesVisaoGerencial] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  function toggleDetalhesVisaoCliente() {
    setDetalhesVisaoCliente(!detalhesVisaoCliente);
    setDetalhesVisaoGerencial(false);
  }

  function toggleDetalhesVisaoGerencial() {
    setDetalhesVisaoGerencial(!detalhesVisaoGerencial);
    setDetalhesVisaoCliente(false);
  }

  return (
    <>
      <div className="bg-[url(/fundoOpaco.png)] h-screen bg-cover bg-no-repeat">
        <div className="fixed w-full py-5 px-4 md:px-15 bg-[#0e0e0e] flex justify-between items-center shadow-md shadow-white/30">
          <div>
            <h2 className="font-bold text-[1.5em] text-white">GoTolky</h2>
          </div>
          <nav className="relative">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <ul
              className={`absolute top-full right-0 bg-[#0e0e0e] flex-col gap-3 text-[0.9em] p-4 rounded shadow-md z-10 text-white w-40
                                ${menuAberto ? "flex" : "hidden"} 
                                md:static md:flex md:flex-row md:gap-5 md:p-0 md:bg-transparent md:shadow-none md:w-full`}
            >
              <a href="#produto">
                <li className="hover:text-[#25D366] transition-colors px-2 md:px-0">Produto</li>
              </a>
              <a href="#personalizacao">
                <li className="hover:text-[#25D366] transition-colors px-2 md:px-0">Personalização</li>
              </a>
              <a href="#quemsomos">
                <li className="hover:text-[#25D366] transition-colors px-2 md:px-0">Quem somos</li>
              </a>
              <a href="#contato">
                <li className="hover:text-[#25D366] transition-colors px-2 md:px-0">Contato</li>
              </a>
              <a href="/forms">
                <li className="bg-white text-black px-2 md:w-full rounded-full hover:opacity-80 transition-opacity hover:bg-[#25D366]">
                  Assine Já
                </li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="pt-30 flex justify-center items-center flex-col h-[80vh] gap-3">
          <img src="/GoTolkyLogo.png" alt="" className="w-60 sm:w-80 md:w-100" />
          <p className="mt-3 font-bold text-[2em] md:text-[3em]">GoTolky</p>
          <p className="tracking-widest text-[1em] md:text-[1.5em] font-medium bg-gradient-to-r from-gray-600 via-white to-gray-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient text-center w-[50%]">O FUTURO DO ATENDIMENTO COMEÇA NO PRIMEIRO</p>
          <p className="tracking-widest text-[1em] md:text-[1.6em] font-bold">OLÁ!</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-10" id="produto">
        <p className="font-bold text-[1.5em] mb-5">Produto</p>
        <p className="w-[80%] text-center">Imaginou personalizar uma IA para trabalhar como uma assistente ou até uma vendedora dos seus produtos?</p>
        <p className="text-[1.2em] font-bold mt-2 text-center w-[80%]">Para essa pergunta a GoTolky possui a ferramenta perfeita!</p>
      </div>
      <div className="bg-[var(--cinza)] flex flex-col md:flex-row justify-around py-10 md:py-15 mt-10 gap-10 px-4">
        <div className="flex items-center flex-col gap-5 w-full md:w-1/2">
          <p className="font-bold text-center md:text-left">Visão do Cliente</p>
          <p className="w-full md:w-[50%] text-center">
            Vinculado ao Whatsapp, seu atendimento será 100% utilizando essa ferramenta, facilitando a vida no atendimento
          </p>
          <div className="w-full h-100">
            <img src="/MockupIphone.png" alt="" className="h-[300px] md:h-[400px] object-contain mx-auto" />
          </div>
          <div className="relative">
            <button
              onClick={toggleDetalhesVisaoCliente}
              className="bg-[var(--background)] py-2 px-4 rounded cursor-pointer hover:bg-[var(--cinza2)] transition-colors duration-200"
            >
              Detalhes
            </button>
            <AnimatePresence>
              {detalhesVisaoCliente && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center">
                    <div
                      className="absolute top-full mt-2 
                                        w-[90vw] md:w-[800%] 
                                        bg-[var(--background)] p-5 rounded-b-xl rounded-tr-xl z-10 shadow-md"
                    >
                      <div className="flex justify-between items-center font-bold mb-3 text-[1.2em]">
                        <p>Detalhes Visão Cliente</p>
                        <button
                          className="cursor-pointer"
                          onClick={toggleDetalhesVisaoCliente}
                        >
                          X
                        </button>
                      </div>
                      <div className="text-sm">
                        <p>
                          Nesta visão, o seu cliente visualizará todas as mensagens como parte de um atendimento convencional, sem a necessidade de utilizar outro aplicativo ou sistema para se comunicar com a sua equipe.
                        </p>
                        <br />
                        <p>
                          O atendimento é fluido e contextual, dispensando o uso de palavras-chave para que a ferramenta entenda o assunto tratado. Ela é capaz de compreender as mensagens de forma natural, como faria um atendente humano.
                        </p>
                        <br />
                        <p>
                          Além disso, seu cliente será notificado quando um atendente humano assumir a conversa, garantindo transparência e continuidade no atendimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center flex-col gap-5 w-full md:w-1/2">
          <p className="font-bold text-center md:text-left">Visão Gerencial</p>
          <p className="w-full md:w-[50%] text-center">
            Com um painel de controle intuitivo, você poderá gerenciar todas as interações e obter insights valiosos sobre o atendimento
          </p>
          <div className="w-full h-100">
            <img src="/mc book desfoque.png" alt="" className="object-contain mx-auto max-w-50 md:max-w-150 md:h-[370px]" />
          </div>
          <div className="relative">
            <button
              onClick={toggleDetalhesVisaoGerencial}
              className="bg-[var(--background)] py-2 px-4 rounded cursor-pointer hover:bg-[var(--cinza2)] transition-colors duration-200"
            >
              Detalhes
            </button>
            <AnimatePresence>
              {detalhesVisaoGerencial && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center">
                    <div
                      className="absolute top-full mt-2
                                        w-[90vw] md:w-[800px]
                                        bg-[var(--branco)] p-5 rounded-b-xl rounded-tl-xl z-10 shadow-md text-black"
                    >
                      <div className="flex justify-between items-center font-bold mb-3 text-[1.2em]">
                        <p>Detalhes Visão Gerencial</p>
                        <button
                          className="cursor-pointer"
                          onClick={toggleDetalhesVisaoGerencial}
                        >
                          X
                        </button>
                      </div>
                      <div className="text-sm">
                        <p>
                          Já nesta visualização, você acompanha em tempo real todos os atendimentos realizados pela IA, podendo intervir a qualquer momento para assumir a conversa com o cliente, caso julgue necessário.
                        </p>
                        <br />
                        <p>
                          É possível também atribuir o atendimento a um atendente específico da sua equipe, facilitando a gestão e o acompanhamento interno dos atendimentos.
                        </p>
                        <br />
                        <p>
                          Cada equipe conta com um número de atendimento próprio, permitindo a personalização e organização de cada interação com os clientes.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="my-[100px] px-10 flex flex-col justify-center items-center md:px-auto">
        <h3 className="font-bold text-[1.2em] mb-[2em]">Visão Gerencial</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="">
            <img src="/mc book desfoque.png" alt="" className="object-contain mx-auto mb-10 md:max-w-150 md:mr-50" />
          </div>
          <ul className="flex flex-col gap-5 list-disc list-inside md:w-[30em]">
            <p className="font-bold text-[1.2em]">Dentro da visão gerencial é possível:</p>
            <li>Desabilite a Inteligência Artificial para responder seus clientes manualmente, sempre que necessário.</li>
            <li>Atribua atendimentos a um dos seus atendentes humanos por meio de filas organizadas.</li>
            <li>Visualize resumos personalizados das conversas, sem precisar ler todas as mensagens para compreender totalmente o atendimento.</li>
          </ul>
        </div>
      </div>
      <div className="bg-[var(--cinza)] flex justify-center flex-col items-center py-[100px]" id="personalizacao">
        <h4 className="font-bold text-[1.5em] mb-20 text-center">Personalização</h4>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="px-10 md:w-[40em]">
            <p className="font-bold">Hisperponalização e a tendência do mercado</p>
            <br />
            <p>A personalização, acompanhando as principais tendências do mercado, é o foco central da nossa ferramenta.</p>
            <br />
            <p>Aqui no GoTolky, você personaliza seu atendimento de forma rápida e intuitiva. Criamos esta solução justamente para facilitar a vida de quem utiliza chatbots e deseja moldar o atendimento ao seu próprio estilo e necessidade.</p>
            <br />
            <p>Com apenas um breve texto e manuais de atendimento, sua Inteligência Artificial já começa a atender seus clientes ou colaboradores de maneira eficiente e personalizada.</p>
          </div>
          <div className="">
            <img src="/personalização.png" alt="" className="w-150" />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center py-[100px]" id="quemsomos">
        <h5 className="font-bold text-[1.5em] mb-5">Quem Somos</h5>
        <img src="/GoTolkyLogo.png" alt="" className="w-[400px]" />
        <div className="px-10 mt-15 md:w-[70em]">
          <p>A GoTolky é uma startup criada para revolucionar o atendimento aos seus clientes e colaboradores, utilizando as mais recentes inovações do mercado.</p>
          <br />
          <p>Com o avanço da Inteligência Artificial generativa, trouxemos uma nova abordagem para o atendimento, superando as limitações dos antigos chatbots engessados, que obrigavam o usuário a navegar por menus e opções pouco intuitivas, como:</p>
          <br />
          <p className="md:ml-[5em]"><i>“Aperte 1 para falar com o financeiro, aperte 2 para falar com o comercial...”</i></p>
          <br />
          <p>Na GoTolky, acreditamos que o atendimento deve ser natural, ágil e eficiente. Por isso, desenvolvemos uma solução capaz de compreender o que o usuário realmente quer, sem a necessidade de palavras-chave ou etapas cansativas. Basta que ele diga o que precisa e a IA já direciona e resolve de forma rápida e personalizada.</p>
          <br />
          <p>Foi com essa missão — facilitar e melhorar a experiência de atendimento — que a GoTolky nasceu: para tornar o relacionamento com seus clientes e funcionários mais humano, prático e inteligente.</p>
        </div>
      </div>
      <div className="bg-[var(--branco)] text-[var(--background)] py-[25px] flex flex-col md:justify-center" id="contato">
        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="text-left flex gap-1 mb-3 flex-col px-10">
            <h6 className="font-bold">Contato</h6>
            <p>contato@GoTolky.com.br</p>
            <p>+55 11 98823-3222</p>
            <p>www.GoTolky.com.br</p>
          </div>
          <div className="flex flex-col gap-1 px-10">
            <p className="font-bold">Endereço</p>
            <p>Rua da Consolação, 368 - São Paulo - SP</p>
          </div>
        </div>
        <footer className="text-center text-gray-500 text-[0.5em] mt-10 md:text-[0.8em]">
          &copy; {new Date().getFullYear()} GoTolky. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}
