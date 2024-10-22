
//Dependencias
import Link from "next/link";
import Image from "next/image";

//Icons
import logo from "../../utils/assets/logo.webp"
import { IoMenu } from "react-icons/io5";


const HeaderComponent = () => {
    return (
        <header className="flex justify-start items-center ">
            <nav>
                <ul className="flex justify-start items-center gap-5 p-5">
                    <li className="flex justify-center items-center gap-2">
                        <IoMenu className="w-9 h-9 hover:cursor-pointer"/>    
                    </li>

                    <li className="flex justify-center items-center gap-2">
                        <Image src={logo} alt="xd" width={36} height={36} 
                        className="rounded-lg" />
                        <Link href="#" className="text-xl hover:text-red-300">SteamVideo</Link>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul className="flex justify-start items-center gap-5 p-5">
                    <li className="">
                        <Link href="#" className="text-xl hover:text-red-300">Inicio</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-xl hover:text-red-300">Buscar</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-xl hover:text-red-300">Configuracion</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;