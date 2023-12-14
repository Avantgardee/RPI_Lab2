import React, { useContext } from "react";
import { createContext } from "react";
import db from "./assets/db.json";

const DatabaseContext = createContext(db["ru"]);

export function DatabaseProvider({ children }) {

  // TODO ЗАМЕНИТЬ
  const lang = "ru";


  return (
    <DatabaseContext.Provider value={db[lang]}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  return useContext(DatabaseContext);
}
