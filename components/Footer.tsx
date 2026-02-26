"use client";

import Link from "next/image";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NextLink from "next/link";

interface LinkItem {
    label: string;
    href: string;
}

interface SocialLink extends LinkItem {
    icon: React.ReactNode;
}

interface FooterProps {
    resourceLinks: LinkItem[];
    workLinks: LinkItem[];
    socialLinks: SocialLink[];
}

export default function Footer({ resourceLinks, workLinks, socialLinks }: FooterProps) {
    const pathname = usePathname();
    const isEmailConfirmation = pathname === "/email-confirmation";
    const isFindMeaningReader = pathname === "/find-meaning-reader";
    const hideFooterColumns = isEmailConfirmation || isFindMeaningReader;

    return (
        <footer className="border-t border-black bg-white">
            <div className="mx-auto max-w-[1280px] px-4 pt-5 pb-20 md:px-6">

                {!hideFooterColumns && (
                    <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-[30%_30%_30%] lg:justify-center">
                        {/* Resources */}
                        <div className="flex flex-col gap-2 pl-2">
                            <h5 className="text-[24px] font-bold leading-[32px] text-black">
                                Resources
                            </h5>
                            <ul className="flex flex-col gap-0 pl-4">
                                {resourceLinks.map((link) => (
                                    <li key={link.href}>
                                        <NextLink
                                            href={link.href}
                                            className="block py-2 text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF] transition-colors"
                                        >
                                            {link.label}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Work With Me */}
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[24px] font-bold leading-[32px] text-black">
                                Work With Me
                            </h5>
                            <ul className="flex flex-col gap-0 pl-4">
                                {workLinks.map((link) => (
                                    <li key={link.href}>
                                        <NextLink
                                            href={link.href}
                                            className="block py-2 text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF] transition-colors"
                                        >
                                            {link.label}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stay Updated */}
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[24px] font-bold leading-[32px] text-black">
                                Subscribe
                            </h5>
                            <p className="text-[14px] leading-[20px] text-black font-bold opacity-40">
                                For the latest insights and inspiration.
                            </p>

                            {/* Kit.com embedded form */}
                            <form
                                action="https://app.kit.com/forms/8257969/subscriptions"
                                method="post"
                                data-sv-form="8257969"
                                data-uid="6b7e084f63"
                                data-format="inline"
                                className="formkit-form flex flex-col gap-2"
                            >
                                <ul
                                    className="formkit-alert formkit-alert-error list-none p-0 text-sm text-red-600"
                                    data-element="errors"
                                    data-group="alert"
                                />
                                <div
                                    className="formkit-fields flex flex-col gap-3"
                                    data-element="fields"
                                >
                                    <div className="formkit-field">
                                        <input
                                            className="formkit-input w-full rounded-xl border border-black/5 bg-[#F9F9F9] px-4 py-3 text-[15px] font-bold text-black shadow-sm outline-none focus:border-[#0066FF] transition-all placeholder:text-black/20"
                                            type="text"
                                            name="fields[first_name]"
                                            placeholder="First Name"
                                            aria-label="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="formkit-field">
                                        <input
                                            className="formkit-input w-full rounded-xl border border-black/5 bg-[#F9F9F9] px-4 py-3 text-[15px] font-bold text-black shadow-sm outline-none focus:border-[#0066FF] transition-all placeholder:text-black/20"
                                            type="email"
                                            name="email_address"
                                            placeholder="Enter Your Email"
                                            aria-label="Enter Your Email"
                                            required
                                        />
                                    </div>
                                    <button
                                        className="formkit-submit cursor-pointer rounded-full bg-black px-6 py-3 text-[15px] font-black text-white shadow-xl transition-all hover:bg-black/80 hover:scale-[1.01] active:scale-95"
                                        data-element="submit"
                                        type="submit"
                                    >
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Bottom bar */}
                <div className={`flex flex-col items-center gap-4 ${!hideFooterColumns ? "mt-8 border-t border-black/10 pt-6" : ""} sm:flex-row sm:justify-between`}>
                    <p className="text-[14px] leading-[20px] text-black opacity-60 font-medium">
                        © 2026 Carey Rouse. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <NextLink
                            href="/terms-and-conditions"
                            className="text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF] transition-colors"
                        >
                            Terms and Conditions
                        </NextLink>
                        <NextLink
                            href="/privacy-policy"
                            className="text-[14px] leading-[20px] text-black no-underline hover:text-[#0066FF] transition-colors"
                        >
                            Privacy Policy
                        </NextLink>
                    </div>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <NextLink
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-black transition-colors hover:text-[#0066FF]"
                            >
                                {social.icon}
                            </NextLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
