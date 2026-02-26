import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans antialiased bg-white text-black">
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-start">
        {/* Background image */}
        <Image
          src="/images/beach.webp"
          alt="Beach background"
          fill
          className="object-cover object-right-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/70" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-start px-4 pt-20 pb-20 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-[40px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px] text-white">
              Design A Life You Actually Want To Live
            </h1>
            <p className="mt-4 text-[24px] font-bold leading-tight tracking-tight text-white md:text-[32px] lg:text-[40px]">
              Life Coaching And Fitness Coaching Built On One Framework
            </p>
            <p className="mt-6 text-[18px] leading-[26px] text-white">
              I help people create real change through structure, discipline, and
              consistent execution. Not hype. Not motivation talk. A repeatable
              system that turns intention into action.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="https://careyrouse.com/life/"
                className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
              >
                Explore Life Coaching
              </Link>
              <Link
                href="https://careyrouse.com/fitness"
                className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
              >
                Explore Fitness Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — CHANGE AS THE HUMAN ARC
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-left text-[32px] font-black leading-tight tracking-tight md:text-[56px] lg:text-[64px] text-black">
            Change As The Human Arc
          </h2>
          <p className="mt-2 pb-[30px] text-left text-[20px] font-bold leading-[28px] text-black md:text-[24px] md:leading-[32px]">
            Close the gap between what you say you want, what you actually do,
            and who you are becoming.
          </p>
          <p className="pb-[30px] text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
            Most people do not fail because they lack motivation. They fail
            because they lack a system that fits real life. If you feel stuck,
            inconsistent, or frustrated with yourself, the goal is not to
            &ldquo;try harder.&rdquo; The goal is to build structure that makes
            follow-through normal.
          </p>
          <p className="text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
            I work with people who are ready to stop negotiating with themselves
            and start building momentum through simple actions, accountability,
            and weekly adjustments.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — ONE FRAMEWORK – TWO ENTRY POINTS
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-left text-[32px] font-black leading-tight tracking-tight md:text-[56px] lg:text-[64px] text-black">
            One Framework – Two Entry Points
          </h2>
          <p className="mt-2 pb-[30px] text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
            Everything I offer is built on the Achieve Anything Framework. It is
            a practical operating system for turning one meaningful goal into
            consistent action. Whether the goal is life direction or physical
            transformation, the process is the same.
          </p>
          <ul className="mb-8 list-inside list-disc pb-[30px] text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
            <li>Choose one priority</li>
            <li>Define clear actions</li>
            <li>Execute daily</li>
            <li>Adjust weekly</li>
            <li>Build identity proof through consistency</li>
          </ul>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {/* Life Coaching Card */}
            <div className="flex flex-col gap-4 p-0">
              <h3 className="text-[24px] font-black md:text-[32px] lg:text-[40px] leading-tight tracking-tight text-black">
                Life Coaching:
              </h3>
              <p className="text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                For people who feel misaligned, stuck, or unclear and want to
                redesign their life with intention. This is about direction,
                identity, work, relationships, and rebuilding trust with
                yourself through action.
              </p>
              <div>
                <Link
                  href="https://careyrouse.com/life/"
                  className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
                >
                  Explore Life Coaching
                </Link>
              </div>
            </div>

            {/* Fitness Coaching Card */}
            <div className="flex flex-col gap-4 p-0 pt-8 md:pt-0">
              <h3 className="text-[24px] font-black md:text-[32px] lg:text-[40px] leading-tight tracking-tight text-black">
                Fitness Coaching:
              </h3>
              <p className="text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                For people who want to transform their body, energy, and
                discipline through structured training and accountability. This
                is about consistency, performance, and using fitness as the
                proving ground for higher standards.
              </p>
              <div>
                <Link
                  href="https://careyrouse.com/fitness"
                  className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
                >
                  Explore Fitness Coaching
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — SYSTEMS BEAT MOTIVATION
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-left text-[32px] font-black leading-tight tracking-tight md:text-[56px] lg:text-[64px] text-black">
            Systems Beat Motivation
          </h2>
          <p className="mt-2 pb-[30px] text-left text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
            Real change comes from doing small, specific things consistently
            long enough that your identity shifts. My job is to help you build
            that structure, enforce the standard, and keep you moving when life
            gets busy.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — MEET CAREY ROUSE
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Headshot */}
            <div className="flex justify-center">
              <Image
                src="/images/2000-2000 headshot January.webp"
                alt="Carey Rouse headshot"
                width={640}
                height={640}
                className="w-full max-w-md rounded"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col self-center">
              <h2 className="text-left text-[32px] font-black leading-tight tracking-tight md:text-[56px] lg:text-[64px] text-black">
                Meet Carey Rouse
              </h2>
              <p className="mt-4 text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                I work with people who are tired of knowing what they should do
                and ready to start doing it. I am not here to inspire you for a
                week. I am here to help you build a structure you can live inside
                of.
              </p>
              <p className="mt-4 text-[18px] leading-[26px] text-black md:text-[20px] md:leading-[28px]">
                If you are ready to take responsibility for your life and back it
                up with action, I will meet you there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — START HERE (CTAs)
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-12 text-center text-[32px] font-black leading-tight tracking-tight md:text-[56px] lg:text-[64px] text-black">
            Start Here
          </h2>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:justify-items-center">
            <Link
              href="https://careyrouse.com/life/"
              className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
            >
              Explore Life Coaching
            </Link>
            <Link
              href="https://careyrouse.com/fitness"
              className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-[16px] font-semibold leading-[24px] text-white no-underline shadow transition-colors hover:bg-black/80"
            >
              Explore Fitness Coaching
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
