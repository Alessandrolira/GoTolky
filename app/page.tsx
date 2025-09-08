"use client";

import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Header from "./components/Header/Header";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "./components/Slider/Slider";

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
    <AnimatePresence>
      <div className="min-h-screen min-w-screen p-0 m-0 bg-[radial-gradient(circle_at_-20%_-30%,#767676,transparent_30%),radial-gradient(circle_at_110%_10%,#767676,transparent_10%),linear-gradient(180deg,#252525,#1F1F1F,#0D1847,#2A4DA7,#E4E4E4)] lg:bg-[radial-gradient(circle_at_-10%_-15%,#868686,transparent_30%),radial-gradient(circle_at_110%_10%,#868686,transparent_10%),linear-gradient(180deg,#252525,#1F1F1F,#0D1847,#2A4DA7,#E4E4E4)]">
        <div className="flex justify-center">
          <Header />
        </div>
        {/* Title Mobile */}
        <div className="flex flex-col items-center justify-center text-center mt-10 mx-3 gap-3.5 lg:hidden">
          <span className="font-semibold tracking-widest text-[1.7em]">CRM</span>
          <span className="font-semibold tracking-widest text-[1.7em]">+</span>
          <span className="font-semibold tracking-widest text-[1.7em]">
            ARITIFICIAL INTELLIGENCE
          </span>
          <span className="font-semibold text-[1.7em]">+</span>
          <span className="font-semibold text-[1.7em]">WHATSAPP</span>
        </div>
        {/* Title Tablet */}
        <div className="items-center justify-center text-center mt-10 mx-15 bg-[#6C6C6C]/40 border border-[#777777] py-10 hidden lg:flex xl:hidden">
          <div className="bg-[#DDDFE2]/50 rounded-lg py-10 px-12">
            <h1 className="text-3xl">
              <span className="font-bold">CRM</span> integrado com{" "}
              <span className="font-bold">INTELIGÊNCIA ARTIFICIAL</span>
              <br /> conectado ao seu{" "}
              <span className="font-bold">WHATSAPP</span>
            </h1>
          </div>
        </div>
        {/* Title e Cards Title Desktop */}
        <div className="mx-20 mt-20 justify-between hidden xl:flex">
          <div>
            <motion.h1
              className="text-6xl titleDesk tracking-[15%]"
              animate={{ x: [-300, 0] }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              GOTOLKY
            </motion.h1>
            <motion.h2
              className="text-3xl mt-10"
              animate={{ x: [-700, 0] }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            >
              <span className="font-semibold duration-300 hover:[text-shadow:0_0_10px_#ffffffa3,0_0_20px_#ffffffa3,0_0_40px_#ffffffa3] hover:neon reduce-motion:animate-none">
                CRM
              </span>{" "}
              integrado
              <br />
              com{" "}
              <span className="font-semibold duration-300 hover:[text-shadow:0_0_10px_#ffffffa3,0_0_20px_#ffffffa3,0_0_40px_#ffffffa3] hover:neon reduce-motion:animate-none">
                INTELIGÊNCIA ARITIFICIAL
              </span>
              <br />
              conctado ao seu{" "}
              <span className="font-semibold duration-300 hover:[text-shadow:0_0_10px_#ffffffa3,0_0_20px_#ffffffa3,0_0_40px_#ffffffa3] hover:neon reduce-motion:animate-none">
                WHATSAPP
              </span>
            </motion.h2>
          </div>
          <div className="flex gap-3 flex-wrap w-150">
            <div className="bg-[#747474]/40 opacity-80 backdrop-blur-lg border border-[#888888] flex justify-center items-center rounded-lg w-40 h-70 hover:opacity-100 z-1 duration-300 reduce-motion:animate-none">
              <img src="/GoTolkyLogo.png" alt="GoTolky Logo" className="w-50" />
            </div>
            <div className="bg-[#484848]/40 backdrop-blur-lg w-40 h-50 rounded-lg "></div>
            <div className="bg-[#747474]/40 opacity-80 backdrop-blur-lg border border-[#888888] flex justify-center items-center rounded-lg w-40 h-70 hover:opacity-100 z-1 duration-300 reduce-motion:animate-none">
              <img src="/ai-vector.png" alt="Vector de IA" className="w-35" />
            </div>
            <div className="bg-[#484848]/40 backdrop-blur-lg w-40 h-50 rounded-lg"></div>
            <div className="bg-[#747474]/40 opacity-80 backdrop-blur-lg border border-[#888888] flex justify-center items-center rounded-lg w-40 h-70 hover:opacity-100 z-1 duration-300 reduce-motion:animate-none -mt-20">
              <img src="/WhatsApp.png" alt="WhatsApp Logo" className="w-35" />
            </div>
            <div className="bg-[#484848]/40 backdrop-blur-lg w-40 h-50 rounded-lg"></div>
          </div>
        </div>
        {/* Card Mobile */}
        <div className="mt-10 justify-center flex lg:hidden">
          <div className="rounded-lg flex items-center justify-center gap-3">
            <div className="w-25 h-25 pointer-events-none select-none bg-[#484848]/40 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg py-4 px-2 flex items-center justify-center">
              <img src="/GoTolkyLogo.png" alt="GoTolky Logo" className="w-20" />
            </div>
            <div className="w-25 h-25 pointer-events-none select-none bg-[#484848]/40 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg py-4 px-2 flex items-center justify-center">
              <img src="/ai-vector.png" alt="GoTolky Logo" className="w-20" />
            </div>
            <div className="w-25 h-25 pointer-events-none select-none bg-[#484848]/40 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg py-4 px-2 flex items-center justify-center">
              <img src="/WhatsApp.png" alt="GoTolky Logo" className="w-20" />
            </div>
          </div>
        </div>
        {/* Card Tablet */}
        <div className="mt-10 justify-center gap-4 hidden lg:flex xl:hidden">
          <div className="flex items-center justify-center w-70 h-30 pointer-events-none select-none bg-[#747474]/40 backdrop-blur-lg border border[#7E7E7E] rounded-xl shadow-lg py-4 px-2">
            <Image
              src="/GoTolkyLogo.png"
              width={150}
              height={0}
              alt="GoTolky Logo"
            />
          </div>
          <div className="flex items-center justify-center w-70 h-30 pointer-events-none select-none bg-[#747474]/40 backdrop-blur-lg border border[#7E7E7E] rounded-xl shadow-lg py-4 px-2">
            <Image
              src="/ai-vector.png"
              width={100}
              height={0}
              alt="GoTolky Logo"
            />
          </div>
          <div className="flex items-center justify-center w-70 h-30 pointer-events-none select-none bg-[#747474]/40 backdrop-blur-lg border border[#7E7E7E] rounded-xl shadow-lg py-4 px-2">
            <Image
              src="/WhatsApp.png"
              width={100}
              height={0}
              alt="GoTolky Logo"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 mx-2">
          <p className="text-md font-light w-[70%] lg:w-[30%] xl:w-[14%] tracking-widest">
            <span className="font-medium">Hoje</span> a sua empresa pode ter uma
            IA do seu jeito!
          </p>
          <IoIosArrowDown className="text-4xl text-[#484848]" />
        </div>
        <section
          id="produto"
          className="flex flex-col items-center justify-center text-center mt-10 mx-3"
        >
          {/* Card Info Mobiles */}
          <ul className="text-center gap-2 lg:hidden">
            <li className="bg-[#7E7E7E]/50 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg p-4 mb-4 gap-2">
              <h2 className="text-lg font-medium">O Tempo Importa</h2>
              <p className="font-light">
                Você sabia que o interesse do cliente despenca após apenas{" "}
                <span className="font-semibold">5 minutos</span> resposta?
                Chatbots engessados, que não entendem o contexto, contribuem
                para perdas significativas.
              </p>
            </li>
            <li className="bg-[#7E7E7E]/50 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg p-4 mb-4 gap-2">
              <h2 className="text-lg font-medium">A Conexão Importa</h2>
              <p>
                Nossa solução NÃO deixa o cliente falando sozinho, além de
                interagir de forma natural e empática, transmitindo confiança e
                proximidade.
              </p>
            </li>
            <li className="bg-[#7E7E7E]/50 backdrop-blur-lg border border-[#7E7E7E] rounded-xl shadow-lg p-4 mb-4 gap-2">
              <h2 className="text-lg font-medium">O Simples Importa</h2>
              <p>
                Além disso, você conta com um CRM conectado diretamente ao
                WhatsApp, centralizando toda a comunicação em um só lugar. Para
                completar, tem à disposição uma assistente virtual do seu jeito!
              </p>
            </li>
          </ul>
          {/* Cards Produto Tablet */}
          <div className="justify-between items-center mx-30 w-[80%] hidden lg:flex xl:hidden">
            <div className="items-center justify-center text-center bg-[#6C6C6C]/40 border border-[#777777] p-4 hidden w-[70%] h-55 lg:flex">
              <div className="bg-[#DDDFE2]/50 rounded-lg p-4 flex flex-col gap-3 h-45 ">
                <h2 className="text-lg font-medium">O Tempo Importa</h2>
                <p className="font-light text-lg">
                  Você sabia que o interesse do cliente despenca após apenas{" "}
                  <span className="font-semibold">5 minutos</span> resposta?
                  Chatbots engessados, que não entendem o contexto, contribuem
                  para perdas significativas.
                </p>
              </div>
            </div>
            <img src="/mulher-triste.png" className="h-55" />
          </div>
          <div className="justify-between items-center mx-30 mt-5 w-[80%] hidden lg:flex xl:hidden">
            <img src="/humano-ia-contato.png" className="h-55" />
            <div className="items-center justify-center text-center bg-[#6C6C6C]/40 border border-[#777777] p-4 hidden w-[70%] h-55 lg:flex">
              <div className="bg-[#DDDFE2]/50 rounded-lg p-4 flex flex-col gap-3 h-45">
                <h2 className="text-lg font-medium">A Conexão Importa</h2>
                <p className="font-light text-lg">
                  Nossa solução <span className="font-semibold">NÃO</span> deixa
                  o cliente falando sozinho, além de interagir de forma natural
                  e empática, transmitindo confiança e proximidade.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-between items-center mx-30 mt-5 w-[80%] hidden lg:flex xl:hidden">
            <div className="items-center justify-center text-center bg-[#6C6C6C]/40 border border-[#777777] p-4 hidden w-[70%] h-55 lg:flex">
              <div className="bg-[#DDDFE2]/50 rounded-lg p-4 flex flex-col gap-3 h-45">
                <h2 className="text-lg font-medium">O Simples Importa</h2>
                <p className="font-light text-lg">
                  Além disso, você conta com um{" "}
                  <span className="font-bold">CRM</span> conectado diretamente
                  ao <span className="font-bold">WhatsApp</span>, centralizando
                  toda a comunicação em um só lugar. Para completar, tem à
                  disposição uma assistente virtual do seu jeito!
                </p>
              </div>
            </div>
            <img src="/notebook-aberto.png" className="h-55" />
          </div>
        </section>
        <div className="hidden xl:flex mx-30 mb-10 items-center justify-center h-100">
          <Slider />
        </div>
        <section
          id="missao"
          className="flex flex-col items-center justify-center text-center mt-10 mx-3 gap-5 mb-10"
        >
          <div className="flex flex-col xl:flex-row gap-5 tracking-[13%]">
            <h2 className="text-4xl unico">SER ÚNICO</h2>
            <h2 className="text-4xl e">É</h2>
            <h2 className="text-4xl">SER DIFERENTE</h2>
          </div>
          <div className="flex flex-col gap-4 mx-4 xl:mx-30 xl:flex-row xl:gap-6">
            <p className="xl:bg-[#DDDFE2]/30 xl:border xl:p-6 xl:rounded-xl xl:text-lg xl:w-1/3">
              O melhor desempenho acontece quando sua empresa transmite valor em
              cada <span className="font-bold italic">mensagem</span> e{" "}
              <span className="font-bold italic">áudio</span>.
            </p>
            <p className="xl:bg-[#DDDFE2]/30 xl:border xl:p-6 xl:rounded-xl xl:text-lg xl:w-1/3">
              Com uma IA que reflete seus{" "}
              <span className="font-bold italic">valores</span> e{" "}
              <span className="font-bold italic">cultura</span>, cada interação
              mostra quem você realmente é!
            </p>
            <p className="xl:bg-[#DDDFE2]/30 xl:border xl:p-6 xl:rounded-xl xl:text-lg xl:w-1/3">
              Mais do que responder rápido, ela cria conexões reais, tornando
              cada interação única, humana e memorável
            </p>
          </div>
        </section>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Cliente X Gerente</h2>
          <p className="mt-3">Veja a seguir um exemplo das visõse de cada um:</p>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:align-top justify-center text-center mt-10 mx-3 xl:mx-30 gap-3 mb-10">
          <div className="flex flex-col justify-center items-center xl:align-top relative mx-2 gap-4 lg:mx10">
            <h3 className="text-2xl font-bold">Visão do Cliente</h3>
            <p>
              Vinculado ao Whatsapp, seu atendimento será 100% utilizando essa
              ferramenta, facilitando a vida no atendimento
            </p>
            <img
              src="/mockupConversaCelular.gif"
              alt="Mockup do Iphone em .gif"
              className="w-70"
            />
            <motion.button
              className="px-4 py-2 bg-gray-700 rounded-lg cursor-pointer"
              onClick={toggleDetalhesVisaoCliente}
              whileTap={{ scale: 0.9 }}
            >
              Detalhes
            </motion.button>
            {detalhesVisaoCliente && (
              <motion.div
                className="flex flex-col gap-4 bg-[#2A4DA7]/80 backdrop-blur-xl 
                     rounded-lg p-3 justify-start items-center mt-2 mx-2 
                     border border-white absolute z-20 lg:mx-10 lg:w-[60%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ ease: "easeInOut" }}
              >
                <h3 className="font-bold">Detalhes Visão Cliente</h3>
                <p>
                  Nesta visão, o seu cliente visualizará todas as mensagens como
                  parte de um atendimento convencional, sem a necessidade de
                  utilizar outro aplicativo ou sistema para se comunicar com a
                  sua equipe.
                </p>
                <p>
                  O atendimento é fluido e contextual, dispensando o uso de
                  palavras-chave para que a ferramenta entenda o assunto
                  tratado. Ela é capaz de compreender as mensagens de forma
                  natural, como faria um atendente humano.
                </p>
                <p>
                  Além disso, seu cliente será notificado quando um atendente
                  humano assumir a conversa, garantindo transparência e
                  continuidade no atendimento.
                </p>
                <motion.button
                  className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer"
                  onClick={toggleDetalhesVisaoCliente}
                  whileTap={{ scale: 0.9 }}
                >
                  Fechar
                </motion.button>
              </motion.div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center xl:align-top relative gap-4 mx-2 lg:mx10">
            <h3 className="text-2xl font-bold mt-10 xl:mt-0">
              Visão do Gerente
            </h3>
            <p>
              Com um CRM integrado ao Whatsapp, você terá controle total sobre
              os atendimentos, podendo acompanhar e analisar cada interação.
            </p>
            <img
              src="/mockupLaptop.png"
              alt="Mockup do PC em foto"
              className="w-220"
            />
            <motion.button
              className="px-4 py-2 bg-gray-700 rounded-lg cursor-pointer mt-6"
              onClick={toggleDetalhesVisaoGerencial}
              whileTap={{ scale: 0.9 }}
            >
              Detalhes
            </motion.button>
            {detalhesVisaoGerencial && (
              <motion.div
                className="flex flex-col gap-4 bg-[#2A4DA7]/80 backdrop-blur-xl 
                     rounded-lg p-3 justify-start items-center mt-2 mx-2 
                     border border-white absolute bottom-0 z-20 lg:mx-10 lg:w-[60%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-bold text-lg">Detalhes Visão Gerencial</h3>
                <p>
                  Já nesta visualização, você acompanha em tempo real todos os
                  atendimentos realizados pela IA, podendo intervir a qualquer
                  momento para assumir a conversa com o cliente, caso julgue
                  necessário.
                </p>
                <p>
                  É possível também atribuir o atendimento a um atendente
                  específico da sua equipe, facilitando a gestão e o
                  acompanhamento interno dos atendimentos.
                </p>
                <p>
                  Cada equipe conta com um número de atendimento próprio,
                  permitindo a personalização e organização de cada interação
                  com os clientes.
                </p>
                <motion.button
                  className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer"
                  onClick={toggleDetalhesVisaoGerencial}
                  whileTap={{ scale: 0.9 }}
                >
                  Fechar
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
        <section
          id="quemsomos"
          className="flex flex-col items-center justify-center text-center mt-10 mx-3 xl:mx-30 gap-3 mb-10"
        >
          <h3 className="font-bold text-4xl">QUEM SOMOS</h3>
          <div className="flex flex-col gap-4  mt-4 bg-[#008CFF]/40 backdrop-blur-lg border border-white rounded-xl shadow-lg p-6">
            <p className="text-lg">
              A GoTolky nasceu para{" "}
              <span className="font-bold">revolucionar</span> a forma como
              empresas se conectam com{" "}
              <span className="font-bold">clientes</span> e{" "}
              <span className="font-bold">colaboradores</span>, unindo{" "}
              <span className="italic">
                inovação, empatia e tecnologia de ponta
              </span>
              .
            </p>
            <p className="text-lg">
              Com o avanço da Inteligência Artificial generativa, desenvolvemos
              uma nova abordagem para o atendimento mais natural, humano e
              eficiente.
            </p>
            <p className="text-lg">
              Superamos as limitações dos antigos chatbots engessados para
              oferecer conversas fluidas, personalizadas e realmente úteis.
            </p>
            <p className="text-lg">
              Na GoTolky, acreditamos que o atendimento deve ser natural, ágil e
              eficiente. Por isso, desenvolvemos uma solução capaz de
              compreender o que o usuário realmente quer, sem a necessidade de
              palavras-chave ou etapas cansativas. Basta que ele diga o que
              precisa e a IA já direciona e resolve de forma rápida e
              personalizada.
            </p>
            <p className="text-lg">
              Foi com essa missão, de facilitar e melhorar a experiência do
              atendimento, que a GoTolky nasceu: para tornar o relacionamento
              com seus clientes e funcionários mais humano, prático e
              inteligente.
            </p>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center text-center h-80 lg:h-140 lg:h-180 mt-10 mx-3 xl:mx-30 mb-10 bg-linear-to-br from-[#0044AA] to-[#11AAFF] border border-[#336699] rounded-xl shadow-2xl px-4 py-4 xl:py-2">
          <iframe
            src="https://www.youtube.com/embed/MO9O68kVaFs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[90%] rounded-lg"
          ></iframe>
        </div>
        <footer className="flex flex-col bg-[#3A3A3A] px-4 pt-4 gap-2">
          <div className="flex flex-col xl:flex-row xl:justify-between gap-6">
            <ul className="flex flex-col text-start gap-1">
            <p className="text-2xl font-bold mb-2">Contato</p>
            <li>contato@GoTolky.com.br</li>
            <li>+55 1198823-3222</li>
            <li>www.gotolky.com.br</li>
          </ul>
          <ul className="flex flex-col text-start gap-1">
            <p className="text-2xl font-bold mb-2">Endereço</p>
            <li>Rua da Consolação, 368 - São Paulo, SP</li>
          </ul>
          </div>
          <p className="text-center text-gray-500 text-[0.5em] md:text-[0.8em] p-4">
            &copy; {new Date().getFullYear()} GoTolky. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </AnimatePresence>
  );
}

//<footer className="text-center text-gray-500 text-[0.5em] mt-10 md:text-[0.8em]">
//  &copy; {new Date().getFullYear()} GoTolky. Todos os direitos reservados.
//</footer>
