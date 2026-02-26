import { Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

export default function DashboardPage() {
    return (
        <DashboardLayout>
            {/* Top Bar */}
            <div className="mb-8">
                <h2 className="text-[28px] font-bold text-text-main">Dashboard</h2>
                <p className="text-text-secondary text-sm mt-1">
                    Welcome back! Here's an overview of your career tools.
                </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <QuickAction
                    icon="description"
                    title="My Resumes"
                    description="View and manage all your resumes"
                    linkTo="/dashboard/resumes"
                    color="violet-accent"
                />
                <QuickAction
                    icon="mail"
                    title="Cover Letters"
                    description="Create tailored cover letters"
                    linkTo="/dashboard/cover-letters"
                    color="mint-accent"
                />
                <QuickAction
                    icon="grid_view"
                    title="Templates"
                    description="Browse professional templates"
                    linkTo="/dashboard/templates"
                    color="primary"
                />
            </div>

            {/* Get Started */}
            <div className="bg-white rounded-2xl border border-border-ui p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-violet-accent/10 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-violet-accent text-2xl">rocket_launch</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-text-main text-lg">Get Started</h3>
                        <p className="text-text-secondary text-sm">Follow these steps to land your dream job</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StepCard
                        step="1"
                        title="Pick a Template"
                        description="Browse our collection of ATS-optimized templates"
                        linkTo="/dashboard/templates"
                        linkText="Browse Templates"
                    />
                    <StepCard
                        step="2"
                        title="Build Your Resume"
                        description="Fill in your details and let AI enhance your content"
                        linkTo="/builder"
                        linkText="Start Building"
                    />
                    <StepCard
                        step="3"
                        title="Write a Cover Letter"
                        description="Create a compelling cover letter to stand out"
                        linkTo="/dashboard/cover-letters"
                        linkText="Create Letter"
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

function QuickAction({ icon, title, description, linkTo, color }) {
    return (
        <Link
            to={linkTo}
            className={`bg-white p-6 rounded-xl border border-border-ui shadow-[0_4px_20px_rgba(0,0,0,0.04)] group hover:border-${color}/30 transition-all hover:shadow-lg no-underline block`}
        >
            <div className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined text-${color} text-2xl`}>{icon}</span>
            </div>
            <h3 className={`font-bold text-text-main group-hover:text-${color} transition-colors mb-1`}>{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
            <div className={`flex items-center gap-1 mt-3 text-${color} text-xs font-semibold`}>
                <span>View</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
        </Link>
    )
}

function StepCard({ step, title, description, linkTo, linkText }) {
    return (
        <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-violet-accent text-white flex items-center justify-center text-sm font-bold mb-3">
                {step}
            </div>
            <h4 className="font-bold text-text-main mb-1">{title}</h4>
            <p className="text-text-secondary text-xs mb-3 leading-relaxed flex-1">{description}</p>
            <Link
                to={linkTo}
                className="text-violet-accent text-xs font-semibold no-underline hover:underline flex items-center gap-1"
            >
                {linkText}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
        </div>
    )
}
