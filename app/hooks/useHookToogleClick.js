"use client";

//Dependencias
import { useState } from "react";

function useHookToogleClick() {
    const [modeToogle, setModeToogle] = useState(true);

    const handleClickToogle = () => {
        console.log("click");
        setModeToogle((prev) => !prev);
    };

    return { modeToogle, handleClickToogle };
}

export default useHookToogleClick;