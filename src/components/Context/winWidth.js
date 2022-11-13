import { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSize = () => setWinWidth(getWindowSize());
    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, [winWidth]);

  const getWindowSize = () => window.innerWidth;

  return <Context.Provider value={{ winWidth }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
