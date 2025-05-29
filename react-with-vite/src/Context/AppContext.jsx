import { useState, useEffect, createContext } from "react";
import { getAAPI as getApiData } from "../Services/apiServices";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const savedLanguge = localStorage.getItem("lang");

  const [language, setLanguage] = useState(savedLanguge ?? "br");
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlanguges = async () => {
      try {
        const getTexts = await getApiData("webtext");
        setLanguages(getTexts);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchlanguges();
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return <AppContext.Provider value={{ language, languages, setLanguage, loading }}>{children}</AppContext.Provider>;
};
