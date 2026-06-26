"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 text-center text-text-secondary text-sm border-t border-border bg-surface/30">
            <div className="container-custom">
                <p>© {new Date().getFullYear()} Van Duc Tan. {t.footer.rights}</p>
                <p className="mt-2">{t.footer.built}</p>
            </div>
        </footer>
    );
};

export default Footer;
