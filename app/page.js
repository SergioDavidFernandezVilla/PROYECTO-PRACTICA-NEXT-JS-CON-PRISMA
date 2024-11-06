//Dependecias
import Image from "next/image";

//Components
import { VideoComponent } from "./components/video/VideoComponent";


export default function Home() {
  return (
    <div className="grid p-5">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
       
        <div className="grid grid-flow-row gap-5">
          <h2 className="text-2xl">Tus recomendados</h2>


          <VideoComponent />
        </div>

      </main>
    </div>
  );
}
