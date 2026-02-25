import Link from "next/link";

export default function EbookPage() {
    return (
        <main className="bg-white text-black font-sans antialiased">
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="bg-black py-24 text-white md:py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24 text-center">
                    <h1 className="text-[48px] font-extrabold leading-[1.05] tracking-tight md:text-[72px] lg:text-[88px]">
                        1001 Real-World <br />
                        Discipline Tactics <br />
                        You Can Use Today
                    </h1>
                    <p className="mt-8 text-xl font-medium text-white/80 md:text-2xl max-w-3xl mx-auto">
                        Simple, practical examples to build real discipline — no theory, no hype.
                    </p>
                    <div className="mt-16">
                        <Link
                            href="#form"
                            className="inline-block rounded-full bg-[#5E17EB] px-12 py-6 text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#7236F2] active:scale-95 shadow-2xl"
                        >
                            Get the Free eBook
                        </Link>
                    </div>
                    <p className="mt-8 text-white/40 font-medium">From Carey Rouse, author of Find Meaning Through Relentless Discipline</p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — WHAT YOU GET
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-[40px] font-black leading-tight md:text-[56px]">WHAT YOU GET:</h2>
                            <ul className="mt-12 space-y-6">
                                {[
                                    "1,001 real-world discipline examples — no theory, just action.",
                                    "Quick, practical ideas you can use right now.",
                                    "Covers every area of life: health, habits, mindset, and more.",
                                    "A flexible framework to build daily consistency."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-2xl font-medium text-black/80">
                                        <span className="text-[#5E17EB] font-black">/</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-[40px] bg-[#F9F9F9] p-12 border border-black/5">
                            <h2 className="text-[40px] font-black leading-tight md:text-[56px]">WHAT IS IT ALL ABOUT?</h2>
                            <ul className="mt-12 space-y-6">
                                {[
                                    "Discipline isn’t motivation — it’s motion.",
                                    "One small action a day creates real, lasting change.",
                                    "Simple tactics that remove excuses and make follow-through automatic.",
                                    "Built from years of trial, failure, and hard-won progress."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-2xl font-medium text-black/80">
                                        <span className="text-[#5E17EB] font-black">/</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — FORM
      ═══════════════════════════════════════════ */}
            <section id="form" className="bg-[#111] py-32 text-white">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24 text-center">
                    <h2 className="text-[48px] font-black md:text-[64px]">Download Now</h2>
                    <p className="mt-6 text-xl text-white/60 font-medium">We don’t do spam or fluff. Unsubscribe anytime.</p>

                    <div className="mt-16 max-w-md mx-auto">
                        <form
                            action="https://app.kit.com/forms/8257969/subscriptions"
                            method="post"
                            className="flex flex-col gap-4"
                        >
                            <input
                                className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-5 text-lg text-white outline-none focus:border-[#5E17EB] focus:ring-1 focus:ring-[#5E17EB]"
                                type="text"
                                name="fields[first_name]"
                                placeholder="First Name"
                                required
                            />
                            <input
                                className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-5 text-lg text-white outline-none focus:border-[#5E17EB] focus:ring-1 focus:ring-[#5E17EB]"
                                type="email"
                                name="email_address"
                                placeholder="Enter Your Email"
                                required
                            />
                            <button
                                className="w-full rounded-full bg-[#5E17EB] py-5 text-xl font-black text-white transition-all hover:bg-[#7236F2] active:scale-95 shadow-2xl"
                                type="submit"
                            >
                                Get Instant Access
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
