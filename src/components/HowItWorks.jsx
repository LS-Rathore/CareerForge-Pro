const steps = [
    {
        num: "01",
        title: "Import or Input",
        description:
            "Upload your old resume or start from scratch with our guided editor. We'll extract your key skills automatically.",
        icon: "upload_file",
        align: "right",
    },
    {
        num: "02",
        title: "AI Optimization",
        description:
            "Let our AI engine polish your descriptions and suggest keywords that match your target job descriptions perfectly.",
        icon: "psychology",
        align: "left",
    },
    {
        num: "03",
        title: "Download & Apply",
        description:
            "Choose a professional template, download your PDF, and start landing more interviews today.",
        icon: "download",
        align: "right",
    },
];

export default function HowItWorks() {
    return (
        <section id="templates" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-extrabold text-text-main mb-4">
                        Simple Three-Step Process
                    </h2>
                    <p className="text-text-secondary">From zero to interview-ready in minutes.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-primary/30 -translate-x-1/2 hidden md:block" />

                    {steps.map((step, idx) => {
                        const isLast = idx === steps.length - 1;
                        const textRight = step.align === "right";

                        return (
                            <div
                                key={step.num}
                                className={`grid md:grid-cols-2 gap-12 items-center relative ${!isLast ? "mb-24" : ""}`}
                            >
                                {/* Text Side */}
                                <div className={textRight ? "md:text-right" : "md:order-2"}>
                                    <div className="relative">
                                        <span
                                            className={`absolute -top-10 text-8xl font-black text-primary/5 select-none ${textRight ? "md:right-0" : "left-0"
                                                }`}
                                        >
                                            {step.num}
                                        </span>
                                        <h3 className="text-2xl font-bold text-text-main mb-4">{step.title}</h3>
                                        <p className="text-text-secondary">{step.description}</p>
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className={`${!textRight ? "md:order-1" : ""} bg-white p-4 rounded-xl shadow-lg border border-border-ui`}>
                                    <div className="aspect-video bg-surface rounded-lg flex items-center justify-center border-2 border-dashed border-border-ui">
                                        <span className="material-symbols-outlined text-4xl text-text-tertiary">
                                            {step.icon}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
