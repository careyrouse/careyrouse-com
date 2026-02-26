"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendApplicationNotification } from "./actions";

export default function FitnessForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        cityZip: "",
        equipment: "",
        experience: "",
        reason: "",
        understandPricing: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendApplicationNotification(formData);
        } catch (error) {
            console.error("Notification error:", error);
        }

        // Construct the redirect URL with params
        const params = new URLSearchParams({
            first_name: formData.firstName,
            email: formData.email
        });

        router.push(`/email-confirmation?${params.toString()}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
            {/* First Name */}
            <div className="space-y-2 md:space-y-4">
                <label className="block text-xl font-bold opacity-60">First Name</label>
                <input
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors"
                />
            </div>

            {/* Last Name */}
            <div className="space-y-2 md:space-y-4">
                <label className="block text-xl font-bold opacity-60">Last Name</label>
                <input
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors"
                />
            </div>

            {/* Email */}
            <div className="space-y-2 md:space-y-4 md:col-span-2">
                <label className="block text-xl font-bold opacity-60">Email Address</label>
                <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors"
                />
            </div>

            {/* City & Zip */}
            <div className="space-y-2 md:space-y-4 md:col-span-2">
                <label className="block text-xl font-bold opacity-60">City and Zip Code</label>
                <input
                    required
                    name="cityZip"
                    value={formData.cityZip}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors"
                />
            </div>

            {/* Equipment */}
            <div className="space-y-2 md:space-y-4 md:col-span-2">
                <label className="block text-xl font-bold opacity-60">Describe your access to gym and cardio equipment</label>
                <textarea
                    required
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors h-32"
                />
            </div>

            {/* Experience */}
            <div className="space-y-2 md:space-y-4 md:col-span-2">
                <label className="block text-xl font-bold opacity-60">Share your experience with training and your current fitness and nutrition habits</label>
                <textarea
                    required
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors h-40"
                />
            </div>

            {/* Reason */}
            <div className="space-y-2 md:space-y-4 md:col-span-2">
                <label className="block text-xl font-bold opacity-60">Why are you interested in this program?</label>
                <textarea
                    required
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#0066FF] outline-none transition-colors h-32"
                />
            </div>

            {/* Pricing Checkbox */}
            <div className="md:col-span-2 flex items-start gap-4 bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10">
                <input
                    required
                    id="pricing-checkbox"
                    name="understandPricing"
                    checked={formData.understandPricing}
                    onChange={handleChange}
                    type="checkbox"
                    className="mt-1 h-6 w-6 rounded border-white/20 bg-transparent text-[#0066FF] focus:ring-[#0066FF]"
                />
                <label htmlFor="pricing-checkbox" className="text-lg md:text-xl font-bold text-white/80 leading-snug">
                    I understand Accountability Coaching starts at $1,000 per month and Co-Training™ is $20,000 a month (Austin only)
                </label>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#0066FF] py-6 text-2xl font-black text-white hover:bg-[#0052CC] transition-all hover:scale-[1.02] active:scale-95 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending Application..." : "Submit Application →"}
                </button>
                <p className="mt-6 text-center text-white/40 font-bold">
                    I personally review every application within 48 hours.
                </p>
            </div>
        </form>
    );
}
