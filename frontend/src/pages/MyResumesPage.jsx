import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

const initialResumes = []

let nextId = 100

export default function MyResumesPage() {
    const navigate = useNavigate()
    const [resumes, setResumes] = useState(initialResumes)
    const [deleteConfirm, setDeleteConfirm] = useState(null)

    // ─── Stats ───
    const totalResumes = resumes.length
    const avgAts = resumes.length
        ? Math.round(resumes.reduce((sum, r) => sum + r.atsScore, 0) / resumes.length)
        : 0
    const totalDownloads = resumes.length * 2

    // ─── Actions ───
    const handleNewResume = () => navigate('/builder')
    const handleEdit = () => navigate('/builder')

    const handleDuplicate = (id) => {
        const original = resumes.find((r) => r.id === id)
        if (original) {
            setResumes((prev) => [
                ...prev,
                {
                    ...original,
                    id: nextId++,
                    title: `${original.title} (Copy)`,
                    editedAt: 'Just now',
                },
            ])
        }
    }

    const handleDelete = (id) => {
        setResumes((prev) => prev.filter((r) => r.id !== id))
        setDeleteConfirm(null)
    }

    const getScoreColor = (score) => {
        if (score >= 80) return 'bg-mint-accent/15 text-mint-accent'
        if (score >= 60) return 'bg-amber-100 text-amber-600'
        return 'bg-red-100 text-red-500'
    }

    return (
        <DashboardLayout>
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-[28px] font-bold text-text-main">My Resumes</h2>
                    <p className="text-text-secondary text-sm mt-1">
                        Manage and optimize your professional resumes
                    </p>
                </div>
                <button
                    onClick={handleNewResume}
                    className="bg-mint-accent hover:bg-mint-accent/90 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-sm cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Resume
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-10">
                <StatCard label="Resumes Created" value={totalResumes} icon="description" />
                <StatCard label="ATS Average Score" value={`${avgAts}%`} icon="analytics" />
                <StatCard label="Total Downloads" value={totalDownloads} icon="download" />
            </div>

            {/* Resumes Grid */}
            {resumes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-20 h-20 bg-violet-accent/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-violet-accent text-4xl">note_add</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">No resumes yet</h3>
                    <p className="text-text-secondary text-sm mb-6 max-w-sm">
                        Create your first AI-powered resume and start landing interviews
                    </p>
                    <button
                        onClick={handleNewResume}
                        className="bg-mint-accent hover:bg-mint-accent/90 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-sm">add</span>
                        Create Resume
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumes.map((resume) => (
                        <ResumeCard
                            key={resume.id}
                            resume={resume}
                            scoreColor={getScoreColor(resume.atsScore)}
                            onEdit={() => handleEdit(resume.id)}
                            onDownload={() => { }}
                            onDuplicate={() => handleDuplicate(resume.id)}
                            onDelete={() => setDeleteConfirm(resume.id)}
                        />
                    ))}
                </div>
            )}

            {/* Delete Modal */}
            {deleteConfirm !== null && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 mx-auto">
                            <span className="material-symbols-outlined text-red-500 text-3xl">delete_forever</span>
                        </div>
                        <h3 className="text-lg font-bold text-center mb-2">Delete Resume?</h3>
                        <p className="text-text-secondary text-sm text-center mb-6">
                            This action cannot be undone. The resume will be permanently removed.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                className="flex-1 py-2.5 rounded-xl border border-border-ui text-text-main font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDelete(deleteConfirm)}
                                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}

// ─── Stat Card ───
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

// ─── Resume Card ───
function ResumeCard({ resume, scoreColor, onEdit, onDownload, onDuplicate, onDelete }) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-surface rounded-xl border border-border-ui overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white shadow-sm border border-border-ui/50 rounded-sm p-4 flex flex-col gap-2">
                        <div className="h-2.5 w-2/5 bg-violet-accent/15 rounded" />
                        <div className="h-1 w-1/4 bg-primary/20 rounded mt-0.5" />
                        <div className="mt-3 h-1.5 w-full bg-slate-100 rounded" />
                        <div className="h-1.5 w-full bg-slate-100 rounded" />
                        <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
                        <div className="mt-3 h-2 w-1/3 bg-slate-200/80 rounded" />
                        <div className="h-1.5 w-full bg-slate-100 rounded" />
                        <div className="h-1.5 w-full bg-slate-100 rounded" />
                        <div className="h-1.5 w-4/5 bg-slate-100 rounded" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-text-main/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3">
                    <div className="flex gap-2">
                        <OverlayBtn icon="edit" onClick={onEdit} />
                        <OverlayBtn icon="download" onClick={onDownload} />
                    </div>
                    <div className="flex gap-2">
                        <OverlayBtn icon="content_copy" onClick={onDuplicate} />
                        <OverlayBtn icon="delete" onClick={onDelete} danger />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-text-main group-hover:text-violet-accent transition-colors">
                        {resume.title || 'Untitled Resume'}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${scoreColor}`}>{resume.atsScore}</span>
                </div>
                <p className="text-text-secondary text-xs">Edited {resume.editedAt}</p>
            </div>
        </div>
    )
}

function OverlayBtn({ icon, onClick, danger = false }) {
    return (
        <button
            onClick={(e) => { e.stopPropagation(); onClick?.() }}
            className={`w-10 h-10 rounded-full bg-white text-text-main flex items-center justify-center transition-colors cursor-pointer ${danger ? 'hover:bg-red-500 hover:text-white' : 'hover:bg-violet-accent hover:text-white'}`}
        >
            <span className="material-symbols-outlined text-xl">{icon}</span>
        </button>
    )
}
