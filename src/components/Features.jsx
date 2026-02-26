const features = [
    {
        icon: "edit_note",
        color: "mint",
        title: "AI Rewrite Engine",
        description:
            "Smart suggestions for every bullet point. Transform mundane tasks into high-impact accomplishments.",
    },
    {
        icon: "query_stats",
        color: "primary",
        title: "ATS Score Analyzer",
        description:
            "Instant feedback on resume compatibility. See exactly how an ATS scans your data before you hit apply.",
    },
    {
        icon: "magic_button",
        color: "coral",
        title: "1-Click Magic Button",
        description:
            "Automatically format your entire document. Switch between templates instantly without losing your data.",
    },
];

const colorMap = {
    mint: { bg: "bg-mint/10", text: "text-mint" },
    primary: { bg: "bg-primary/10", text: "text-primary" },
    coral: { bg: "bg-coral/10", text: "text-coral" },
};

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-text-main mb-4">
                        Powerful AI Features
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        Our toolkit is designed to bridge the gap between your experience and what recruiters are looking for.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feat) => {
                        const colors = colorMap[feat.color];
                        return (
                            <div
                                key={feat.title}
                                className="bg-white p-8 rounded-lg shadow-xl shadow-primary/5 border border-border-ui group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
                                    <span className={`material-symbols-outlined ${colors.text} text-3xl`}>
                                        {feat.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-3">{feat.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{feat.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
