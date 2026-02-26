import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex bg-background-light">
            {/* ─── Left Panel: Testimonial ─── */}
            <div className="hidden lg:flex lg:w-1/2 bg-surface-accent items-center justify-center p-12">
                <div className="max-w-lg w-full">
                    <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-200">
                        {/* Resume Mockup */}
                        <div className="w-full aspect-[3/4] bg-slate-50 rounded-lg mb-8 border border-slate-100 p-6 flex flex-col gap-4 overflow-hidden relative">
                            {/* Header row */}
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-full bg-primary/20" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-3 w-1/2 bg-slate-200 rounded-full" />
                                    <div className="h-2 w-1/3 bg-slate-100 rounded-full" />
                                </div>
                            </div>

                            {/* Text lines */}
                            <div className="space-y-3 mt-4">
                                <div className="h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-2 w-4/5 bg-slate-100 rounded-full" />
                            </div>

                            {/* ATS badge area */}
                            <div className="mt-6 p-4 rounded-lg bg-mint/10 border border-mint/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-mint text-sm">check_circle</span>
                                    <div className="h-2 w-24 bg-mint/30 rounded-full" />
                                </div>
                                <div className="h-2 w-full bg-mint/20 rounded-full" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                ATS Optimized
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="space-y-4">
                            <div className="flex gap-1 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>
                                ))}
                            </div>
                            <p className="text-xl font-bold leading-tight text-slate-900 italic">
                                "The ATS analyzer is a game changer. My response rate tripled overnight."
                            </p>
                            <p className="text-slate-500 font-medium">— Michael R.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Right Panel: Login Form ─── */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-12">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-main">CareerForge Pro</span>
                    </div>

                    {/* Heading */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
                        <p className="text-slate-500">Access your professional dashboard and resume tools</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                                    Password
                                </label>
                                <a className="text-xs text-primary hover:underline font-medium cursor-pointer" href="#">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none pr-12"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                                    onClick={() => setShowPassword((v) => !v)}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Sign In */}
                        <button
                            type="submit"
                            className="w-full bg-mint hover:bg-mint/90 text-slate-900 font-bold py-4 rounded-full transition-colors shadow-lg shadow-mint/10 cursor-pointer"
                        >
                            Sign In
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center py-4">
                            <div className="flex-grow border-t border-slate-200" />
                            <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">or</span>
                            <div className="flex-grow border-t border-slate-200" />
                        </div>

                        {/* Google Sign In */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-700 font-semibold cursor-pointer"
                        >
                            <svg className="size-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-10 text-center text-slate-500">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-violet-accent hover:text-violet-accent/80 font-bold transition-colors">
                            Create Free Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
