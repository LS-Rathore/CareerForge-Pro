import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-ui">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight">
                        CareerForge <span className="text-primary">Pro</span>
                    </span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#features">Features</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#pricing">Pricing</a>
                    <Link to="/dashboard/templates" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">Templates</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
                        Dashboard
                    </Link>
                    <Link to="/login" className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-main transition-colors">
                        Sign In
                    </Link>
                    <Link to="/login" className="px-6 py-2.5 bg-mint hover:bg-mint/90 text-white text-sm font-bold rounded-full shadow-sm transition-all">
                        Get Started Free
                    </Link>
                </div>
            </div>
        </nav>
    );
}
