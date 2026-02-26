const plans = [
    {
        name: "Free",
        price: "$0",
        period: "/ forever",
        highlighted: false,
        cta: "Get Started",
        items: [
            { text: "1 AI-Powered Resume", included: true },
            { text: "Basic Templates", included: true },
            { text: "No ATS Score Analysis", included: false },
            { text: "No AI Rewrite Engine", included: false },
        ],
    },
    {
        name: "Pro",
        price: "$12",
        period: "/ month",
        highlighted: true,
        badge: "Most Popular",
        cta: "Go Pro Now",
        items: [
            { text: "Unlimited Resumes", included: true },
            { text: "All Premium Templates", included: true },
            { text: "Advanced ATS Analysis", included: true },
            { text: "Unlimited AI Rewrites", included: true },
            { text: "Priority Email Support", included: true },
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-background-light">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-text-main mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-text-secondary">Join thousands of successful professionals.</p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`p-10 rounded-lg flex flex-col h-full relative ${plan.highlighted
                                    ? "bg-white border-2 border-primary shadow-2xl shadow-primary/10"
                                    : "bg-surface border border-border-ui"
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase rounded-full">
                                    {plan.badge}
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-text-main mb-2">{plan.name}</h3>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">{plan.price}</span>
                                <span className="text-text-secondary"> {plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.items.map((item) => (
                                    <li key={item.text} className={`flex items-center gap-3 ${item.included ? "text-text-secondary" : "text-text-tertiary"}`}>
                                        <span className={`material-symbols-outlined text-xl ${item.included ? "text-mint" : ""}`}>
                                            {item.included ? "check_circle" : "cancel"}
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 font-bold rounded-xl transition-all cursor-pointer ${plan.highlighted
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                                        : "bg-white border border-border-ui text-text-main hover:bg-slate-50"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
