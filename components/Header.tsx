"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Life Coaching", href: "/life" },
    { label: "Fitness Coaching", href: "/fitness" },
    { label: "My Book", href: "/book" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-6 lg:w-[90%]">
                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Image
                        src="/images/CR black on trans.webp"
                        alt="Carey Rouse"
                        width={160}
                        height={50}
                        className="h-[50px] w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-0 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-[18px] py-[13px] text-[16px] leading-[24px] no-underline transition-colors hover:text-[#0066FF] ${isActive ? "text-[#0066FF] font-black" : "text-black"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Hamburger (button toggle) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex cursor-pointer items-center justify-center rounded bg-black/5 p-1.5 text-black lg:hidden transition-colors hover:bg-black/10"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile dropdown */}
            <nav
                className={`${isMenuOpen ? "flex" : "hidden"
                    } flex-col border-t border-black/10 bg-white lg:!hidden`}
            >
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`px-6 py-4 text-[16px] no-underline hover:bg-black/5 active:bg-black/10 border-b border-black/5 last:border-0 ${isActive ? "text-[#0066FF] font-black bg-[#F9F9F9]" : "text-black"
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
