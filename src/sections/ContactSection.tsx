"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Github, Globe } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const ContactSection = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <SectionWrapper id="contact" className="bg-surface/30">
            <div className="container-custom">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {t.contact.title}
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Contact Info (40%) */}
                    <div className="lg:col-span-5 space-y-8">
                        <Reveal width="100%" delay={0.3}>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-surface border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">Email</p>
                                        <a href="mailto:vanductan.nlt@gmail.com" className="font-medium hover:text-primary transition-colors">
                                            vanductan.nlt@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-surface border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">Phone</p>
                                        <a href="tel:0926236105" className="font-medium hover:text-primary transition-colors">
                                            0926236105
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-surface border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary">Location</p>
                                        <p className="font-medium">Vietnam</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border mt-8">
                                <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/tan7tntmt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/v%C4%83n-%C4%91%E1%BB%A9c-t%C3%A2n-963298276/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/vanductan-NLT" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://vanductan.id.vn/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Contact Form (60%) */}
                    <div className="lg:col-span-7">
                        <Reveal width="100%" delay={0.4}>
                            <form onSubmit={handleSubmit} className="p-8 rounded-[32px] bg-surface border border-border space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium ml-1">
                                            {t.contact.name_label}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">
                                            {t.contact.email_label}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium ml-1">
                                        {t.contact.message_label}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Hello, I'd like to talk about..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    {isSubmitted ? (
                                        <span>{t.contact.success}</span>
                                    ) : (
                                        <>
                                            {t.contact.submit}
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
