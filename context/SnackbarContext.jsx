import React, { createContext, useContext, useState } from "react";

const SnackbarContext = createContext({
  type: "",
  message: "",
  setType: () => {},
  setMessage: () => {},
});
export const useSnackBarContext = () => {
  return useContext(SnackbarContext);
};

function SnackbarContextProvider({ children }) {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("Test Message");

  const value = {
    type,
    setType,
    message,
    setMessage,
  };
  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarContextProvider;