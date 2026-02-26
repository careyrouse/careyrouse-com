"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ConfirmationForm() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        firstName: "",
        email: ""
    });

    useEffect(() => {
        const firstName = searchParams.get("first_name") || "";
        const email = searchParams.get("email") || "";
        setFormData({ firstName, email });
    }, [searchParams]);

    return (
        <form
            action="https://app.kit.com/forms/8257969/subscriptions"
            method="post"
            data-sv-form="8257969"
            data-uid="6b7e084f63"
            data-format="inline"
            className="space-y-6"
        >
            <div className="space-y-2">
                <label className="block text-sm font-bold uppercase tracking-widest text-black/60">
                    First Name
                </label>
                <input
                    name="fields[first_name]"
                    type="text"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#F9F9F9] border border-black/5 rounded-2xl px-6 py-4 text-lg font-bold text-black focus:border-[#0066FF] outline-none transition-all placeholder:text-black/20"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold uppercase tracking-widest text-black/60">
                    Enter Your Email
                </label>
                <input
                    name="email_address"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F9F9F9] border border-black/5 rounded-2xl px-6 py-4 text-lg font-bold text-black focus:border-[#0066FF] outline-none transition-all placeholder:text-black/20"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-full bg-black py-6 text-xl font-black text-white transition-all hover:scale-[1.02] hover:bg-black/80 active:scale-95 shadow-xl mt-4"
            >
                Confirm My Email
            </button>
        </form>
    );
}

export default function EmailConfirmationPage() {
    return (
        <main className="min-h-[70vh] bg-[#F9F9F9] flex flex-col items-center justify-center px-6 py-12 md:py-20">
            <div className="max-w-[600px] w-full text-center space-y-8 md:space-y-12">
                {/* Header Section */}
                <div className="space-y-4 md:space-y-6">
                    <h1 className="text-[40px] md:text-[64px] font-black leading-tight text-black">
                        One Last Step
                    </h1>
                    <p className="text-lg md:text-2xl font-medium text-black/60 leading-relaxed">
                        We’ve prefilled your info below. You must click <span className="text-black font-bold">“Confirm My Email”</span>, then look for a confirmation email before I can review your application.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-2xl shadow-black/5 border border-black/5 text-left space-y-8">
                    <Suspense fallback={<div className="text-center font-bold opacity-40">Loading your details...</div>}>
                        <ConfirmationForm />
                    </Suspense>
                </div>

                {/* Helpful Links */}
                <div className="pt-4">
                    <p className="text-lg font-medium text-black/40">
                        Need help? Reach me directly at{" "}
                        <a
                            href="mailto:carey@careyrouse.com"
                            className="text-[#0066FF] hover:underline"
                        >
                            carey@careyrouse.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
