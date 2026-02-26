import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="bg-white text-black font-sans antialiased flex flex-col items-center pt-4 md:pt-8 pb-4 md:pb-8">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-[56px] font-black leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                        Let’s Connect!
                    </h1>

                    <div className="mt-6 md:mt-10 space-y-6 md:space-y-8">
                        <div className="group">
                            <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-black/40 mb-1 md:mb-2 text-sm md:text-base">Email me directly</p>
                            <Link
                                href="mailto:carey@careyrouse.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[48px] font-black text-black transition-all hover:text-[#0066FF] break-all"
                            >
                                carey@careyrouse.com
                            </Link>
                        </div>

                        <div className="group pt-4 md:pt-6">
                            <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-black/40 mb-1 md:mb-2 text-sm md:text-base">Call or Text</p>
                            <Link
                                href="tel:+15127106901"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[48px] font-black text-black transition-all hover:text-[#0066FF]"
                            >
                                (512) 710-6901
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
