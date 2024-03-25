import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const CardProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useState({});

  useEffect(() => {
    localStorage.setItem("user_ref", JSON.stringify(storedUser));
  }, [storedUser]);

  return <UserContext.Provider value={{ storedUser, setStoredUser }}>{children}</UserContext.Provider>;
};
