import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MainContextProvider = createContext({});

const MainContext = ({ children }) => {
  const [mode, setMode] = useState("light");

  return (
    <MainContextProvider.Provider value={{ mode, setMode }}>
      {children}
    </MainContextProvider.Provider>
  );
};

MainContext.propTypes = {
  children: PropTypes.element,
};

export default MainContext;
