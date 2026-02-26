import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
    {
        src: "/images/Fort Smith Fitness Shoot-56.webp",
        width: 2560,
        height: 1706,
        alt: "Carey Rouse side flex",
    },
    {
        src: "/images/Austin_2025_016.webp",
        width: 1681,
        height: 892,
        alt: "Carey Rouse group ride",
    },
    {
        src: "/images/chin ups.webp",
        width: 1799,
        height: 2560,
        alt: "Carey Rouse Chin-ups for Austin Fit Magazine competition",
    },
    {
        src: "/images/carey sprinting.webp",
        width: 1086,
        height: 1415,
        alt: "Carey Rouse bike Sprinting",
    },
    {
        src: "/images/closeup tri.webp",
        width: 989,
        height: 988,
        alt: "Carey Rouse Tri",
    },
    {
        src: "/images/group ride.webp",
        width: 2560,
        height: 1533,
        alt: "Carey Rouse Group Training Ride",
    },
    {
        src: "/images/guadalupe peak.webp",
        width: 2560,
        height: 1920,
        alt: "Carey Rouse Guadalupe Peak",
    },
    {
        src: "/images/medals.webp",
        width: 1707,
        height: 2560,
        alt: "Carey Rouse Bodybuilding Medals",
    },
    {
        src: "/images/race pose.webp",
        width: 2560,
        height: 1709,
        alt: "Carey Rouse with racecar",
    },
    {
        src: "/images/zoot.webp",
        width: 1061,
        height: 1080,
        alt: "Carey Rouse Zoot Triathlon",
    },
];

export const metadata: Metadata = {
    title: "About - Carey Rouse",
    description:
        "Lived Proof. Hard-Won Lessons. Unfiltered Truth.",
};

export default function AboutPage() {
    return (
        <main>
            {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
            <section className="relative flex min-h-screen flex-col items-center justify-center">
                {/* Background image */}
                <Image
                    src="/images/cable pulls.webp"
                    alt="Carey Rouse holding weight stack cables"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/70" />

                {/* Hero content */}
                <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center px-4 md:px-6">
                    <h1 className="text-[40px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px] text-white">
                        ABOUT CAREY ROUSE
                    </h1>
                    <p className="mt-4 text-[20px] font-bold leading-[28px] text-white md:text-[24px] md:leading-[32px]">
                        Lived Proof. Hard-Won Lessons. Unfiltered Truth.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 2 — THE JOURNEY: FORGED BY DISCIPLINE
      ═══════════════════════════════════════════ */}
            <section className="bg-white px-4 py-24 md:px-6 md:py-32">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-left text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px] text-black">
                        The Journey: Forged by Discipline
                    </h2>
                    <p className="mt-2 pb-[30px] text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                        My understanding of discipline was forged through real-world
                        struggle and high-stakes transitions, not theory.
                    </p>

                    <ul className="mb-8 list-inside list-disc pb-[30px] text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                        <li>
                            <strong>Early Grit:</strong> Navigating childhood poverty and
                            working multiple jobs to earn every opportunity.
                        </li>
                        <li>
                            <strong>Corporate Experience:</strong> Spending 25 years on the
                            corporate track, managing complex projects and enduring
                            high-pressure environments.
                        </li>
                        <li>
                            <strong>Entrepreneurial Resilience:</strong> Bootstrapping
                            ventures, navigating financial resets, and building functional
                            solutions from scratch.
                        </li>
                        <li>
                            <strong>The Ultimate Wake-up:</strong> Fighting back to peak
                            performance after a sudden, life-threatening heart failure
                            incident.
                        </li>
                        <li>
                            <strong>The Shift:</strong> Choosing to leave the default path to
                            help others find meaning outside of a script written by someone
                            else.
                        </li>
                    </ul>

                    <p className="text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                        Relentless discipline has been my anchor. It is the framework I use
                        to help others find agency, self-respect, and a life that actually
                        feels like theirs.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 3 — STRUCTURED ACCOUNTABILITY. REAL CHANGE.
      ═══════════════════════════════════════════ */}
            <section className="bg-white px-4 py-24 md:px-6 md:py-32">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-left text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px] text-black">
                        Structured Accountability. Real Change.
                    </h2>
                    <p className="mt-2 pb-[30px] text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                        I coach in two separate tracks: life coaching and fitness coaching.
                        People pick one. The common thread is a framework built on daily
                        action, tracking, and built-in accountability.
                    </p>

                    {/* Two cards side by side */}
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                        {/* Life Coaching Card */}
                        <div className="flex flex-col gap-4 p-0">
                            <h3 className="text-[24px] font-black md:text-[32px] lg:text-[40px] leading-tight tracking-tight text-black">
                                Life Coaching:
                            </h3>
                            <p className="text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                                For those living by someone else&rsquo;s script who sense there
                                is &ldquo;more&rdquo; but lack a process to act on it.
                            </p>
                            <div>
                                <Link
                                    href="https://calendar.app.google/fSTvE2DQeuG24fGh8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-[16px] font-black leading-[24px] text-white no-underline shadow-xl transition-all hover:bg-black/80 hover:scale-[1.02] active:scale-95"
                                >
                                    Book A Free 15-Minute Call
                                </Link>
                            </div>
                        </div>

                        {/* Fitness Coaching Card */}
                        <div className="flex flex-col gap-4 p-0 pt-8 md:pt-0">
                            <h3 className="text-[24px] font-black md:text-[32px] lg:text-[40px] leading-tight tracking-tight text-black">
                                Fitness Coaching:
                            </h3>
                            <p className="text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                                For athletically minded adults who are out of shape and sick of
                                starting over.
                            </p>
                            <div>
                                <Link
                                    href="https://careyrouse.com/fitness"
                                    className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-[16px] font-black leading-[24px] text-white no-underline shadow-xl transition-all hover:bg-black/80 hover:scale-[1.02] active:scale-95"
                                >
                                    Apply For Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 4 — PHOTO GALLERY
      ═══════════════════════════════════════════ */}
            <section className="bg-white px-4 pt-[60px] pb-[30px] md:px-6">
                <div className="mx-auto max-w-[1280px]">
                    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
                        {galleryImages.map((img) => (
                            <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded">
                                <Image
                                    src={img.src}
                                    width={img.width}
                                    height={img.height}
                                    alt={img.alt}
                                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          SECTION 5 — YOUR POWER TO BUILD
      ═══════════════════════════════════════════ */}
            <section className="bg-white px-4 py-24 md:px-6 md:py-32">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-left text-[32px] font-black leading-tight md:text-[56px] lg:text-[64px] text-black">
                        Your Power to Build
                    </h2>
                    <p className="mt-2 text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                        My journey isn&rsquo;t unique because of the challenges faced;
                        it&rsquo;s unique because of the unwavering commitment to building a
                        life on my own terms, despite them. I share my story not for
                        admiration, but as proof. The same capacity for discipline,
                        resilience, and finding deep meaning is within you, waiting to be
                        claimed. It&rsquo;s about taking conscious control, designing your
                        environment for success, embracing smart risks, and living
                        authentically, no matter what anyone else thinks.
                    </p>
                </div>
            </section>
        </main>
    );
}
