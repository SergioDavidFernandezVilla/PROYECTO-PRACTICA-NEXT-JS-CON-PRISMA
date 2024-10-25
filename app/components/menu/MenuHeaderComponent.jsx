import Link from "next/link"

export const MenuHeaderComponent = ({varL}) => {
    return (
        <div className="bg-slate-400 w-80">
        <nav>
           <ul className="flex flex-col justify-start items-center gap-5 p-5 ">
               <li>
                   <Link href="#" className="text-xl hover:text-red-300">Inicio</Link>
               </li>

               <li>
                   <Link href="#" className="text-xl hover:text-red-300">Buscar</Link>
               </li>

               <li>
                   <Link href="#" className="text-xl hover:text-red-300">Configuración</Link>
               </li>
           </ul>
       </nav>
      </div>
    )
}