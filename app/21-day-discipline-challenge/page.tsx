import Link from "next/link";

export default function ChallengePage() {
    return (
        <main className="bg-white text-black font-sans antialiased">
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="bg-black py-24 text-white md:py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24 text-center">
                    <h1 className="text-[56px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                        3 Minutes A Day. <br />
                        21 Days. <br />
                        Free.
                    </h1>
                    <p className="mt-8 text-xl font-medium text-white/80 md:text-2xl max-w-3xl mx-auto">
                        One short email every morning with one action to do. No hacks. Just discipline.
                    </p>
                    <div className="mt-16">
                        <Link
                            href="#form"
                            className="inline-block rounded-full bg-[#0066FF] px-12 py-6 text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#0052CC] active:scale-95 shadow-2xl"
                        >
                            Start the Challenge
                        </Link>
                    </div>
                    <p className="mt-8 text-white/40 font-medium">Takes ~3 minutes/day. Unsubscribe anytime.</p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — WHAT YOU GET
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-[40px] font-black leading-tight md:text-[56px] lg:text-[64px]">WHAT YOU GET:</h2>
                            <ul className="mt-12 space-y-6">
                                {[
                                    "One practical task each day",
                                    "~3 minutes to complete",
                                    "Momentum you can feel by Day 7",
                                    "Lay out tomorrow’s workout gear. Set your alarm. Fill a water bottle. Done in ~2 minutes."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-2xl font-medium text-black/80">
                                        <span className="text-[#0066FF] font-black">/</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-[40px] bg-black p-12 text-white shadow-2xl">
                            <h2 className="text-[40px] font-black leading-tight md:text-[56px] lg:text-[64px]">Tomorrow morning, you’ll already have your first win.</h2>
                            <p className="mt-8 text-xl text-white/60 font-medium leading-relaxed">
                                From Carey Rouse, author of Find Meaning Through Relentless Discipline. This challenge is designed to remove the complexity of starting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — FORM
      ═══════════════════════════════════════════ */}
            <section id="form" className="bg-[#F9F9F9] py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24 text-center">
                    <h2 className="text-[40px] font-black leading-tight md:text-[56px] lg:text-[64px]">Secure Your Spot</h2>
                    <p className="mt-6 text-xl text-black/60 font-medium">Join thousands of others building consistency.</p>

                    <div className="mt-16 max-w-md mx-auto">
                        <form
                            action="https://app.kit.com/forms/8257969/subscriptions"
                            method="post"
                            className="flex flex-col gap-4"
                        >
                            <input
                                className="w-full rounded-full border border-black/10 bg-white px-8 py-5 text-lg text-black outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                                type="text"
                                name="fields[first_name]"
                                placeholder="First Name"
                                required
                            />
                            <input
                                className="w-full rounded-full border border-black/10 bg-white px-8 py-5 text-lg text-black outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                                type="email"
                                name="email_address"
                                placeholder="Enter Your Email"
                                required
                            />
                            <button
                                className="w-full rounded-full bg-[#0066FF] py-5 text-xl font-black text-white transition-all hover:bg-[#0052CC] active:scale-95 shadow-2xl"
                                type="submit"
                            >
                                Start Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
