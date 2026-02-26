import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen w-full flex-col lg:flex-row bg-background-light">
            {/* ─── Left Panel: Resume Mockup & Testimonial ─── */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-surface-accent p-12">
                <div className="max-w-md w-full flex flex-col items-center gap-8">
                    {/* Resume Mockup */}
                    <div className="w-full aspect-[3/4] bg-white rounded-xl shadow-2xl p-8 flex flex-col gap-4 border border-slate-100 relative overflow-hidden">
                        <div className="w-1/3 h-4 bg-primary/20 rounded" />
                        <div className="w-full h-2 bg-slate-100 rounded" />
                        <div className="w-5/6 h-2 bg-slate-100 rounded" />

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <div className="w-full h-20 bg-primary/5 rounded" />
                                <div className="w-full h-2 bg-slate-100 rounded" />
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-20 bg-primary/5 rounded" />
                                <div className="w-full h-2 bg-slate-100 rounded" />
                            </div>
                        </div>

                        <div className="mt-auto flex items-center gap-3">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">person</span>
                            </div>
                            <div className="space-y-1">
                                <div className="w-24 h-2 bg-slate-200 rounded" />
                                <div className="w-16 h-2 bg-slate-100 rounded" />
                            </div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 size-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    </div>

                    {/* Testimonial */}
                    <div className="text-center space-y-4">
                        <p className="text-xl font-medium text-slate-700 italic">
                            "CareerForge Pro helped me land my dream job at a top tech firm in just 3 weeks!"
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-bold text-slate-900">— Sarah J.</span>
                            <span className="text-sm text-slate-500">Software Engineer</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Right Panel: Signup Form ─── */}
            <div className="flex-1 flex flex-col bg-white px-6 py-12 lg:px-24 justify-center">
                <div className="max-w-md w-full mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-12">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">work_history</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900">CareerForge Pro</h1>
                    </div>

                    {/* Heading */}
                    <div className="space-y-2 mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">Create your account</h2>
                        <p className="text-slate-500">Start your journey to a better career today.</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="signup-email">
                                Email address
                            </label>
                            <input
                                id="signup-email"
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="signup-password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="signup-password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 pr-12"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                                    onClick={() => setShowPassword((v) => !v)}
                                >
                                    <span className="material-symbols-outlined">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Create Account */}
                        <button
                            type="submit"
                            className="w-full py-3.5 px-4 bg-mint hover:bg-mint/90 text-white font-bold rounded-full transition-all shadow-lg shadow-mint/20 flex items-center justify-center cursor-pointer"
                        >
                            Create Free Account
                        </button>

                        {/* Divider */}
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">or</span>
                            </div>
                        </div>

                        {/* Google */}
                        <button
                            type="button"
                            className="w-full py-3.5 px-4 bg-transparent border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-3 cursor-pointer"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </form>

                    {/* Footer link */}
                    <div className="mt-10 text-center">
                        <p className="text-slate-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-violet-accent font-semibold hover:underline decoration-2 underline-offset-4">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-auto pt-8 text-center lg:text-left">
                    <p className="text-xs text-slate-400">
                        © 2024 CareerForge Pro. All rights reserved.
                        <a className="hover:text-slate-600 mx-2" href="#">Privacy Policy</a>
                        <a className="hover:text-slate-600" href="#">Terms of Service</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
