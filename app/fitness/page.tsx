import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FitnessForm from "./FitnessForm";

export const metadata: Metadata = {
    title: "Fitness Coaching with Carey Rouse | Transform Nutrition & Life",
    description: "Experience Co-Training and Accountability Coaching with Carey Rouse. Build the consistency you've never been able to keep through structured systems and side-by-side training.",
};

const comparisonFeatures = [
    {
        feature: "Assessment",
        accountability: "Free virtual 60-minute assessment before acceptance",
        coTraining: "Assessment covered as part of your Accountability Coaching program",
    },
    {
        feature: "Format",
        accountability: "Virtual participation",
        coTraining: "In-person only (Austin area)",
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
        accountability: "Cardio + resistance exercises, reps, sets, & rest protocols",
        coTraining: "Cycling + resistance exercises, reps, sets, & rest protocols",
    },
    {
        feature: "Training Frequency",
        accountability: "Daily training schedule; matches my frequency but not my intensity or volume",
        coTraining: "Daily training schedule; matches my frequency but not my intensity or volume",
    },
    {
        feature: "Cardio Equipment",
        accountability: "Must have a bike, treadmill, rower, or other cardio equipment",
        coTraining: "Road bike and an indoor bike trainer included (see note below about the allowance)",
    },
    {
        feature: "First Month Allowance",
        accountability: "None",
        coTraining: "$10,000 allowance (may be applied toward a road bike purchase and/or premium home gym equipment)",
    },
    {
        feature: "Gym Access",
        accountability: "Your existing gym or home setup",
        coTraining: "Premium gym membership or premium home gym equipment included",
    },
    {
        feature: "Accountability / Coaching Access",
        accountability: "Daily check-ins via email/text plus weekly 30-minute planning call",
        coTraining: "Real-time accountability every session plus 24/7 direct on-call access",
    },
    {
        feature: "Weekly Office Hours",
        accountability: "Optional 10-minute virtual office hour slot each week",
        coTraining: "All support delivered in person daily",
    },
    {
        feature: "Achieve Anything Framework",
        accountability: "Daily accountability emails; optional monthly framework check-in conversations; access to the private Achieve Anything community group",
        coTraining: "Daily and continuous in-person guidance; access to the private Achieve Anything community group",
    },
    {
        feature: "Nutrition",
        accountability: "Custom macro guidelines and habit framework",
        coTraining: "Fully custom meal plan plus grocery and prep coaching (included)",
    },
    {
        feature: "Recovery",
        accountability: "Self-managed stretching and rest planning",
        coTraining: "Weekly massage therapy included plus guided recovery sessions",
    },
    {
        feature: "Tracking & Data",
        accountability: "Use your own apps or wearables for reporting",
        coTraining: "All training and tracking equipment and subscriptions (WHOOP, Oura, Garmin, Strava, MyFitnessPal, Zwift, InBody) included",
    },
    {
        feature: "Testing & Diagnostics",
        accountability: "None",
        coTraining: "VO₂ Max, DEXA, and full-body MRI testing included",
    },
    {
        feature: "Events & Community",
        accountability: "None",
        coTraining: "Exclusive events and cycling experiences included",
    },
    {
        feature: "Investment",
        accountability: "$1,000 / month",
        coTraining: "$20,000 / month (6-month minimum)",
    },
    {
        feature: "Eligibility",
        accountability: "Assessment required before acceptance",
        coTraining: "Completion of at least one month of Accountability Coaching plus invitation",
    }
];

const fitnessFaqs = [
    {
        question: "How do I get started?",
        answer: "Apply on this page. If accepted, you will receive a private link to book a 60-minute virtual assessment."
    },
    {
        question: "What happens in the assessment?",
        answer: "We will cover goals, constraints, weekly schedule, equipment and home setup, a brief movement inquiry, and whether Accountability Coaching is the right fit."
    },
    {
        question: "Is the assessment free?",
        answer: "Yes."
    },
    {
        question: "Do you accept everyone?",
        answer: "No. Space is limited and each application is reviewed manually."
    },
    {
        question: "What exactly is included in Accountability Coaching?",
        answer: (
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Daily accountability:</strong> a quick text or email every day confirming what you did and what is next.</li>
                <li><strong>Weekly 30-minute call:</strong> review results, remove blockers, and adjust the coming week.</li>
                <li><strong>Personalized weekly plan:</strong> simple, environment-aware programming using the equipment you actually have (gym or home) with clear \"do this today\" instructions.</li>
                <li><strong>Workouts you can execute:</strong> exercises with sets and reps or time targets and effort cues; cardio includes duration and intensity guidance.</li>
                <li><strong>Nutrition guidance:</strong> custom macro targets, meal frameworks, grocery and prep coaching, and weekly tweaks. You execute; I steer.</li>
                <li><strong>Use your tools:</strong> Garmin or Apple Watch, Strava, WHOOP or Oura, MyFitnessPal, and others. I read the signals you share.</li>
                <li><strong>Daily action expectation:</strong> <em>something</em> every day - training, mobility, or a nutrition check-in. We match my <em>frequency</em>, not my intensity or volume.</li>
                <li><strong>Missed days:</strong> we adjust and move. Repeated misses trigger a reset on schedule, sleep, and environment.</li>
                <li><strong>Weekly office hours:</strong> optional 10-minute virtual office hour slot you can book each week for extra questions or problem solving.</li>
                <li><strong>Monthly performance report:</strong> AI-assisted report summarizing your performance trends, consistency patterns, constraints, and recommended adjustments.</li>
                <li><strong>Achieve Anything framework app:</strong> full access to the paid version, with daily personalized email check-ins and optional monthly framework check-in conversations and access to the private Achieve Anything community group.</li>
                <li><strong>Upgrade path:</strong> after at least one month of consistent execution, I may invite you to Co-Training™ if fit and schedules align.</li>
                <li><strong>Price and terms:</strong> $1,000 per month, month to month. Two-week money-back guarantee on the first month.</li>
            </ul>
        )
    },
    {
        question: "What is the Achieve Anything framework?",
        answer: (
            <div className="space-y-4">
                <p>The Achieve Anything framework is an 8-week operating system for turning one meaningful goal into consistent action. It closes the gap between what you say you want, what you actually do, and who you are becoming.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>One breakthrough every 8 weeks:</strong> you choose a single 8-week breakthrough in health, money and work, or relationships.</li>
                    <li><strong>Daily, concrete tasks:</strong> one small, specific action per day so you always know what to do next.</li>
                    <li><strong>Simple tools for real life:</strong> routines, friction logs, and fallback plans so you adjust instead of restarting.</li>
                    <li><strong>Review and repeat:</strong> weekly and end of cycle reviews so you can run the same structure again and keep raising your standards.</li>
                </ul>
                <p>You can run the framework on your own or combine it with coaching. Both Accountability Coaching and Co-Training™ include full access to the paid version of the framework app and the private Achieve Anything community group.</p>
            </div>
        )
    },
    {
        question: "What do my first 7 days look like?",
        answer: (
            <div className="space-y-4">
                <p><em>Assessment is already done.</em> Week 1 is action:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Day 1 plan (you still train):</strong> lock the week schedule, equipment use, and macro targets.</li>
                    <li><strong>Strength:</strong> 3-5 strength sessions across the week.</li>
                    <li><strong>Cardio:</strong> 0-6 days, mixed durations and intensities (some short, some longer).</li>
                    <li><strong>Mobility:</strong> light mobility on about 6 days (a few minutes minimum on most days).</li>
                    <li><strong>Rest:</strong> up to 1 full rest day if needed.</li>
                    <li><strong>Daily check-ins:</strong> quick message confirming what you did and what is next.</li>
                    <li><strong>Weekly 30-minute call:</strong> end of week review and adjustments.</li>
                </ul>
            </div>
        )
    },
    {
        question: "How do daily check-ins work?",
        answer: "Short text or email each day with what you completed, quick notes on wins or issues, and the plan for tomorrow. I reply with nudges or adjustments as needed."
    },
    {
        question: "What does the weekly 30-minute call cover?",
        answer: "We review adherence and metrics, remove obstacles around schedule, sleep, food, and recovery, update macros and training loads, and finalize the plan for the next week."
    },
    {
        question: "What are weekly office hours?",
        answer: "Once per week I open a limited office hour window. Accountability Coaching clients can book a 10 minute slot inside that window for quick questions, troubleshooting, or decision support between regular calls. It is optional and first come, first served. Co-Training™ support happens in person, so there is no separate office hour booking for Co-Training™."
    },
    {
        question: "What is the monthly performance report?",
        answer: "Once a month you receive an AI-assisted summary that pulls from your training data, check-ins, and our calls. It highlights performance trends, consistency patterns, and key constraints, then recommends specific adjustments for the next month. Both Accountability Coaching and Co-Training™ receive this report."
    },
    {
        question: "How does the Achieve Anything framework integrate with coaching?",
        answer: "Both programs get access to the paid version of my Achieve Anything framework app. Accountability Coaching clients receive daily personalized check-in emails from the app plus optional monthly framework check-in conversations with me and access to the private Achieve Anything community group. Co-Training™ uses the same framework, but progress and adjustments are handled directly in our in-person sessions instead of separate automated emails, and those clients also get access to the private Achieve Anything community group."
    },
    {
        question: "Will you write my workouts? How specific are they?",
        answer: "Yes. You will get exercises, sets and reps or time-based work, rest intervals when needed, and target effort using RPE, heart rate, or power. Cardio sessions include duration and intensity guidance."
    },
    {
        question: "Do you tell me exactly what to eat?",
        answer: "You get custom macro targets, meal frameworks, grocery and prep guidance, and weekly tweaks. You execute. Full done-for-you meal planning is a Co-Training™ feature."
    },
    {
        question: "What apps and devices should I use?",
        answer: "In Accountability Coaching we use whatever you already track with: Garmin or Apple, Strava, WHOOP or Oura, MyFitnessPal, and similar tools. I do not force a new ecosystem. In Co-Training™, I provide the full device and subscription stack for you, including training computer, wearables, and key software subscriptions."
    },
    {
        question: "What if my schedule is crazy?",
        answer: "We design around your life: shorter sessions, split sessions, and stacked days when needed. The non-negotiable is a daily touchpoint."
    },
    {
        question: "What if I miss a day?",
        answer: "We adjust the week and keep momentum. If misses stack up, we reset constraints such as time of day, session length, and environment so the plan fits your life."
    },
    {
        question: "What if I am traveling or only have minimal equipment?",
        answer: "I provide \"minimal kit\" variants using bodyweight, hotel gyms, or bands so you hit the intent of the day and keep the streak alive."
    },
    {
        question: "How hard will you push me?",
        answer: "Accountability Coaching matches my frequency but not my intensity or volume. We progress intelligently - quality and consistency first, then load. Co-Training™ uses the same principle, with closer real-time adjustments during in-person sessions."
    },
    {
        question: "Injuries or medical considerations?",
        answer: "You need medical clearance. I will modify inside safe limits, prioritize pain-free movement, and maintain progress without unnecessary risk."
    },
    {
        question: "Where are in-person sessions held?",
        answer: (
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accountability Coaching:</strong> All Accountability Coaching training is remote.</li>
                <li><strong>Co-Training™:</strong> more than 90 percent of sessions are in person. We train together at a premium gym or in a premium home gym that I purchase and have installed for you using your included equipment allowance.</li>
            </ul>
        )
    },
    {
        question: "Guarantee?",
        answer: "Accountability Coaching includes a two-week money-back guarantee on the first month. Co-Training™ includes a two-week money-back guarantee on the first six month block."
    },
    {
        question: "Payments?",
        answer: "Credit or debit card or ACH. Accountability Coaching auto-renews monthly; you can cancel any time before the next billing date. Pauses are allowed for travel or medical reasons with a return plan. Co-Training™ follows its six month term structure."
    },
    {
        question: "Privacy and data?",
        answer: "You control what you share. I use your data to coach you and do not sell personal data."
    },
    {
        question: "What is Co-Training™?",
        answer: (
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Train side by side:</strong> we are together for nearly every session.</li>
                <li><strong>Premium gym access or home gym:</strong> membership included or a premium home setup purchased and installed for you.</li>
                <li><strong>Cardio modality:</strong> <u>personal road bike required</u> for outdoor and indoor cycling. I provide the indoor trainer for your home setup.</li>
                <li><strong>Real-time accountability:</strong> immediate feedback and adjustments every session, plus 24/7 direct on call access.</li>
                <li><strong>Nutrition done with you:</strong> fully custom meal plan plus grocery and prep coaching.</li>
                <li><strong>Recovery included:</strong> weekly massage therapy and guided recovery sessions.</li>
                <li><strong>Testing and diagnostics:</strong> VO₂ Max, DEXA, and full-body MRI included.</li>
                <li><strong>Devices and subscriptions:</strong> all training and tracking equipment and subscriptions (WHOOP, Oura, Garmin, Strava, MyFitnessPal, Zwift, InBody) included.</li>
                <li><strong>First month allowance:</strong> $10,000 allowance that can be applied toward a road bike purchase or premium home gym equipment.</li>
                <li><strong>Experiences:</strong> exclusive events and cycling experiences.</li>
                <li><strong>Paid Achieve Anything Framework:</strong> full access to the complete system, including the private Achieve Anything community group.</li>
                <li><strong>Terms:</strong> $20,000 per month, six month minimum, invitation only after consistent Accountability Coaching.</li>
            </ul>
        )
    },
    {
        question: "Who usually qualifies for Co-Training™?",
        answer: "Austin-based, able to train 5 to 6 days per week, willing to fully embrace a shared disciplined lifestyle, and ready to invest significantly. You either already ride or are ready to start riding a road bike, with equipment covered by your allowance if needed. Only one client is accepted at a time."
    },
    {
        question: "Do you offer speaking or team sessions?",
        answer: "Yes. Use the contact page for speaking or team requests."
    }
];

export default function FitnessCoachingPage() {
    return (
        <main className="bg-white text-black font-sans antialiased">
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="relative flex min-h-[60vh] md:min-h-screen flex-col items-start justify-end md:items-center md:justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 scale-105 pointer-events-none">
                    {/* Desktop Image */}
                    <div className="hidden md:block absolute inset-0">
                        <Image
                            src="/images/Carey Rouse Indoor Cycle.webp"
                            alt="Carey Rouse Fitness Coaching Desktop"
                            fill
                            className="object-cover object-center opacity-70"
                            priority
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="block md:hidden absolute inset-0">
                        <Image
                            src="/images/Carey Rouse Indoor Cycle cropped medium.webp"
                            alt="Carey Rouse Fitness Coaching Mobile"
                            fill
                            className="object-cover object-right opacity-70"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/95 via-black/30 md:via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-0 pb-12 md:py-32 md:px-12 lg:px-24">
                    <div className="max-w-4xl text-left">
                        <h1 className="text-[40px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                            Consistency Isn&rsquo;t <br className="hidden md:block" />
                            a Personality Trait.<br className="hidden md:block" />
                            It&rsquo;s a System.
                        </h1>

                        <div className="mt-4 md:mt-16 flex flex-col gap-6 sm:flex-row sm:items-center">
                            <a
                                href="#application"
                                className="rounded-full bg-[#0066FF] px-12 py-6 text-center text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#0052CC] active:scale-95 shadow-2xl"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — TWO WAYS TO WORK
      ═══════════════════════════════════════════ */}
            <section className="bg-white pt-20 pb-12 md:py-20">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px]">Two ways to work with me</h2>
                    <div className="mt-8 md:mt-12 space-y-8 text-2xl leading-relaxed text-black/80 font-medium">
                        <p>
                            <strong>Accountability Coaching:</strong> Remote, high-accountability coaching. <br />
                            <strong>Co-Training™:</strong> Full-immersion, in-person transformation.
                        </p>
                        <p>
                            If you&rsquo;ve read <Link href="https://amzn.to/3HtU3ua" target="_blank" rel="noopener noreferrer" className="underline font-black decoration-[#0066FF] decoration-4 italic">Find Meaning Through Relentless Discipline</Link>, you already know what this is about. This isn&rsquo;t another coaching program. It&rsquo;s a full commitment to discipline — physically, mentally, and operationally.
                        </p>
                        <p>
                            Every person starts with a one-hour assessment. That&rsquo;s where we decide if you&rsquo;re ready to begin <strong>Accountability Coaching</strong> — or, eventually, earn your way into <strong>Co-Training™</strong>.
                        </p>
                        <div className="pt-4 flex flex-col gap-4">
                            <Link href="#how_it_works" className="text-2xl font-medium text-[#0066FF] hover:underline transition-all">
                                How it works ↓
                            </Link>
                            <a href="#faq" className="text-2xl font-medium text-[#0066FF] hover:underline transition-all">
                                Have questions? See the full FAQ ↓
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-20">
                        <h2 className="text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px]">Two Ways to Build the Consistency You&rsquo;ve Never Been Able to Keep.</h2>
                        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                            <div className="space-y-8 text-2xl leading-relaxed text-black/80 font-medium">
                                <p>
                                    I remove the biggest blocker, <strong>consistency</strong>, by giving you a system that you follow every day, not vague advice you&rsquo;re left to figure out alone.
                                </p>
                                <p>
                                    <strong>Accountability Coaching</strong> builds consistency through structured planning, accountability, and daily check-ins, all designed around your environment.
                                </p>
                                <p>
                                    <strong>Co-Training™</strong> is full immersion. I&rsquo;m with you every session, every ride, every adjustment. You don&rsquo;t need peak fitness to start. You need access to a gym, a road bike, and the discipline to follow through.
                                </p>
                            </div>
                            <div className="relative h-[300px] md:h-[480px] overflow-hidden rounded-[40px] shadow-2xl">
                                <Image
                                    src="/images/group ride.webp"
                                    alt="Carey Rouse Group Training Ride"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — SERVICE COMPARISON
      ═══════════════════════════════════════════ */}
            <section className="bg-white md:bg-[#111] pt-20 pb-12 md:py-20 text-black md:text-white">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-center text-[32px] font-black md:text-[56px] lg:text-[64px]">Two Programs — One Goal: Build Relentless Consistency</h2>

                    <div className="mt-20">
                        {/* Mobile Card Layout (visible on mobile only) */}
                        <div className="space-y-6 md:hidden">
                            {comparisonFeatures.map((f, i) => (
                                <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-xl">
                                    <div className="bg-black px-6 py-4 border-b border-white/10">
                                        <h3 className="text-xl font-black uppercase tracking-widest text-white">{f.feature}</h3>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-[#0066FF] block mb-2">Accountability Coaching</span>
                                            <p className="text-lg font-bold text-white">{f.accountability}</p>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <span className="text-xs font-black uppercase tracking-widest text-white/40 block mb-2">Co-Training™</span>
                                            <p className="text-lg font-bold text-white">{f.coTraining}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table Layout (visible on tablet/desktop only) */}
                        <div className="hidden md:block overflow-x-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md">
                            <table className="w-full text-left min-w-[900px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-white/40">Feature</th>
                                        <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-[#0066FF]">Accountability Coaching</th>
                                        <th className="px-10 py-8 text-xl font-black uppercase tracking-widest text-white">Co-Training™</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {comparisonFeatures.map((f, i) => (
                                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                                            <td className="px-10 py-8 text-lg font-black text-white/50">{f.feature}</td>
                                            <td className="px-10 py-8 text-lg font-bold text-white">{f.accountability}</td>
                                            <td className="px-10 py-8 text-lg font-bold text-white">{f.coTraining}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4 — THE ASSESSMENT
      ═══════════════════════════════════════════ */}
            <section className="bg-white pt-20 pb-12 md:py-20" id="how_it_works">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-[32px] font-black md:text-[56px] lg:text-[64px]">How The Assessment Works</h2>
                    <div className="mt-8 md:mt-16 max-w-4xl space-y-8 text-2xl font-medium text-black/80">
                        <p>If accepted, you’ll receive a link to schedule your mandatory free 60-minute assessment.</p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>Complete your assessment over Google Meet.</li>
                            <li>During the assessment, we’ll cover goals, background, equipment access, and readiness. If approved, you begin <strong>Accountability Coaching</strong> immediately. Strong fit + Austin may be invited to <strong>Co-Training™</strong> later.</li>
                        </ul>
                        <div className="mt-12">
                            <a
                                href="#application"
                                className="inline-block rounded-full bg-[#0066FF] px-12 py-6 text-center text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#0052CC] active:scale-95 shadow-2xl"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 5 — FAQ
      ═══════════════════════════════════════════ */}
            <section id="faq" className="mx-auto w-full max-w-[1440px] px-6 pt-24 pb-12 md:px-12 lg:px-24 bg-[#F9F9F9]/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[32px] font-black md:text-[56px] lg:text-[64px]">Coaching FAQ</h2>
                    <div className="mt-8 md:mt-20 divide-y divide-black/10 border-y border-black/10">
                        {fitnessFaqs.map((item, i) => (
                            <details key={i} className="group py-6 transition-all hover:bg-[#F9F9F9] px-4 md:px-8 focus:outline-none">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-black md:text-2xl">
                                    <span>{item.question}</span>
                                    <div className="flex-shrink-0 ml-4 font-light text-3xl transition-transform duration-500 group-open:rotate-45">+</div>
                                </summary>
                                <div className="mt-4 text-lg leading-relaxed text-black/60 font-medium max-w-3xl">
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
            <section id="application" className="bg-black pt-24 pb-20 md:py-24 text-white relative overflow-hidden">
                <div className="mx-auto w-full max-w-[1000px] px-6 text-left relative z-10">
                    <span className="text-[#0066FF] font-black uppercase tracking-widest text-xl">Get Started</span>
                    <h2 className="mt-8 text-[40px] font-black leading-[0.95] md:text-[88px]">Start With an Application</h2>
                    <p className="mt-12 text-2xl font-bold opacity-60 md:text-3xl max-w-2xl">
                        Complete this brief application so I can review your fit. If accepted, you’ll get a link to book a free 60-minute assessment.
                    </p>

                    <div className="mt-20">
                        <FitnessForm />
                    </div>
                </div>
            </section>
        </main >
    );
}
