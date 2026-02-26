import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
    return (
        <main className="bg-white text-black font-sans antialiased">
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <h1 className="text-[56px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                                Find Meaning <br />
                                Through <br />
                                Relentless <br />
                                Discipline
                            </h1>
                            <p className="mt-8 text-xl font-medium text-white/80 md:text-2xl">
                                A raw, no-BS guide to building a meaningful life through structure, intention, and consistent action.
                            </p>
                            <div className="mt-12">
                                <Link
                                    href="https://amzn.to/3HtU3ua"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-full bg-[#0066FF] px-12 py-6 text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#0052CC] active:scale-95 shadow-2xl"
                                >
                                    Buy on Amazon
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 flex justify-center lg:order-2">
                            <div className="relative h-[400px] w-full max-w-[500px] md:h-[600px]">
                                <Image
                                    src="/images/3 book 3d cover cropped.webp"
                                    alt="Find Meaning Through Relentless Discipline Book Cover"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — THE TRUTH
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl">
                        <h2 className="text-[40px] font-black leading-tight md:text-[56px] lg:text-[64px]">
                            Ready for the raw truth about building a life that actually means something?
                        </h2>
                        <div className="mt-12 space-y-8 text-2xl leading-relaxed text-black/80 font-medium">
                            <p>
                                Stop searching for shortcuts. Meaning isn’t found on a gentle path; it’s forged in the fire of challenge and built with the undeniable power of relentless discipline. This book is your blueprint.
                            </p>
                            <p>
                                Written by Carey Rouse, a man who has lived these principles through poverty, heartbreak, near-death, devastating setbacks, and bold risks. His life is proof that these principles work.
                            </p>
                            <p>
                                <em>Find Meaning Through Relentless Discipline</em> strips away the pretense and delivers actionable lessons straight from a life lived hard, raw, and on its own terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — LEARNINGS
      ═══════════════════════════════════════════ */}
            <section className="bg-[#F9F9F9] py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <h2 className="text-[40px] font-black md:text-[56px] lg:text-[64px]">Inside, You Will Learn How To:</h2>
                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Ignite Relentless Discipline",
                                text: "Make discipline your foundation, the key to taking control and building momentum.",
                            },
                            {
                                title: "Design Your Environment for Victory",
                                text: "Ruthlessly eliminate the distractions and chaos sabotaging your goals by intentionally shaping your physical, digital, social, and financial world.",
                            },
                            {
                                title: "Harness Small Wins",
                                text: "Unlock the immense power of accumulating small, daily wins that build unwavering confidence and unstoppable progress.",
                            },
                            {
                                title: "Embrace Calculated Risks",
                                text: "Learn to step outside your comfort zone, pursue your passions, and make smart, intentional moves that unlock potential.",
                            },
                            {
                                title: "Live Authentically on Your Own Terms",
                                text: "Define what truly matters to you, ignore external expectations, and build a life that’s unapologetically yours.",
                            },
                            {
                                title: "Cultivate Unbreakable Resilience",
                                text: "Develop the grit to face life’s inevitable hard hits, learn from setbacks, and keep getting back up, stronger and faster, every single time.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="rounded-[40px] bg-white p-10 shadow-sm border border-black/5 hover:border-[#0066FF]/20 transition-all">
                                <h3 className="text-[24px] font-black md:text-[32px] lg:text-[40px] tracking-tight text-[#0066FF]">{item.title}</h3>
                                <p className="mt-6 text-lg font-medium text-black/70 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4 — AUDIO & CTA
      ═══════════════════════════════════════════ */}
            <section className="bg-white py-32">
                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                        <div className="relative h-[400px] w-full md:h-[600px] overflow-hidden rounded-[40px] shadow-2xl">
                            <Image
                                src="/images/Audio cover.webp"
                                alt="Find Meaning Through Relentless Discipline Audio Cover"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-12">
                            <h2 className="text-[48px] font-black leading-tight md:text-[64px]">Get Your Copy</h2>
                            <p className="text-2xl font-medium text-black/70 leading-relaxed">
                                This book is for the doers, the strivers who know the journey is the reward. It’s filled with stories of reality and payoff.
                            </p>
                            <div className="pt-8">
                                <Link
                                    href="https://amzn.to/3HtU3ua"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-full bg-black px-12 py-6 text-xl font-black text-white transition-all hover:scale-105 hover:bg-[#0066FF] active:scale-95 shadow-2xl"
                                >
                                    Available on Amazon
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
