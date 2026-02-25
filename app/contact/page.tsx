import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="bg-white text-black font-sans antialiased min-h-[80vh] flex flex-col items-center justify-center py-32">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-[56px] font-extrabold leading-[1.05] tracking-tight md:text-[88px] lg:text-[100px]">
                        Let’s Connect!
                    </h1>

                    <div className="mt-20 space-y-12">
                        <div className="group">
                            <p className="text-xl font-bold uppercase tracking-widest text-black/40 mb-4">Email me directly</p>
                            <Link
                                href="mailto:carey@careyrouse.com"
                                className="text-[32px] md:text-[48px] font-black text-[#5E17EB] transition-all hover:opacity-70 break-all"
                            >
                                carey@careyrouse.com
                            </Link>
                        </div>

                        <div className="group pt-8">
                            <p className="text-xl font-bold uppercase tracking-widest text-black/40 mb-4">Call or Text</p>
                            <Link
                                href="tel:+15127106901"
                                className="text-[32px] md:text-[48px] font-black text-black transition-all hover:text-[#5E17EB]"
                            >
                                (512) 710-6901
                            </Link>
                        </div>
                    </div>

                    <div className="mt-32 pt-12 border-t border-black/5">
                        <p className="text-2xl font-medium text-black/60 max-w-2xl mx-auto leading-relaxed">
                            Whether it’s about coaching, speaking engagements, or just sharing your progress — I read every message.
                        </p>
                        <div className="mt-12 flex justify-center gap-8">
                            <Link href="/about" className="text-xl font-bold text-[#5E17EB] hover:underline">About Carey</Link>
                            <Link href="/life" className="text-xl font-bold text-[#5E17EB] hover:underline">Life Coaching</Link>
                            <Link href="/fitness" className="text-xl font-bold text-[#5E17EB] hover:underline">Fitness Coaching</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
