import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Co-Training with Carey Rouse | Transform Fitness & Life",
    description: "Experience Co-Training with Carey Rouse. Train side-by-side in workouts, nutrition, and daily discipline to achieve maximum results and lasting change.",
};

const testimonials = [
    {
        name: "Sarah J.",
        text: "I was skeptical about life coaching, but the Achieve Anything Framework actually gave me a roadmap. I finally finished my manuscript after three years of stalling. Carey doesn't let you off the hook.",
    },
    {
        name: "Michael R.",
        text: "The daily check-ins are the game changer. It's hard to fail when you know you have to report your progress every 24 hours. My productivity at the office has doubled.",
    },
    {
        name: "Elena K.",
        text: "Carey helped me realize I was overcomplicating my goals. We stripped everything back to one 8-week cycle. I lost 15 pounds and kept it off. The app is a great tool.",
    },
    {
        name: "David W.",
        text: "Simple. Effective. Results-driven. No fluff or 'woo-woo' talk. Just execution. If you want to stop talking and start doing, this is it.",
    },
    {
        name: "Linda P.",
        text: "The onboarding call fixed my mindset before I even started. If you're tired of making resolutions that die in February, get on this framework.",
    },
    {
        name: "Marcus T.",
        text: "Finally, a system that works as hard as I do. The accountability is intense but exactly what I needed to launch my side business.",
    }
];

const faqItems = [
    {
        question: "How do I get started?",
        answer: "Book a free 15-minute call on this page. There is no application and no assessment. The call is simply to confirm fit and next steps."
    },
    {
        question: "Who is life coaching for?",
        answer: "Life coaching is for people who feel trapped in a life shaped by other people’s expectations, sense there is “more,” and want a clear structure to take action instead of staying stuck."
    },
    {
        question: "What do we actually work on?",
        answer: "One meaningful area at a time. Direction, identity, work, money, relationships, or a personal reset. We define a specific 8-week breakthrough and build actions that move it forward."
    },
    {
        question: "What is the Achieve Anything Framework?",
        answer: "An 8-week operating system that turns one stuck area of your life into measurable progress through daily action, tracking, and accountability."
    },
    {
        question: "Is this therapy?",
        answer: "No. This is execution-focused coaching. We work forward from where you are now. If therapy is the right tool, I will tell you."
    },
    {
        question: "What do the weekly calls cover?",
        answer: "Review what you did, identify friction, adjust the plan, and lock the next week so execution stays clean."
    },
    {
        question: "How do daily check-ins work?",
        answer: "One short daily message confirming what you completed and what is next. I respond with brief guidance or corrections as needed."
    },
    {
        question: "What if I miss a day?",
        answer: "Missing one day is normal. Missing two days means the system needs adjustment. We fix the structure instead of relying on motivation."
    },
    {
        question: "Do I need to know exactly what I want before starting?",
        answer: "No. Clarity is built through action. You start with a direction, not a perfect answer."
    },
    {
        question: "How long do people usually work with you?",
        answer: "Most commit to at least one full 8-week cycle. Some continue to run additional cycles on new areas."
    },
    {
        question: "Is there a guarantee?",
        answer: "Yes. Two-week money-back guarantee."
    },
    {
        question: "Payments and cancellation?",
        answer: "Monthly billing. Cancel any time before the next billing date."
    },
    {
        question: "Privacy and data?",
        answer: "What you share is used only for coaching. Nothing is sold or shared."
    }
];

export default function LifeCoachingPage() {
    return (
        <main className="bg-white text-black font-sans antialiased overflow-x-hidden">
            {/* ═══════════════════════════════════════════
          SECTION 1 — REFINED HERO (MERGED SCRIPT)
      ═══════════════════════════════════════════ */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white text-black">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 scale-105 pointer-events-none">
                    <Image
                        src="/images/open arms.webp"
                        alt="Carey Rouse Life Coaching"
                        fill
                        className="object-cover object-center opacity-80"
                        priority
                    />
                    {/* Light Overlay for overlaying text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 md:via-white/50 to-transparent" />
                </div>

                {/* Hero Content — Left Aligned, Merged Text */}
                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-4 pb-24 md:pt-24 md:px-12 lg:px-24">
                    <div className="max-w-4xl text-left">
                        {/* Huge Heading */}
                        <h1 className="text-[40px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                            Stop Living <br className="hidden md:block" />
                            Someone Else’s <br className="hidden md:block" />
                            Script
                        </h1>

                        {/* High Impact Subtext */}
                        <p className="mt-10 text-2xl font-bold leading-relaxed text-black/95 md:text-3xl lg:text-4xl max-w-3xl">
                            You sense there is more for you. This is how you stop thinking about it and start proving it through daily action, tracking, and accountability.
                        </p>

                        {/* CTAs */}
                        <div className="mt-12">
                            <Link
                                href="https://calendar.app.google/fSTvE2DQeuG24fGh8"
                                target="_blank"
                                className="inline-block rounded-full bg-black px-12 py-6 text-center text-xl font-black text-white transition-all hover:scale-105 hover:bg-black/90 active:scale-95 shadow-2xl"
                            >
                                Book A Free 15-Minute Call
                            </Link>
                        </div>

                        {/* Full Script Text Integrated into Hero */}
                        <div className="mt-12 space-y-6 text-xl md:text-2xl text-black/80 max-w-2xl font-medium leading-relaxed">
                            <p>
                                If your life looks fine on paper but feels wrong in practice, you are not broken.
                                You are living a script you never consciously chose.
                            </p>
                            <p>
                                Life coaching with me is not about motivation or endless conversation.
                                It is about picking one meaningful change, building a simple structure around it, and executing long enough for your identity to shift.
                            </p>
                            <div className="pt-2">
                                <Link href="#faq" className="inline-block text-xl font-bold text-[#0066FF] hover:text-[#0052CC] transition-colors">
                                    Have questions? See the full FAQ ↓
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — HOW WE WORK TOGETHER
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px]">How We <br />Work Together</h2>
                        </div>
                        <div className="space-y-8 text-2xl leading-relaxed text-black/80">
                            <p className="font-bold text-black">Life coaching is built around the Achieve Anything Framework.</p>
                            <p>We work on one stuck area at a time and turn it into measurable progress using a simple, repeatable system. You take daily action. We track it. We adjust weekly. Momentum replaces negotiation.</p>
                            <div className="rounded-2xl bg-[#F6F6F6] p-8 border-l-8 border-black font-bold italic text-black/60">
                                <p>This is not therapy.</p>
                                <p>This is not advice.</p>
                                <p>This is structured execution with accountability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — WHAT YOU GET (Refined Table)
      ═══════════════════════════════════════════ */}
            <section className="bg-[#111] py-32 text-white">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-center text-[32px] font-black md:text-[56px] lg:text-[64px]">What You Get</h2>

                    <div className="mt-12 md:mt-20">
                        {/* Mobile Cards View (Hidden on larger screens) */}
                        <div className="block md:hidden space-y-6">
                            {[
                                { title: "Format", desc: "Remote life coaching with weekly calls and daily accountability" },
                                { title: "Focus", desc: "One meaningful life change at a time, executed through a structured 8-week cycle" },
                                { title: "Onboarding", desc: "A private one-hour meeting to get you completely ramped up on the framework and to answer all your questions" },
                                { title: "Weekly Coaching", desc: "One 30-minute 1:1 call each week focused on execution, friction removal, and adjustments" },
                                { title: "Daily Accountability", desc: "Short daily text or email check-in confirming what you did and what is next" },
                            ].map((feature, idx) => (
                                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                                    <div className="text-sm font-black uppercase tracking-widest text-[#0066FF] mb-2">{feature.title}</div>
                                    <div className="text-lg font-medium leading-relaxed text-white/90">{feature.desc}</div>
                                </div>
                            ))}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                                <div className="text-sm font-black uppercase tracking-widest text-[#0066FF] mb-2">Framework App</div>
                                <div className="text-lg font-medium leading-relaxed text-white/90">Full access for tracking, structure, and follow-through.</div>
                                <div className="mt-4 p-4 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 font-bold uppercase text-xs tracking-widest">
                                    The app is always free to use on your own at any time.
                                </div>
                                <Link href="https://aaframework.replit.app/login" target="_blank" className="mt-4 inline-block text-[#0066FF] font-bold underline hover:text-[#3385FF] transition-colors">
                                    Launch App →
                                </Link>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                                <div className="text-sm font-black uppercase tracking-widest text-[#0066FF] mb-2">Investment</div>
                                <div className="text-4xl font-black text-white">$1,000 / month</div>
                                <div className="mt-2 text-white/40 font-medium italic">Month-to-month, cancel anytime.</div>
                            </div>
                        </div>

                        {/* Desktop Table View (Hidden on mobile) */}
                        <div className="hidden md:block overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="px-10 py-8 text-2xl font-black uppercase tracking-widest text-white/40">Feature</th>
                                        <th className="px-10 py-8 text-2xl font-black uppercase tracking-widest text-[#0066FF]">Achieve Anything Framework</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Format</td>
                                        <td className="px-10 py-8 text-xl font-medium">Remote life coaching with weekly calls and daily accountability</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Focus</td>
                                        <td className="px-10 py-8 text-xl font-medium">One meaningful life change at a time, executed through a structured 8-week cycle</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Onboarding</td>
                                        <td className="px-10 py-8 text-xl font-medium">A private one-hour meeting to get you completely ramped up on the framework and to answer all your questions</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Weekly Coaching</td>
                                        <td className="px-10 py-8 text-xl font-medium">One 30-minute 1:1 call each week focused on execution, friction removal, and adjustments</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Daily Accountability</td>
                                        <td className="px-10 py-8 text-xl font-medium">Short daily text or email check-in confirming what you did and what is next</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Framework App</td>
                                        <td className="px-10 py-8">
                                            <div className="text-xl font-medium">Full access for tracking, structure, and follow-through.</div>
                                            <div className="mt-4 p-4 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 font-bold uppercase text-sm tracking-widest">
                                                The app is always free to use on your own at any time.
                                            </div>
                                            <Link href="https://aaframework.replit.app/login" target="_blank" className="mt-4 inline-block text-[#0066FF] font-bold underline hover:text-[#3385FF] transition-colors">
                                                Launch App →
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-8 text-xl font-black text-white/60">Investment</td>
                                        <td className="px-10 py-8">
                                            <div className="text-4xl font-black text-white">$1,000 / month</div>
                                            <div className="mt-2 text-white/40 font-medium italic">Month-to-month, cancel anytime.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4 — TESTIMONIALS
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-center text-[32px] font-black md:text-[56px] lg:text-[64px]">Results</h2>
                    <div className="mt-12 md:mt-20 grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <div key={i} className="group relative flex flex-col justify-between rounded-[40px] bg-[#F9F9F9] p-8 md:p-12 transition-all hover:bg-black hover:text-white border border-black/5 hover:border-black/0 hover:-translate-y-2 duration-500">
                                <p className="text-lg md:text-2xl leading-relaxed italic opacity-80 group-hover:opacity-100 font-medium">"{t.text}"</p>
                                <div className="mt-6 md:mt-12">
                                    <div className="h-px bg-black/10 group-hover:bg-white/10 mb-4 md:mb-8" />
                                    <p className="text-xl font-black uppercase tracking-widest text-[#0066FF] group-hover:text-white">— {t.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 5 — PROMO OFFER
      ═══════════════════════════════════════════ */}
            <section className="bg-[#0066FF] py-24 text-white overflow-hidden">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                        <div className="max-w-2xl">
                            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-black uppercase tracking-widest">Limited Monthly Offer</span>
                            <h2 className="mt-6 text-[40px] font-black leading-tight md:text-[56px] lg:text-[64px]">The first 10 clients get their first month FREE</h2>
                            <p className="mt-4 text-xl font-medium text-white/70">Applies to new sign-ups this month. Book your call to secure your spot.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="text-6xl font-black tracking-tighter">FREE</div>
                            <div className="text-xl font-bold opacity-60 line-through">Value: $1,000</div>
                            <Link
                                href="https://calendar.app.google/fSTvE2DQeuG24fGh8"
                                target="_blank"
                                className="mt-6 rounded-full bg-white px-10 py-5 text-xl font-black text-[#0066FF] transition-transform hover:scale-110 active:scale-95 shadow-2xl"
                            >
                                Claim It →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 6 — FAQ
      ═══════════════════════════════════════════ */}
            <section id="faq" className="mx-auto w-full max-w-[1440px] px-6 py-16 md:py-24 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[32px] font-black md:text-[56px] lg:text-[64px]">Common Questions</h2>
                    <div className="mt-12 md:mt-20 divide-y divide-black/10 border-y border-black/10">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group py-6 transition-all hover:bg-[#F9F9F9] px-4 md:px-8">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-black md:text-2xl">
                                    <span>{item.question}</span>
                                    <div className="flex-shrink-0 ml-4 font-light text-3xl transition-transform duration-500 group-open:rotate-45">+</div>
                                </summary>
                                <div className="mt-4 text-lg md:text-xl leading-relaxed text-black/60 font-medium max-w-3xl">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 7 — FINAL CONVERSATION CTA
      ═══════════════════════════════════════════ */}
            <section className="bg-black pt-24 pb-16 md:py-40 text-white">
                <div className="mx-auto w-full max-w-[1000px] px-6 text-center">
                    <h2 className="text-[40px] sm:text-[56px] font-black leading-[0.95] md:text-[88px]">Start with a conversation.</h2>
                    <p className="mt-12 text-2xl font-bold opacity-60 md:text-3xl lg:text-4xl">
                        The call is simply to confirm fit and next steps.
                        If it isn't the right tool, I'll tell you.
                    </p>
                    <div className="mt-16 md:mt-20">
                        <Link
                            href="https://calendar.app.google/fSTvE2DQeuG24fGh8"
                            target="_blank"
                            className="inline-block rounded-full bg-white px-6 py-6 sm:px-16 sm:py-8 text-xl sm:text-2xl font-black text-black transition-all hover:scale-105 hover:bg-white/95 active:scale-95 shadow-2xl shadow-white/5 w-full max-w-[360px] sm:w-auto sm:max-w-none"
                        >
                            Book A Free 15-Minute Call
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
