"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, Translation } from "@/utils/translations";

interface LanguageContextType {
    language: Language;
    t: Translation;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("vi");

    // Load saved language preference
    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "vi" || savedLang === "en")) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === "vi" ? "en" : "vi";
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
    };

    const value = {
        language,
        t: translations[language],
        toggleLanguage,
        setLanguage: (lang: Language) => {
            setLanguage(lang);
            localStorage.setItem("language", lang);
        },
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
