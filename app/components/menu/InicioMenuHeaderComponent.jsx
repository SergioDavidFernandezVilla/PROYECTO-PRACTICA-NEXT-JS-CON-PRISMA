//Dependecias
import Link from "next/link"

//Icons
import { IoHome, IoPersonSharp  } from "react-icons/io5";

export const InicioMenuHeaderComponent = () => {
    return (
        <div className="w-44 border-r-2 border-r-zinc-400">
         <nav className="w-full h-full p-1">
                <ul className="flex justify-center items-center flex-col w-full h-full">
                     <li className="w-full h-14">
                        <Link href="#" className="flex flex-col justify-center items-center gap-1 h-full w-full  hover:bg-zinc-800">

                        <IoHome className="w-5 h-5"/>
                        Inicio
                        </Link>
                    </li>

                    <li className="w-full h-14">
                        <Link href="#" className="flex flex-col justify-center items-center gap-1 h-full w-full  hover:bg-zinc-800">

                        <IoPersonSharp className="w-5 h-5" />
                        Suscripciones
                        </Link>
                     </li>
                </ul>
          </nav>
      </div>
    )
}