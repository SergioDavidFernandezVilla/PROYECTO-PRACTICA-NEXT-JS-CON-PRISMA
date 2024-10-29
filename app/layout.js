"use client"

//font
import localFont from "next/font/local";

//css
import "./globals.css";

//Components
import HeaderComponent from "./components/header/HeaderComponent";
import { MenuHeaderComponent } from "./components/menu/MenuHeaderComponent";
import { InicioMenuHeaderComponent } from "./components/menu/InicioMenuHeaderComponent";

//Hooks
import useHookToogleClick from "./hooks/useHookToogleClick";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {

  const { modeToogle, handleClickToogle } = useHookToogleClick();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
      <HeaderComponent handleClickToogle={handleClickToogle}/>

      <div className="container_home_large">

       {modeToogle ? <MenuHeaderComponent /> : <InicioMenuHeaderComponent/>}
        {children}
      </div>

      </body>
    </html>
  );
}
