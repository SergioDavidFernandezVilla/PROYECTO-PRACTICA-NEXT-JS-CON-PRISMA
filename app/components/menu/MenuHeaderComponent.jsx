import Link from "next/link"
import { IoHome } from "react-icons/io5";

export const MenuHeaderComponent = ({varL}) => {
    return (
        <div className="w-80 border-r-2 border-r-zinc-400">
         <nav className="w-full h-full">
                <ul className="flex justify-center items-center flex-col">
                     <li className="w-full">
                        <Link href="#" className="flex flex-row gap-1 text-xl h-full w-full p-5 hover:bg-zinc-800">

                        <IoHome className="text-xl"/>
                        Inicio
                        </Link>
                    </li>

                    <li className="w-full">
                        <Link href="#" className="flex flex-row gap-1 text-xl h-full w-full p-5 hover:bg-zinc-800">
                        Suscripciones
                        </Link>
                     </li>
                </ul>
          </nav>
      </div>
    )
}