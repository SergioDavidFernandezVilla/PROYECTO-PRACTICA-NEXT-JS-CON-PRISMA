import Link from "next/link"
import { IoHome } from "react-icons/io5";

export const MenuHeaderComponent = ({varL}) => {
    return (
        <div className="w-80">
         <nav>
            <ul className="flex flex-col justify-start items-center gap-5 p-5 ">
                <li className="p-5">
                    <Link href="#" className="text-x1 hover:text-red-300 flex justify-center items-center">
                        <IoHome className="w-5 h-5" />
                            
                        Inicio
                    </Link>
                </li>

                <li className="p-5">
                    <Link href="#" className="text-xl hover:text-red-300">Buscar</Link>
                </li>

                <li className="p-5">
                    <Link href="#" className="text-xl hover:text-red-300">Configuración</Link>
                </li>
            </ul>
        </nav>
      </div>
    )
}