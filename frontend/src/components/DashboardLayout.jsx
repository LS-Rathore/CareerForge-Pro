import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { icon: 'description', label: 'My Resumes', path: '/dashboard/resumes' },
    { icon: 'mail', label: 'Cover Letters', path: '/dashboard/cover-letters' },
    { icon: 'grid_view', label: 'Templates', path: '/dashboard/templates' },
]

const navSecondary = [
    { icon: 'person', label: 'Account', path: '/dashboard' },
    { icon: 'payments', label: 'Billing', path: '/dashboard' },
]

export default function DashboardLayout({ children }) {
    const location = useLocation()

    return (
        <div className="flex min-h-screen bg-white text-text-main font-display">
            {/* ═══════ SIDEBAR ═══════ */}
            <aside className="w-60 fixed h-full bg-white border-r border-border-ui flex flex-col justify-between py-6 z-10">
                <div>
                    {/* Logo */}
                    <Link to="/" className="px-6 mb-10 flex items-center gap-2 no-underline">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">rocket_launch</span>
                        </div>
                        <h1 className="font-bold text-lg tracking-tight text-text-main">CareerForge Pro</h1>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path
                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors no-underline ${isActive
                                            ? 'bg-violet-accent/10 border-l-3 border-violet-accent text-violet-accent font-semibold'
                                            : 'text-text-secondary hover:text-violet-accent font-medium'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            )
                        })}

                        <div className="my-3" />

                        {navSecondary.map((item) => {
                            const isActive = location.pathname === item.path && !navItems.some(n => n.path === item.path && location.pathname === n.path)
                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors no-underline ${isActive
                                            ? 'bg-violet-accent/10 border-l-3 border-violet-accent text-violet-accent font-semibold'
                                            : 'text-text-secondary hover:text-violet-accent font-medium'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* User Profile */}
                <div className="px-4">
                    <div className="p-3 bg-surface rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-violet-accent/20 flex items-center justify-center text-violet-accent font-bold text-sm">
                            AS
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-semibold truncate">Alex Smith</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-mint-accent/20 text-mint-accent uppercase">
                                Pro
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* ═══════ MAIN CONTENT ═══════ */}
            <main className="ml-60 flex-1 bg-background-light p-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}
