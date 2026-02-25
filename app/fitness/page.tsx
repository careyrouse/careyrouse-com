import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Fitness Coaching with Carey Rouse | Transform Nutrition & Life",
    description: "Experience Co-Training and Accountability Coaching with Carey Rouse. Build the consistency you've never been able to keep through structured systems and side-by-side training.",
};

const comparisonFeatures = [
    {
        feature: "Format",
        accountability: "Remote life coaching with weekly calls and daily accountability",
        coTraining: "In-person only (Austin area)",
    },
    {
        feature: "Focus",
        accountability: "One meaningful life change at a time, executed through a structured 8-week cycle",
        coTraining: "Daily and continuous in-person guidance; full immersion",
    },
    {
        feature: "Availability Cap",
        accountability: "Limited to 10 active clients at any time",
        coTraining: "Only 1 client accepted at a time",
    },
    {
        feature: "Commitment & Renewal",
        accountability: "Month-to-month subscription that auto-renews",
        coTraining: "Six-month minimum term that can renew indefinitely",
    },
    {
        feature: "Guarantee",
        accountability: "Two-week money-back guarantee",
        coTraining: "Two-week money-back guarantee",
    },
    {
        feature: "Custom Training Routine",
        accountability: "Personalized weekly plan based on your environment and equipment",
        coTraining: "Train side-by-side for nearly every session; real-time adjustments",
    },
    {
        feature: "Nutrition",
        accountability: "Macro guidelines and habit framework; you execute, I steer",
        coTraining: "Fully custom meal plan plus grocery and prep coaching; done-with-you",
    },
    {
        feature: "Testing & Diagnostics",
        accountability: "None",
        coTraining: "VO₂ Max, DEXA, and full-body MRI testing included",
    },
    {
        feature: "Home Gym / Equipment",
        accountability: "Use what you have",
        coTraining: "$10,000 first month allowance for road bike or premium home gym equipment",
    }
];

const fitnessFaqs = [
    {
        question: "How do daily check-ins work?",
        answer: "A quick text or email every day confirming what you did and what is next. I respond with brief guidance or corrections as needed."
    },
    {
        question: "What is the Achieve Anything framework?",
        answer: "An 8-week operating system for turning one meaningful goal into consistent action. It closes the gap between what you say you want, what you actually do, and who you are becoming."
    },
    {
        question: "Is there a guarantee?",
        answer: "Yes. Two-week money-back guarantee on the first month."
    },
    {
        question: "How does the assessment work?",
        answer: "Every application goes through manual review. If accepted, you'll receive a link to schedule your mandatory free 60-minute assessment over Google Meet."
    },
    {
        question: "Can I run the framework on my own?",
        answer: "Yes. You can run the framework on your own or combine it with coaching. Both Accountability Coaching and Co-Training™ include full access to the paid version of the framework app."
    }
];

export default function FitnessCoachingPage() {
    return (
        <main className="bg-white text-black font-sans antialiased">
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 scale-105 pointer-events-none">
                    <Image
                        src="https://careyrouse.com/wp-content/uploads/2025/06/Fort-Smith-Fitness-Shoot-20-1-scaled.webp"
                        alt="Carey Rouse Fitness Coaching"
                        fill
                        className="object-cover object-center opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-32 md:px-12 lg:px-24">
                    <div className="max-w-4xl text-left">
                        <h1 className="text-[56px] font-extrabold leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                            Consistency Isn’t <br className="hidden md:block" />
                            a Personality Trait.<br className="hidden md:block" />
                            It’s a System.
                        </h1>

                        <p className="mt-10 text-2xl font-bold leading-relaxed text-white/95 md:text-3xl lg:max-w-3xl">
                            I remove the biggest blocker, consistency, by giving you a system that you follow every day, not vague advice you’re left to figure out alone.
                        </p>

                        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center">
                            <Link
                                href="#application"
                                className="rounded-full bg-[#5E17EB] px-12 py-6 text-center text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#7236F2] active:scale-95 shadow-2xl"
                            >
                                Apply For Assessment
                            </Link>
                            <Link href="#faq" className="text-xl font-bold text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1">
                                Have questions? See the FAQ ↓
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — TWO WAYS TO WORK
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl">
                        <h2 className="text-[48px] font-black leading-tight md:text-[64px]">Two ways to work with me</h2>
                        <div className="mt-12 space-y-8 text-2xl leading-relaxed text-black/80 font-medium">
                            <p>
                                Accountability Coaching: Remote, high-accountability coaching. <br />
                                Co-Training™: Full-immersion, in-person transformation.
                            </p>
                            <p>
                                If you’ve read <Link href="https://amzn.to/3HtU3ua" className="underline font-black decoration-[#5E17EB] decoration-4">Find Meaning Through Relentless Discipline</Link>, you already know what this is about. This isn’t another coaching program. It’s a full commitment to discipline — physically, mentally, and operationally.
                            </p>
                            <p>
                                Every person starts with a one-hour assessment. That’s where we decide if you’re ready to begin Accountability Coaching — or, eventually, earn your way into Co-Training™.
                            </p>
                        </div>
                    </div>

                    {/* Service Cards */}
                    <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="group rounded-[40px] bg-[#F9F9F9] p-12 border border-black/5 transition-all hover:border-black/10">
                            <h3 className="text-3xl font-black">Accountability Coaching</h3>
                            <p className="mt-6 text-xl text-black/60 font-medium">
                                Builds consistency through structured planning, accountability, and daily check-ins, all designed around your environment.
                            </p>
                        </div>
                        <div className="group rounded-[40px] bg-black p-12 text-white shadow-2xl">
                            <h3 className="text-3xl font-black">Co-Training™</h3>
                            <p className="mt-6 text-xl text-white/60 font-medium">
                                Full immersion. I’m with you every session, every ride, every adjustment. You don’t need peak fitness to start. You need access to a gym, a road bike, and the discipline to follow through.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — SERVICE COMPARISON
      ═══════════════════════════════════════════ */}
            <section className="bg-[#111] py-32 text-white">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-center text-[48px] font-black md:text-[64px]">The Difference</h2>

                    <div className="mt-20 overflow-x-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md">
                        <table className="w-full text-left min-w-[900px]">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-white/40">Feature</th>
                                    <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-[#5E17EB]">Accountability Coaching</th>
                                    <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-white">Co-Training™</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisonFeatures.map((f, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="px-10 py-8 text-lg font-black text-white/50">{f.feature}</td>
                                        <td className="px-10 py-8 text-lg font-medium text-white/80">{f.accountability}</td>
                                        <td className="px-10 py-8 text-lg font-bold text-white">{f.coTraining}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4 — THE ASSESSMENT
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32" id="how_it_works">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-[48px] font-black md:text-[64px]">How The Assessment Works</h2>
                    <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="space-y-8 text-2xl font-medium text-black/80">
                            <p>Every application goes through manual review. If accepted, you’ll receive a link to schedule your mandatory free 60-minute assessment.</p>
                            <p>During the assessment, we’ll cover goals, background, equipment access, and readiness. If approved, you begin Accountability Coaching immediately.</p>
                            <p className="font-black text-black italic underline decoration-[#5E17EB] decoration-4 underline-offset-8">Strong fit + Austin residency may lead to a Co-Training™ invitation later.</p>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[40px] shadow-2xl">
                            <Image
                                src="https://careyrouse.com/wp-content/uploads/2025/06/group-ride-1024x613.webp"
                                alt="Carey Rouse Training Assessment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 5 — FAQ
      ═══════════════════════════════════════════ */}
            <section id="faq" className="mx-auto w-full max-w-[1440px] px-6 py-40 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[48px] font-black md:text-[64px]">Fitness FAQ</h2>
                    <div className="mt-20 divide-y divide-black/10 border-y border-black/10">
                        {fitnessFaqs.map((item, i) => (
                            <details key={i} className="group py-10 transition-all hover:bg-[#F9F9F9] px-4 md:px-8">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-2xl font-black md:text-3xl">
                                    <span>{item.question}</span>
                                    <div className="flex-shrink-0 ml-4 font-light text-5xl transition-transform duration-500 group-open:rotate-45">+</div>
                                </summary>
                                <div className="mt-8 text-2xl leading-relaxed text-black/60 font-medium max-w-3xl">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 6 — APPLICATION CTA (Conversion)
      ═══════════════════════════════════════════ */}
            <section id="application" className="bg-black py-40 text-white relative overflow-hidden">
                <div className="mx-auto w-full max-w-[1000px] px-6 text-left relative z-10">
                    <span className="text-[#5E17EB] font-black uppercase tracking-widest text-xl">Get Started</span>
                    <h2 className="mt-8 text-[56px] font-black leading-[0.95] md:text-[88px]">Start With an Assessment</h2>
                    <p className="mt-12 text-2xl font-bold opacity-60 md:text-3xl max-w-2xl">
                        Complete this brief application so I can review your fit. If accepted, you’ll get a link to book a free 60-minute assessment.
                    </p>

                    <div className="mt-20">
                        <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="space-y-4">
                                <label className="block text-xl font-bold opacity-60">Full Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#5E17EB] outline-none transition-colors" />
                            </div>
                            <div className="space-y-4">
                                <label className="block text-xl font-bold opacity-60">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#5E17EB] outline-none transition-colors" />
                            </div>
                            <div className="space-y-4 md:col-span-2">
                                <label className="block text-xl font-bold opacity-60">Primary Goal (Health, Performance, Reset)</label>
                                <textarea className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white font-bold focus:border-[#5E17EB] outline-none transition-colors h-40" />
                            </div>
                            <div className="md:col-span-2">
                                <button className="w-full rounded-2xl bg-[#5E17EB] py-6 text-2xl font-black text-white hover:bg-[#7236F2] transition-transform hover:scale-[1.02] active:scale-95 shadow-2xl">
                                    Submit Application →
                                </button>
                                <p className="mt-6 text-center text-white/40 font-bold">
                                    I personally review every application within 48 hours.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
