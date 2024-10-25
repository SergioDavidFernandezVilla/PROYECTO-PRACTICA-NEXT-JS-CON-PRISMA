//Dependencias
import Image from "next/image";
import Link from "next/link";

//Icons
import logo from "../../utils/assets/logo.webp"
import { IoMenu } from "react-icons/io5";

const HeaderComponent = ({handleToogleMenu}) => {

    return (
        <>
        <header className="grid grid-flow-col-dense">    
                <nav>
                    <ul className="flex justify-start items-center gap-5 p-5">
                        <li className="flex justify-center items-center gap-2" onClick={handleToogleMenu}>
                            <IoMenu className="w-9 h-9 hover:cursor-pointer" />    
                        </li>

                        <li className="flex justify-center items-center gap-2">
                            <Image src={logo} alt="xd" width={36} height={36} 
                            className="rounded-lg" />
                            <Link href="#" className="text-xl hover:text-red-300">SteamVideo</Link>
                        </li>
                    </ul>


                    
                </nav>
        </header>
    </>
    )
}

export default HeaderComponent;
