import React, { useContext } from "react";
import { createContext } from "react";
import db from "./assets/db.json";
import { getLangOrSetDefault } from "./utils/Cookies";

const DatabaseContext = createContext(db["ru"]);

export function DatabaseProvider({ children }) {

  const lang = getLangOrSetDefault().toLocaleLowerCase();


  return (
    <DatabaseContext.Provider value={db[lang]}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  return useContext(DatabaseContext);
}
