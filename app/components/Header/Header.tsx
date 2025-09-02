import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const styleMobile = "border-b border-x border-[#7E7E7E] rounded-b-xl shadow-lg"
  const styleDesktop = " border border-[#7E7E7E] flex gap-2 w-3/4 py-2 px-2 mt-2"
  const styleTablet = " border border-[#7E7E7E] rounded-full gap-2 py-1 px-2 w-3/4 mt-2"
//   px-2 w-3/4 mt-2 lg:rounded-full lg:gap-2 lg:py-1

  return (
    <header className={`bg-[#7C7C7C]/40 backdrop-blur-lg border-b border-x border-[#7E7E7E] rounded-b-xl shadow-lg flex items-center justify-between w-8/9 py-2 px-2 lg:mt-2 lg:py-1 xl:py-2 lg:rounded-full lg:border `}>
      <Image src="/GoTolkyLogo.png" alt="Logo GoTolky" width={90} height={0} className="-ml-2 lg:-ml-3" />
      <nav>
        <ul className="gap-8 xl:text-lg font-medium hidden lg:flex">
        <li><a href="#produto">Produto</a></li>
        <li><a href="#missao">Missão</a></li>
        <li><a href="#quemsomos">Quem Somos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      </nav>
      <IoIosMenu className="text-4xl lg:hidden" />
      <a href="#" className="bg-[#D9D9D9] text-black px-3 py-2 xl:px-4 xl:py-2 rounded-[30px] hidden lg:block">Assine Já</a>
    </header>
  );
}
