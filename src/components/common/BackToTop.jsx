"use client";

import { useEffect, useState } from "react";
import Icon from "./Icons";


export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black bg-dark-blue text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl cursor-pointer ${show
                    ? "translate-y-0 opacity-100 back-to-top-animation"
                    : "pointer-events-none translate-y-5 opacity-0"
                }`}
        >
            <Icon icon={"backtotop"} />
        </button>
    );
}