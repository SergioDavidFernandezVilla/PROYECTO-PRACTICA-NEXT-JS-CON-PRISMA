"use client"

import localFont from "next/font/local";
import "./globals.css";

//Components
import HeaderComponent from "./components/header/HeaderComponent";
import { MenuHeaderComponent } from "./components/menu/MenuHeaderComponent";
import { useState } from "react";

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

  const [modeToogleMenu, setModeToogleMenu] = useState(true)

  const handleToogleMenu = () => {

    console.log("click")

     setModeToogleMenu(prev => !prev);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
     

        
      <HeaderComponent handleToogleMenu={handleToogleMenu}/>

        <div className="container_home">

       
        {
          modeToogleMenu ? (
            <MenuHeaderComponent/>
          ) : null
        }

        {children}
        </div>
      </body>
    </html>
  );
}
