export const translations = {
    vi: {
        nav: {
            about: "Giới thiệu",
            skills: "Kỹ năng",
            experience: "Kinh nghiệm",
            projects: "Dự án",
            reviews: "Đánh giá",
            contact: "Liên hệ",
        },
        hero: {
            greeting: "Xin chào, tôi là",
            role: "Lập trình viên Full-Stack & Kỹ sư Tự động hóa AI",
            cta_primary: "Liên hệ ngay",
            cta_secondary: "Xem dự án",
        },
        about: {
            title: "Về tôi",
            description: "Tôi là một lập trình viên tò mò về công nghệ. Tôi xây dựng các công cụ nội bộ, tự động hóa quy trình làm việc và tích hợp AI vào các sản phẩm thực tế.",
            location: "Việt Nam",
            years_exp: "Repo công khai",
            projects_done: "Dự án đã xây dựng",
        },
        skills: {
            title: "Kỹ năng nổi bật",
            technical: "Kỹ năng chuyên môn",
            soft: "Kỹ năng mềm",
            languages: "Ngôn ngữ",
        },
        experience: {
            title: "Kinh nghiệm làm việc",
            present: "Hiện tại",
        },
        projects: {
            title: "Dự án tiêu biểu",
            view_demo: "Xem Demo",
            view_code: "Xem Code",
        },
        reviews: {
            title: "Đánh giá từ khách hàng",
        },
        contact: {
            title: "Liên hệ",
            name_label: "Họ và tên",
            email_label: "Email",
            message_label: "Tin nhắn",
            submit: "Gửi",
            success: "Tin nhắn đã được gửi!",
        },
        education: {
            title: "Học vấn",
        },
        certificates: {
            title: "Thành tích GitHub",
        },
        interests: {
            title: "Sở thích & Điểm mạnh",
        },
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            reviews: "Reviews",
            contact: "Contact",
        },
        hero: {
            greeting: "Hello, I am",
            role: "Full-Stack Developer & AI Automation Engineer",
            cta_primary: "Contact Me",
            cta_secondary: "View Projects",
        },
        about: {
            title: "About Me",
            description: "I am a developer who's curious about tech. I build internal tools, automate workflows, and integrate AI into real products.",
            location: "Vietnam",
            years_exp: "Public Repos",
            projects_done: "Projects Built",
        },
        skills: {
            title: "Top Skills",
            technical: "Technical Skills",
            soft: "Soft Skills",
            languages: "Languages",
        },
        experience: {
            title: "Experience",
            present: "Present",
        },
        projects: {
            title: "Featured Projects",
            view_demo: "View Demo",
            view_code: "View Code",
        },
        reviews: {
            title: "Client Reviews",
        },
        contact: {
            title: "Contact",
            name_label: "Name",
            email_label: "Email",
            message_label: "Message",
            submit: "Send",
            success: "Message sent!",
        },
        education: {
            title: "Education",
        },
        certificates: {
            title: "GitHub Achievements",
        },
        interests: {
            title: "Interests & Strengths",
        },
    },
};

export type Language = "vi" | "en";
export type Translation = typeof translations.vi;
