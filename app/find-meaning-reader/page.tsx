import Image from "next/image";
import Link from "next/link";

export default function ReaderPage() {
    return (
        <main className="bg-[#FBFBFB] min-h-screen font-sans antialiased selection:bg-[#0066FF] selection:text-white">
            {/* Subtle Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#0066FF]/5 blur-[120px] pointer-events-none" />

            {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
            <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">

                        {/* LEFT COLUMN: FORM & TEXT */}
                        <div className="space-y-8 order-1 lg:order-1">
                            {/* Bonus Label */}
                            <div className="inline-block rounded-full bg-black/5 px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] text-black/60">
                                Bonus for readers of Find Meaning Through Relentless Discipline
                            </div>

                            {/* Heading */}
                            <h1 className="text-[40px] font-black leading-[1.1] tracking-tight text-black md:text-[64px] lg:text-[72px]">
                                Thanks for Reading. <br />
                                Here’s Your Free <br />
                                Companion eBook.
                            </h1>

                            {/* Form Card */}
                            <div className="rounded-[32px] bg-white p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-black/5 md:p-10">
                                <form
                                    action="https://app.kit.com/forms/8384749/subscriptions"
                                    method="post"
                                    data-sv-form="8384749"
                                    data-uid="6b7e084f63"
                                    data-format="inline"
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-black/40 px-1">First Name</label>
                                        <input
                                            className="w-full rounded-2xl border border-black/10 bg-[#F9F9F9] px-6 py-4 text-[16px] font-bold text-black outline-none focus:border-[#0066FF] focus:bg-white transition-all placeholder:text-black/20"
                                            type="text"
                                            name="fields[first_name]"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-black/40 px-1">Enter Your Email</label>
                                        <input
                                            className="w-full rounded-2xl border border-black/10 bg-[#F9F9F9] px-6 py-4 text-[16px] font-bold text-black outline-none focus:border-[#0066FF] focus:bg-white transition-all placeholder:text-black/20"
                                            type="email"
                                            name="email_address"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                    </div>
                                    <button
                                        className="w-full rounded-full bg-black py-6 text-xl font-black text-white transition-all hover:bg-black/80 hover:scale-[1.02] active:scale-95 shadow-xl mt-4"
                                        type="submit"
                                    >
                                        Get The Free eBook
                                    </button>
                                </form>
                                <p className="mt-6 text-center text-sm font-medium text-black/40">
                                    We don’t do spam or fluff. Unsubscribe anytime.
                                </p>
                            </div>

                            {/* Blockquote Disclaimer */}
                            <p className="border-l-8 border-black pl-8 py-2 text-2xl font-medium leading-relaxed text-black/80 italic">
                                “As a thank-you for finishing Find Meaning Through Relentless Discipline, here’s your free companion guide: 1001 Ways to Embrace Discipline.”
                            </p>
                        </div>

                        {/* RIGHT COLUMN: EBOOK IMAGE */}
                        <div className="relative order-2 lg:order-2">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F5F5F5] to-white p-6 shadow-2xl border border-black/5 md:p-10">
                                <Image
                                    src="/images/not-found/1001 ways ebook cover.webp"
                                    alt="1001 Ways to Embrace Discipline eBook"
                                    fill
                                    className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            <p className="mt-8 text-center text-xl font-medium text-black/40 leading-relaxed max-w-sm mx-auto">
                                Simple, practical examples to build real discipline - no theory, no hype.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU GET Section */}
            <section className="bg-white pb-16 md:pb-24 border-t border-black/5">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-[64px] font-black leading-none tracking-tighter text-black/10 md:text-[120px] lg:text-[160px] mb-8 select-none">
                        WHAT YOU GET:
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pb-8 md:pb-0">
                        {[
                            { title: "Practical Tactics", desc: "1,001 real-world discipline examples you can start using today." },
                            { title: "No Theory", desc: "Built from years of real testing and hard-won progress, not fluff." },
                            { title: "Comprehensive", desc: "Covers health, habits, mindset, and operational discipline." },
                            { title: "Lifetime Value", desc: "A guide you'll return to whenever you need to tighten your systems." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-[16px] font-black uppercase tracking-[0.2em] text-[#0066FF]">/ 0{i + 1}</div>
                                <h3 className="text-2xl font-black text-black">{item.title}</h3>
                                <p className="text-lg font-medium text-black/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#0066FF]/5 blur-[120px] pointer-events-none" />
        </main>
    );
}
