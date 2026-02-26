import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// ─── Default resume data ───
const defaultResumeData = {
    title: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
    experiences: [],
    education: [],
    skills: [],
}

let nextExpId = 100
let nextEduId = 100

export default function ResumeBuilderPage() {
    const navigate = useNavigate()
    const [data, setData] = useState(defaultResumeData)
    const [activeMode, setActiveMode] = useState('edit')
    const [jdPanelOpen, setJdPanelOpen] = useState(true)
    const [jobDescription, setJobDescription] = useState('')
    const [newSkill, setNewSkill] = useState('')
    const [showSkillInput, setShowSkillInput] = useState(false)

    // ─── Generic field updater ───
    const updateField = useCallback((field, value) => {
        setData((prev) => ({ ...prev, [field]: value }))
    }, [])

    // ─── Experience helpers ───
    const updateExperience = useCallback((id, field, value) => {
        setData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
        }))
    }, [])

    const updateBullet = useCallback((expId, bulletIdx, value) => {
        setData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) =>
                exp.id === expId
                    ? { ...exp, bullets: exp.bullets.map((b, i) => (i === bulletIdx ? value : b)) }
                    : exp
            ),
        }))
    }, [])

    const addBullet = useCallback((expId) => {
        setData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) =>
                exp.id === expId ? { ...exp, bullets: [...exp.bullets, ''] } : exp
            ),
        }))
    }, [])

    const removeBullet = useCallback((expId, bulletIdx) => {
        setData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) =>
                exp.id === expId ? { ...exp, bullets: exp.bullets.filter((_, i) => i !== bulletIdx) } : exp
            ),
        }))
    }, [])

    const addExperience = useCallback(() => {
        setData((prev) => ({
            ...prev,
            experiences: [
                ...prev.experiences,
                {
                    id: nextExpId++,
                    jobTitle: '',
                    company: '',
                    location: '',
                    dateRange: '',
                    bullets: [''],
                },
            ],
        }))
    }, [])

    const removeExperience = useCallback((id) => {
        setData((prev) => ({
            ...prev,
            experiences: prev.experiences.filter((exp) => exp.id !== id),
        }))
    }, [])

    // ─── Education helpers ───
    const updateEducation = useCallback((id, field, value) => {
        setData((prev) => ({
            ...prev,
            education: prev.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
        }))
    }, [])

    const addEducation = useCallback(() => {
        setData((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                { id: nextEduId++, school: '', degree: '', dateRange: '' },
            ],
        }))
    }, [])

    const removeEducation = useCallback((id) => {
        setData((prev) => ({
            ...prev,
            education: prev.education.filter((edu) => edu.id !== id),
        }))
    }, [])

    // ─── Skills helpers ───
    const addSkill = useCallback(() => {
        if (newSkill.trim()) {
            setData((prev) => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }))
            setNewSkill('')
            setShowSkillInput(false)
        }
    }, [newSkill])

    const removeSkill = useCallback((idx) => {
        setData((prev) => ({ ...prev, skills: prev.skills.filter((_, i) => i !== idx) }))
    }, [])

    // ─── PDF Download ───
    const handleDownloadPDF = () => {
        window.print()
    }

    const isPreview = activeMode === 'preview'

    return (
        <div className="font-display text-slate-900 overflow-hidden h-screen flex flex-col bg-[#f8f6f6]">
            {/* ═══════ HEADER ═══════ */}
            <header className="h-14 min-h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-slate-600">arrow_back</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => updateField('title', e.target.value)}
                            className="bg-transparent border-none font-bold text-lg focus:ring-0 focus:outline-none p-0 w-auto min-w-[200px]"
                        />
                        <span className="material-symbols-outlined text-slate-400 text-sm">edit</span>
                    </div>
                </div>

                {/* Mode Tabs */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                    {['edit', 'optimize', 'preview'].map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setActiveMode(mode)}
                            className={`px-6 py-1.5 text-sm font-semibold rounded-lg capitalize transition-all cursor-pointer ${activeMode === mode
                                ? 'bg-violet-accent text-white shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-peach-accent/10 text-peach-accent px-3 py-1.5 rounded-full border border-peach-accent/20">
                        <span className="material-symbols-outlined text-sm font-bold">analytics</span>
                        <span className="text-xs font-bold">74% ATS Score</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-accent to-mint-accent text-white rounded-xl text-sm font-bold magic-glow transition-transform hover:scale-105 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                        <span>✦ Magic Optimize</span>
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        className="px-4 py-2 bg-mint-accent text-white rounded-xl text-sm font-bold hover:bg-mint-accent/90 transition-colors cursor-pointer"
                    >
                        Download PDF
                    </button>
                </div>
            </header>

            {/* ═══════ MAIN ═══════ */}
            <main className="flex-1 flex overflow-hidden">
                {/* ─── LEFT SIDEBAR ─── */}
                {!isPreview && (
                    <aside className="w-[440px] min-w-[440px] bg-builder-sidebar border-r border-slate-200 flex flex-col overflow-y-auto builder-scrollbar p-6 space-y-4">
                        {/* Contact Info */}
                        <SectionPanel icon="person" title="Contact Info">
                            <div className="p-4 pt-0 space-y-3">
                                <InputField
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={(v) => updateField('name', v)}
                                />
                                <InputField
                                    placeholder="Email"
                                    type="email"
                                    value={data.email}
                                    onChange={(v) => updateField('email', v)}
                                />
                                <InputField
                                    placeholder="Phone"
                                    value={data.phone}
                                    onChange={(v) => updateField('phone', v)}
                                />
                                <InputField
                                    placeholder="Location"
                                    value={data.location}
                                    onChange={(v) => updateField('location', v)}
                                />
                                <InputField
                                    placeholder="LinkedIn"
                                    value={data.linkedin}
                                    onChange={(v) => updateField('linkedin', v)}
                                />
                            </div>
                        </SectionPanel>

                        {/* Summary */}
                        <SectionPanel icon="description" title="Summary">
                            <div className="p-4 pt-0">
                                <textarea
                                    rows={4}
                                    value={data.summary}
                                    onChange={(e) => updateField('summary', e.target.value)}
                                    className="w-full text-sm border-slate-200 rounded-lg leading-relaxed p-2 focus:ring-violet-accent/30 focus:border-violet-accent"
                                    placeholder="Write a professional summary..."
                                />
                            </div>
                        </SectionPanel>

                        {/* Work Experience */}
                        <SectionPanel icon="work" title="Work Experience" defaultOpen>
                            <div className="p-4 space-y-6">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <div className="w-full pr-4 space-y-1">
                                                <input
                                                    type="text"
                                                    value={exp.jobTitle}
                                                    onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                                                    placeholder="Job Title"
                                                    className="w-full text-sm font-bold border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                />
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={exp.company}
                                                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                                        placeholder="Company"
                                                        className="w-1/2 text-xs text-slate-500 border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={exp.location}
                                                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                                                        placeholder="Location"
                                                        className="w-1/2 text-xs text-slate-500 border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                    />
                                                </div>
                                                <input
                                                    type="text"
                                                    value={exp.dateRange}
                                                    onChange={(e) => updateExperience(exp.id, 'dateRange', e.target.value)}
                                                    placeholder="Date Range (e.g. 2019 – Present)"
                                                    className="w-full text-xs text-slate-400 border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeExperience(exp.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer mt-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                        {/* Bullet points */}
                                        {exp.bullets.map((bullet, bIdx) => (
                                            <div key={bIdx} className="relative">
                                                <textarea
                                                    rows={2}
                                                    value={bullet}
                                                    onChange={(e) => updateBullet(exp.id, bIdx, e.target.value)}
                                                    className="w-full text-sm border-slate-200 rounded-lg pr-20 leading-relaxed p-2 focus:ring-violet-accent/30 focus:border-violet-accent"
                                                    placeholder="Describe your achievement..."
                                                />
                                                <button
                                                    onClick={() => removeBullet(exp.id, bIdx)}
                                                    className="absolute top-2 right-2 text-slate-300 hover:text-red-400 transition-colors cursor-pointer"
                                                >
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addBullet(exp.id)}
                                            className="text-xs text-violet-accent font-semibold hover:underline cursor-pointer"
                                        >
                                            + Add bullet point
                                        </button>
                                        <div className="border-b border-slate-100 pt-2" />
                                    </div>
                                ))}
                                <button
                                    onClick={addExperience}
                                    className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    + Add Experience
                                </button>
                            </div>
                        </SectionPanel>

                        {/* Education */}
                        <SectionPanel icon="school" title="Education">
                            <div className="p-4 space-y-4">
                                {data.education.map((edu) => (
                                    <div key={edu.id} className="space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div className="w-full pr-4 space-y-1">
                                                <input
                                                    type="text"
                                                    value={edu.school}
                                                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                                    placeholder="School / University"
                                                    className="w-full text-sm font-bold border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                />
                                                <input
                                                    type="text"
                                                    value={edu.degree}
                                                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                                    placeholder="Degree"
                                                    className="w-full text-xs text-slate-500 border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                />
                                                <input
                                                    type="text"
                                                    value={edu.dateRange}
                                                    onChange={(e) => updateEducation(edu.id, 'dateRange', e.target.value)}
                                                    placeholder="Date Range"
                                                    className="w-full text-xs text-slate-400 border-none p-0 focus:ring-0 focus:outline-none bg-transparent"
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeEducation(edu.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer mt-1"
                                            >
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                        <div className="border-b border-slate-100" />
                                    </div>
                                ))}
                                <button
                                    onClick={addEducation}
                                    className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    + Add Education
                                </button>
                            </div>
                        </SectionPanel>

                        {/* Skills */}
                        <SectionPanel icon="psychology" title="Skills">
                            <div className="p-4 flex flex-wrap gap-2">
                                {data.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-1 bg-mint-accent/10 text-mint-accent px-3 py-1 rounded-full text-xs font-bold border border-mint-accent/20"
                                    >
                                        {skill}
                                        <button onClick={() => removeSkill(idx)} className="cursor-pointer hover:text-red-400 transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">close</span>
                                        </button>
                                    </div>
                                ))}
                                {showSkillInput ? (
                                    <div className="flex items-center gap-1">
                                        <input
                                            type="text"
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                                            className="text-xs border border-slate-300 rounded-full px-3 py-1 w-28 focus:ring-violet-accent/30 focus:border-violet-accent"
                                            placeholder="Type skill..."
                                            autoFocus
                                        />
                                        <button
                                            onClick={addSkill}
                                            className="text-mint-accent hover:text-mint-accent/80 cursor-pointer"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">check</span>
                                        </button>
                                        <button
                                            onClick={() => { setShowSkillInput(false); setNewSkill('') }}
                                            className="text-slate-400 hover:text-red-400 cursor-pointer"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">close</span>
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setShowSkillInput(true)}
                                        className="px-3 py-1 text-xs text-slate-400 font-bold border border-dashed border-slate-300 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                                    >
                                        + Add
                                    </button>
                                )}
                            </div>
                        </SectionPanel>
                    </aside>
                )}

                {/* ─── CENTER: RESUME PREVIEW ─── */}
                <section className="flex-1 dot-grid bg-slate-50 flex flex-col items-center overflow-y-auto builder-scrollbar pt-10 pb-40 relative">
                    {/* Template thumbnails */}
                    <div className="mb-10 w-full flex justify-center gap-4">
                        {[true, false, false, false].map((active, i) => (
                            <div
                                key={i}
                                className={`w-16 h-20 bg-white rounded shadow-sm cursor-pointer transition-transform hover:scale-105 ${active
                                    ? 'border-2 border-primary-orange shadow-md'
                                    : 'border border-slate-200 opacity-60'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* A4 Resume */}
                    <div
                        className="resume-preview-area w-[794px] bg-white shadow-2xl min-h-[1123px] origin-top p-16 text-slate-900 mb-[-360px]"
                        style={{ transform: 'scale(0.68)' }}
                    >
                        {/* Resume Header */}
                        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight uppercase">
                                    {data.name || 'Your Name'}
                                </h1>
                                <p className="text-primary-orange font-bold text-xl mt-1">
                                    {data.experiences[0]?.jobTitle || 'Your Title'}
                                </p>
                            </div>
                            <div className="text-right text-sm space-y-0.5">
                                {data.location && <p>{data.location}</p>}
                                {data.email && <p>{data.email}</p>}
                                {data.phone && <p>{data.phone}</p>}
                                {data.linkedin && <p>{data.linkedin}</p>}
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Summary */}
                            {data.summary && (
                                <section>
                                    <h2 className="text-lg font-bold border-b border-slate-200 pb-1 mb-4 uppercase tracking-widest">
                                        Summary
                                    </h2>
                                    <p className="text-sm text-slate-700 leading-relaxed">{data.summary}</p>
                                </section>
                            )}

                            {/* Experience */}
                            {data.experiences.length > 0 && (
                                <section>
                                    <h2 className="text-lg font-bold border-b border-slate-200 pb-1 mb-4 uppercase tracking-widest">
                                        Experience
                                    </h2>
                                    <div className="space-y-6">
                                        {data.experiences.map((exp) => (
                                            <div key={exp.id}>
                                                <div className="flex justify-between font-bold">
                                                    <span>{exp.company || 'Company'}</span>
                                                    <span>{exp.dateRange}</span>
                                                </div>
                                                <p className="italic mb-2">{exp.jobTitle || 'Job Title'}</p>
                                                {exp.bullets.filter((b) => b.trim()).length > 0 && (
                                                    <ul className="list-disc ml-4 space-y-1 text-sm text-slate-700">
                                                        {exp.bullets
                                                            .filter((b) => b.trim())
                                                            .map((b, i) => (
                                                                <li key={i}>{b}</li>
                                                            ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Education */}
                            {data.education.length > 0 && (
                                <section>
                                    <h2 className="text-lg font-bold border-b border-slate-200 pb-1 mb-4 uppercase tracking-widest">
                                        Education
                                    </h2>
                                    <div className="space-y-3">
                                        {data.education.map((edu) => (
                                            <div key={edu.id}>
                                                <div className="flex justify-between font-bold text-sm">
                                                    <span>{edu.school || 'School'}</span>
                                                    <span>{edu.dateRange}</span>
                                                </div>
                                                <p className="text-sm">{edu.degree || 'Degree'}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Skills */}
                            {data.skills.length > 0 && (
                                <section>
                                    <h2 className="text-lg font-bold border-b border-slate-200 pb-1 mb-4 uppercase tracking-widest">
                                        Skills
                                    </h2>
                                    <p className="text-sm text-slate-700">{data.skills.join(' • ')}</p>
                                </section>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* ═══════ BOTTOM PANEL: JD MATCH ═══════ */}
            {!isPreview && (
                <div
                    className={`fixed bottom-0 right-0 bg-white border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-40 transition-all flex flex-col ${jdPanelOpen ? 'h-[300px]' : 'h-12'
                        }`}
                    style={{ left: '440px' }}
                >
                    {/* Panel header */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary-orange">analytics</span>
                            <h3 className="font-bold text-sm uppercase tracking-wider">Job Description Match</h3>
                        </div>
                        <button
                            onClick={() => setJdPanelOpen(!jdPanelOpen)}
                            className="p-1 hover:bg-slate-100 rounded cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-slate-400">
                                {jdPanelOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                            </span>
                        </button>
                    </div>

                    {/* Panel content */}
                    {jdPanelOpen && (
                        <div className="flex-1 flex p-6 gap-8 overflow-hidden">
                            <div className="flex-1 flex flex-col">
                                <label className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                                    Target Job Description
                                </label>
                                <textarea
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    className="flex-1 resize-none bg-slate-50 border-slate-200 rounded-xl text-xs p-4 focus:ring-violet-accent/20 focus:border-violet-accent"
                                    placeholder="Paste job description here to analyze resume match..."
                                />
                            </div>
                            <div className="w-1/3 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Required Skills</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-coral-accent/10 text-coral-accent px-2 py-0.5 rounded text-[10px] font-bold border border-coral-accent/20">
                                                Design Systems
                                            </span>
                                            <span className="bg-coral-accent/10 text-coral-accent px-2 py-0.5 rounded text-[10px] font-bold border border-coral-accent/20">
                                                Prototyping
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Nice to Have</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-peach-accent/10 text-peach-accent px-2 py-0.5 rounded text-[10px] font-bold border border-peach-accent/20">
                                                Framer
                                            </span>
                                            <span className="bg-peach-accent/10 text-peach-accent px-2 py-0.5 rounded text-[10px] font-bold border border-peach-accent/20">
                                                Motion Design
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Role Keywords</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-violet-accent/10 text-violet-accent px-2 py-0.5 rounded text-[10px] font-bold border border-violet-accent/20">
                                                Leadership
                                            </span>
                                            <span className="bg-violet-accent/10 text-violet-accent px-2 py-0.5 rounded text-[10px] font-bold border border-violet-accent/20">
                                                Collaborative
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold">ATS Match Strength</span>
                                        <span className="text-xs font-bold text-peach-accent">74%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="bg-peach-accent h-full rounded-full"
                                            style={{ width: '74%', boxShadow: '0 0 8px rgba(251,146,60,0.4)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

// ─── Collapsible Section Panel ───
function SectionPanel({ icon, title, children, defaultOpen = false }) {
    return (
        <details
            className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
            open={defaultOpen || undefined}
        >
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 select-none">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">{icon}</span>
                    <span className="font-semibold text-sm">{title}</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                    expand_more
                </span>
            </summary>
            {children}
        </details>
    )
}

// ─── Reusable Input Field ───
function InputField({ placeholder, value, onChange, type = 'text' }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full text-sm border-slate-200 rounded-lg p-2 focus:ring-violet-accent/30 focus:border-violet-accent"
        />
    )
}
