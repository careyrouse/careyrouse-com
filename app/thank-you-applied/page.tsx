import Link from "next/link";

export default function ThankYouAppliedPage() {
    return (
        <main className="min-h-[70vh] bg-[#F9F9F9] flex flex-col items-center justify-center px-6 py-12 md:py-24">
            <div className="max-w-[800px] w-full text-center space-y-12">
                {/* Header Section */}
                <div className="space-y-6">
                    <h1 className="text-[40px] md:text-[64px] font-black leading-tight text-black">
                        Your Application Has Been Received.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed">
                        Thank you for applying to the Accountability Alliance / Co-Training Program.
                    </p>
                </div>

                {/* Next Steps Section */}
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-black/5 border border-black/5 text-left space-y-8">
                    <h2 className="text-2xl md:text-3xl font-black text-black">What happens next:</h2>

                    <ul className="space-y-8">
                        <li className="flex gap-6">
                            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-lg">1</span>
                            <p className="text-lg md:text-xl font-medium text-black/70 leading-relaxed">
                                I’ll personally review your application within <span className="text-black font-bold">24–48 hours</span>.
                            </p>
                        </li>
                        <li className="flex gap-6">
                            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-lg">2</span>
                            <p className="text-lg md:text-xl font-medium text-black/70 leading-relaxed">
                                If aligned, you’ll get a private link to book your <span className="text-black font-bold">60-minute assessment</span> (in-person for Austin applicants, Google Meet for others).
                            </p>
                        </li>
                        <li className="flex gap-6">
                            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-lg">3</span>
                            <p className="text-lg md:text-xl font-medium text-black/70 leading-relaxed">
                                After the assessment, I’ll confirm acceptance into <span className="text-black font-bold">Level 1</span>.
                            </p>
                        </li>
                    </ul>

                    <div className="pt-4 border-t border-black/5">
                        <p className="text-lg font-bold text-black/60">
                            Be sure to check your email for updates and be ready to move quickly.
                        </p>
                    </div>
                </div>

                {/* Back to Home / Contact */}
                <div className="space-y-6 pt-4">
                    <Link
                        href="/"
                        className="inline-block rounded-full bg-black px-10 py-5 text-lg font-black text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                    >
                        Return to Homepage
                    </Link>
                    <p className="text-lg font-medium text-black/40">
                        Questions? Reach me at{" "}
                        <a
                            href="mailto:carey@careyrouse.com"
                            className="text-[#0066FF] hover:underline"
                        >
                            carey@careyrouse.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
