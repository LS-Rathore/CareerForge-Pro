import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'

const initialLetters = []

let nextId = 100

export default function CoverLettersPage() {
    const [letters, setLetters] = useState(initialLetters)
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newCompany, setNewCompany] = useState('')

    const handleCreate = () => {
        if (!newTitle.trim()) return
        setLetters((prev) => [
            ...prev,
            {
                id: nextId++,
                title: newTitle.trim(),
                company: newCompany.trim() || 'Unknown Company',
                editedAt: 'Just now',
                status: 'Draft',
            },
        ])
        setNewTitle('')
        setNewCompany('')
        setShowModal(false)
    }

    const handleDelete = (id) => {
        setLetters((prev) => prev.filter((l) => l.id !== id))
        setDeleteConfirm(null)
    }

    const handleDuplicate = (id) => {
        const original = letters.find((l) => l.id === id)
        if (original) {
            setLetters((prev) => [
                ...prev,
                { ...original, id: nextId++, title: `${original.title} (Copy)`, editedAt: 'Just now' },
            ])
        }
    }

    return (
        <DashboardLayout>
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-[28px] font-bold text-text-main">Cover Letters</h2>
                    <p className="text-text-secondary text-sm mt-1">
                        Create tailored cover letters for every application
                    </p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-mint-accent hover:bg-mint-accent/90 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-sm cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Cover Letter
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
                <StatCard label="Letters Created" value={letters.length} icon="mail" />
                <StatCard label="Completed" value={letters.filter((l) => l.status === 'Completed').length} icon="check_circle" />
                <StatCard label="Drafts" value={letters.filter((l) => l.status === 'Draft').length} icon="edit_note" />
            </div>

            {/* Letters Grid */}
            {letters.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-20 h-20 bg-violet-accent/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-violet-accent text-4xl">mail</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">No cover letters yet</h3>
                    <p className="text-text-secondary text-sm mb-6 max-w-sm">
                        Write a compelling cover letter that complements your resume
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-mint-accent hover:bg-mint-accent/90 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-sm">add</span>
                        Create Cover Letter
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {letters.map((letter) => (
                        <div key={letter.id} className="bg-white rounded-xl border border-border-ui p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group hover:border-violet-accent/30 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-violet-accent/10 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-violet-accent text-2xl">mail</span>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${letter.status === 'Completed'
                                    ? 'bg-mint-accent/15 text-mint-accent'
                                    : 'bg-amber-100 text-amber-600'
                                    }`}>
                                    {letter.status}
                                </span>
                            </div>
                            <h3 className="font-bold text-text-main mb-1 group-hover:text-violet-accent transition-colors">
                                {letter.title}
                            </h3>
                            <p className="text-text-secondary text-xs mb-4">{letter.company} • {letter.editedAt}</p>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 rounded-lg border border-border-ui text-text-main text-xs font-semibold hover:bg-violet-accent hover:text-white hover:border-violet-accent transition-colors cursor-pointer">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDuplicate(letter.id)}
                                    className="py-2 px-3 rounded-lg border border-border-ui text-text-secondary hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-sm">content_copy</span>
                                </button>
                                <button
                                    onClick={() => setDeleteConfirm(letter.id)}
                                    className="py-2 px-3 rounded-lg border border-border-ui text-text-secondary hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Create Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <div className="w-14 h-14 bg-violet-accent/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                            <span className="material-symbols-outlined text-violet-accent text-3xl">mail</span>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-6">New Cover Letter</h3>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="text-xs font-semibold text-text-secondary uppercase mb-1.5 block">
                                    Position Title
                                </label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="e.g. Frontend Developer"
                                    className="w-full px-4 py-2.5 border border-border-ui rounded-xl text-sm focus:ring-violet-accent/30 focus:border-violet-accent"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-text-secondary uppercase mb-1.5 block">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    value={newCompany}
                                    onChange={(e) => setNewCompany(e.target.value)}
                                    placeholder="e.g. Google"
                                    className="w-full px-4 py-2.5 border border-border-ui rounded-xl text-sm focus:ring-violet-accent/30 focus:border-violet-accent"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => { setShowModal(false); setNewTitle(''); setNewCompany('') }}
                                className="flex-1 py-2.5 rounded-xl border border-border-ui text-text-main font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreate}
                                className="flex-1 py-2.5 rounded-xl bg-violet-accent text-white font-semibold text-sm hover:bg-violet-accent/90 transition-colors cursor-pointer"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {deleteConfirm !== null && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 mx-auto">
                            <span className="material-symbols-outlined text-red-500 text-3xl">delete_forever</span>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-2">Delete Cover Letter?</h3>
                        <p className="text-text-secondary text-sm text-center mb-6">
                            This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 rounded-xl border border-border-ui text-text-main font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                                Cancel
                            </button>
                            <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}

function StatCard({ label, value, icon }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-border-ui shadow-[0_4px_20px_rgba(0,0,0,0.04)] group hover:border-violet-accent/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
                <p className="text-text-secondary text-sm font-medium">{label}</p>
                <div className="w-9 h-9 bg-violet-accent/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-violet-accent text-xl">{icon}</span>
                </div>
            </div>
            <p className="text-3xl font-bold text-violet-accent">{value}</p>
        </div>
    )
}
