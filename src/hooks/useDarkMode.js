import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
   
        const [darkModeValue, setDarkModeValue] = useLocalStorage('darkIsOn', initialValue)
            

        useEffect( () => {
            if(darkModeValue) {
             document.querySelector('body').classList.add('dark-mode')   
            }
            else(document.querySelector('body').classList.remove('dark-mode'))
            }, [darkModeValue]
        )
    
 return [darkModeValue, setDarkModeValue]
}

export default useDarkMode;