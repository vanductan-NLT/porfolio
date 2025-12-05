"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Quy trình làm việc của bạn như thế nào?",
        answer: "Tôi tuân theo quy trình lấy người dùng làm trung tâm: Nghiên cứu > Lên ý tưởng > Thiết kế > Kiểm thử > Bàn giao. Tôi đảm bảo giao tiếp xuyên suốt để sản phẩm cuối cùng đúng với tầm nhìn của bạn.",
    },
    {
        question: "Bạn sử dụng công cụ thiết kế nào?",
        answer: "Tôi thành thạo Figma, Adobe XD, Photoshop và Illustrator. Đối với prototype và motion, tôi sử dụng Principle và After Effects.",
    },
    {
        question: "Bạn có nhận làm freelance không?",
        answer: "Có, tôi luôn sẵn sàng cho các dự án freelance thú vị. Hãy liên hệ với tôi để thảo luận chi tiết về dự án của bạn.",
    },
    {
        question: "Chi phí cho một dự án là bao nhiêu?",
        answer: "Chi phí phụ thuộc vào quy mô và độ phức tạp của dự án. Tôi thường báo giá theo dự án hoặc theo giờ tùy thuộc vào yêu cầu cụ thể.",
    },
];

import SectionWrapper from "@/components/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const QASection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <SectionWrapper id="qa" className="section-padding">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Q&A
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.1}>
                            <div className="border border-border rounded-2xl overflow-hidden bg-surface/50 hover:border-primary/50 transition-colors">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full p-6 flex items-center justify-between text-left gap-4"
                                >
                                    <span className="font-heading font-semibold text-lg">
                                        {faq.question}
                                    </span>
                                    <span className={`p-2 rounded-full bg-surface-highlight transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default QASection;
