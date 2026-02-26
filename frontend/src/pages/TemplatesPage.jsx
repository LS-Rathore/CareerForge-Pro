import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

const templates = [
    { id: 1, name: 'Professional Classic', category: 'Professional', color: 'from-violet-accent to-violet-accent/70', icon: 'business_center', desc: 'Clean and traditional layout ideal for corporate roles' },
    { id: 2, name: 'Modern Minimal', category: 'Modern', color: 'from-mint-accent to-mint-accent/70', icon: 'auto_awesome', desc: 'Sleek, minimal design with bold typography' },
    { id: 3, name: 'Creative Portfolio', category: 'Creative', color: 'from-primary to-primary/70', icon: 'palette', desc: 'Stand out with a unique, visually-driven layout' },
    { id: 4, name: 'Tech Engineer', category: 'Tech', color: 'from-blue-500 to-blue-500/70', icon: 'code', desc: 'Optimized for engineering and developer roles' },
    { id: 5, name: 'Executive Suite', category: 'Professional', color: 'from-slate-700 to-slate-700/70', icon: 'workspace_premium', desc: 'Premium layout for senior leadership positions' },
    { id: 6, name: 'Fresh Graduate', category: 'Entry-level', color: 'from-emerald-500 to-emerald-500/70', icon: 'school', desc: 'Perfect for recent graduates and internships' },
    { id: 7, name: 'Data Scientist', category: 'Tech', color: 'from-indigo-500 to-indigo-500/70', icon: 'insights', desc: 'Showcase analytical skills and technical expertise' },
    { id: 8, name: 'Marketing Pro', category: 'Creative', color: 'from-pink-500 to-pink-500/70', icon: 'campaign', desc: 'Dynamic layout for marketing professionals' },
    { id: 9, name: 'Healthcare', category: 'Professional', color: 'from-teal-500 to-teal-500/70', icon: 'health_and_safety', desc: 'Structured format for medical and healthcare roles' },
]

const categories = ['All', 'Professional', 'Modern', 'Creative', 'Tech', 'Entry-level']

export default function TemplatesPage() {
    const navigate = useNavigate()
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filtered = templates.filter((t) => {
        const matchCategory = activeCategory === 'All' || t.category === activeCategory
        const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCategory && matchSearch
    })

    const handleUseTemplate = () => {
        navigate('/builder')
    }

    return (
        <DashboardLayout>
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-[28px] font-bold text-text-main">Templates</h2>
                    <p className="text-text-secondary text-sm mt-1">
                        Choose from professionally designed resume templates
                    </p>
                </div>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-xl">search</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search templates..."
                        className="pl-10 pr-4 py-2.5 border border-border-ui rounded-full text-sm w-64 focus:ring-violet-accent/30 focus:border-violet-accent bg-white"
                    />
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${activeCategory === cat
                                ? 'bg-violet-accent text-white shadow-sm'
                                : 'bg-white border border-border-ui text-text-secondary hover:border-violet-accent/40 hover:text-violet-accent'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Templates Grid */}
            {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-20 h-20 bg-violet-accent/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-violet-accent text-4xl">search_off</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">No templates found</h3>
                    <p className="text-text-secondary text-sm mb-6">
                        Try a different search or category filter
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((template) => (
                        <div
                            key={template.id}
                            className="bg-white rounded-xl border border-border-ui overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] group hover:border-violet-accent/30 hover:shadow-lg transition-all"
                        >
                            {/* Template Preview */}
                            <div className={`h-48 bg-gradient-to-br ${template.color} relative flex items-center justify-center`}>
                                <span className="material-symbols-outlined text-white/30 text-7xl">{template.icon}</span>
                                {/* Mini resume skeleton */}
                                <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 flex flex-col gap-1.5 shadow-sm">
                                    <div className="h-2 w-2/5 bg-slate-300/60 rounded" />
                                    <div className="h-1 w-1/4 bg-slate-200/60 rounded" />
                                    <div className="mt-2 h-1 w-full bg-slate-200/40 rounded" />
                                    <div className="h-1 w-full bg-slate-200/40 rounded" />
                                    <div className="h-1 w-3/4 bg-slate-200/40 rounded" />
                                    <div className="mt-2 h-1.5 w-1/3 bg-slate-300/50 rounded" />
                                    <div className="h-1 w-full bg-slate-200/40 rounded" />
                                    <div className="h-1 w-4/5 bg-slate-200/40 rounded" />
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-text-main group-hover:text-violet-accent transition-colors">
                                        {template.name}
                                    </h3>
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-surface text-text-secondary uppercase">
                                        {template.category}
                                    </span>
                                </div>
                                <p className="text-text-secondary text-xs mb-4 leading-relaxed">{template.desc}</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleUseTemplate}
                                        className="flex-1 py-2.5 rounded-lg bg-violet-accent text-white text-xs font-bold hover:bg-violet-accent/90 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">add</span>
                                        Use Template
                                    </button>
                                    <button className="py-2.5 px-4 rounded-lg border border-border-ui text-text-secondary text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DashboardLayout>
    )
}
