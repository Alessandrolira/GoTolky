import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="bg-[#7C7C7C]/40 backdrop-blur-lg border-b border-x border-[#7E7E7E] rounded-b-xl shadow-lg flex items-center justify-between w-8/9 py-2 px-2 lg:mt-2 lg:py-1 xl:py-2 xl:px-3 xl:mx-30 xl:w-3/4 lg:rounded-full lg:border"
    >
      <Image
        src="/GoTolkyLogo.png"
        alt="Logo GoTolky"
        width={90}
        height={0}
        className="-ml-2 lg:-ml-3"
      />
      <nav>
        <ul className="gap-8 xl:gap-16 xl:text-lg font-medium hidden lg:flex">
          <li className="hover:text-[#008CFF] hover:transform-[scale(1.1)] duration-150">
            <a href="#produto">Produto</a>
          </li>
          <li className="hover:text-[#008CFF] hover:transform-[scale(1.1)] duration-150">
            <a href="#missao">Missão</a>
          </li>
          <li className="hover:text-[#008CFF] hover:transform-[scale(1.1)] duration-150">
            <a href="#quemsomos">Quem Somos</a>
          </li>
          <li className="hover:text-[#008CFF] hover:transform-[scale(1.1)] duration-150">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <IoIosMenu className="text-4xl lg:hidden" />
      <Link
        href="#"
        className="bg-[#D9D9D9] text-black px-3 py-2 xl:px-4 xl:py-2 lg:rounded-[30px] xl:rounded-[20px] hidden lg:block hover:bg-linear-to-r hover:from-[#008CFF] hover:to-[#0D1847] hover:text-white hover:transform-[scale(1.05)] duration-150 active:transform-[scale(0.9)]"
      >
        Assine Já
      </Link>
    </motion.header>
  );
}
