"use client";
import { Swiper, SwiperSlide } from "swiper/react";

const cardsInfo = [
  {
    id: "1",
    image: "/mulher-triste.png",
    title: "O Tempo Importa",
    texto: (
      <p className="text-xl">
        Você sabia que o interesse do cliente despenca após apenas{" "}
        <span className="font-bold">5 minutos</span> resposta? Chatbots
        engessados, que não entendem o contexto, contribuem para perdas
        significativas.
      </p>
    ),
  },
  {
    id: "2",
    image: "/humano-ia-contato.png",
    title: "A Conexão Importa",
    texto: (
      <p className="text-xl">
        Nossa solução <span className="font-bold">NÃO</span> deixa o cliente
        falando sozinho, além de interagir de forma natural e empática,
        transmitindo confiança e proximidade.
      </p>
    ),
  },
  {
    id: "3",
    image: "/notebook-aberto.png",
    title: "O Simples Importa",
    texto: (
      <p className="text-xl">
        Além disso, você conta com um <span className="font-bold">CRM</span>{" "}
        conectado diretamente ao <span className="font-bold">WhatsApp</span>,
        centralizando toda a comunicação em um só lugar. Para completar, tem à
        disposição uma assistente virtual do seu jeito!,
      </p>
    ),
  },
];

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      color="#fff"
    >
      {cardsInfo.map((item) => (
        <SwiperSlide
          key={item.id}
          className="p-10"
        >
          <div className="flex justify-between items-center mx-6">
            <div className="bg-[#6C6C6C]/40 backdrop-blur-lg mx-6 p-6 rounded-xl border border-[#777777] h-80 justify-center items-center flex">
              <div className="bg-[#DDDFE2]/40 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-8 h-65">
                <h3 className="font-bold text-2xl">{item.title}</h3>
                {item.texto}
              </div>
            </div>
            <img src={item.image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
