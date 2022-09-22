import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    const [navActive, setNavActive] = useState('');
    const setMode = (e) => {
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);

    }
    const setColor = (color) => {
        setcurrentColor(color);
        localStorage.setItem('themeColor',color );
        setThemeSettings(false);

    }

    const handleClick = (clicked) => {
       if (navActive == clicked){
        setIsClicked({ ...initialState, [clicked]: false });
        setNavActive('')
       }else{
        setIsClicked({ ...initialState, [clicked]: true });
        setNavActive(clicked)
       }
        
    }

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, 
        currentMode, setMode,currentColor,setColor,themeSettings, setThemeSettings}}>
            {children}
        </StateContext.Provider>

    )
}

export const useStateContext = () => useContext(StateContext);