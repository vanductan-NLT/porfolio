"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Linkedin,
    Github,
    Globe,
    CheckCircle,
    Sparkles,
    ArrowUpRight
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * ContactSection - HiveArt inspired contact section with enhanced styling
 */
const ContactSection = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 4000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "vanductan.nlt@gmail.com",
            href: "mailto:vanductan.nlt@gmail.com",
        },
        {
            icon: <Phone size={20} />,
            label: "Phone",
            value: "+84 926 236 105",
            href: "tel:+84926236105",
        },
        {
            icon: <MapPin size={20} />,
            label: "Location",
            value: "Ho Chi Minh City, Vietnam",
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: <Facebook size={20} />,
            href: "https://www.facebook.com/tan7tntmt",
            label: "Facebook"
        },
        {
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/v%C4%83n-%C4%91%E1%BB%A9c-t%C3%A2n-963298276/",
            label: "LinkedIn"
        },
        {
            icon: <Github size={20} />,
            href: "https://github.com/vanductan-NLT",
            label: "GitHub"
        },
        {
            icon: <Globe size={20} />,
            href: "https://vanductan.id.vn/",
            label: "Website"
        },
    ];

    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            {t.contact.title}
                        </span>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                            Let's Work <span className="text-primary">Together</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <Reveal width="100%" delay={0.3}>
                            <SpotlightCard className="p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Sparkles size={20} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold">Get in Touch</h3>
                                </div>

                                <p className="text-text-secondary leading-relaxed mb-8">
                                    I'm always open to discussing new projects, creative ideas,
                                    or opportunities to be part of your visions.
                                </p>

                                <div className="space-y-5">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={info.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-xl bg-surface-highlight text-text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-text-muted uppercase tracking-wider mb-0.5">
                                                        {info.label}
                                                    </p>
                                                    {info.href ? (
                                                        <a
                                                            href={info.href}
                                                            className="font-medium hover:text-primary transition-colors flex items-center gap-1 group/link"
                                                        >
                                                            {info.value}
                                                            <ArrowUpRight
                                                                size={14}
                                                                className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                                                            />
                                                        </a>
                                                    ) : (
                                                        <p className="font-medium">{info.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </Reveal>

                        {/* Social Links */}
                        <Reveal width="100%" delay={0.4}>
                            <SpotlightCard className="p-6 md:p-8">
                                <h4 className="text-sm font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1 h-4 bg-primary rounded-full" />
                                    Follow Me
                                </h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 rounded-xl bg-surface-highlight text-text-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-7">
                        <Reveal width="100%" delay={0.4}>
                            <SpotlightCard className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                                {t.contact.name_label}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-3.5 rounded-xl bg-surface-highlight border border-transparent focus:border-primary focus:bg-background focus:shadow-glow outline-none transition-all duration-300 disabled:opacity-50"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                {t.contact.email_label}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-3.5 rounded-xl bg-surface-highlight border border-transparent focus:border-primary focus:bg-background focus:shadow-glow outline-none transition-all duration-300 disabled:opacity-50"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            {t.contact.message_label}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            rows={5}
                                            className="w-full px-4 py-3.5 rounded-xl bg-surface-highlight border border-transparent focus:border-primary focus:bg-background focus:shadow-glow outline-none transition-all duration-300 resize-none disabled:opacity-50"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 group"
                                    >
                                        <AnimatePresence mode="wait">
                                            {isSubmitted ? (
                                                <motion.span
                                                    key="success"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <CheckCircle size={18} />
                                                    {t.contact.success}
                                                </motion.span>
                                            ) : isSubmitting ? (
                                                <motion.span
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                                                    />
                                                    Sending...
                                                </motion.span>
                                            ) : (
                                                <motion.span
                                                    key="default"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    {t.contact.submit}
                                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                </form>
                            </SpotlightCard>
                        </Reveal>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
