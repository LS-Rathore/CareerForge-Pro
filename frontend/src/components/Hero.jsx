import { Link } from 'react-router-dom'

const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjOBamOT8ZCOC3kUGXap71jl2L-MCD-w791Fzj5_e9G4YNYsbDRUxlIkfgb-8WrFuLTDfEbkQa-1UFZodF4udeLYjec2RF5DiY3fCqr-bfoo03LalCBVeBiDjizhwB5bbxYnz_jGmMK3Uf0h0ELvJ5NuPFTKqmEsqNFP5f44mr6EbkOg0ntLOZwzvYCDqFSR4hjQUzArvpJAaIV7Cfdc1_RnV1EkPNlHCPschJ3asNLSs4R9hr_MubyWWsh-j_nYlFTQT0kjjYRH4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAPJb5UIifWpDi6PmX3R66Re2mtkoou5GaHfxzKcOkVslq6It96WrNPYYTzbLRRHfEsvK1qHVynt8n4S-VvD9gt5G6KyLb7AlqFLzLf029oovkT8Chj-zYEMsx4Rw2nPCYk7b_i3lnuUXAezQLzM5iLVBG9XHxec4_f0uYOH7s1hWgcddhAJvINBAcjd3ALOvK5rLgiQxO2_OgubEKck76cIXoBSvqK9gsTvi_PYGOpc9Z6hblNqFInLun-MGVtcLDSzsjqs6QV7Oo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDzLLvJrsTShvemp7b5pE4pSQfU4SpUot17Ly-szLWj9Lb710cqQDNxMQk_UM28S46IpfW-qt0BHroaZfZa3lstF7hhdAAz8OgnLyu2v4skq6Yui6itFn0TLMds-dL7D9fA9W2uhOOLKF1ol-qQI6lpLaOqNhHO512MF1WpUKUHYXHKjGvrQEPwtTGNUZ8OKqLJlEtELOD_yIjFLDHJWo2j2VjMk66-i0g6umn0WwPfMeBctgms2bTXEtOB73zwIJifPyC6A16O0Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBMAEdm1DixOpAfzCRaJQ5Q8xJ0if2U9c4d-VNEgxE9P3fvmgr1O42yHcCusHpMcRmzMa3DiS_j4R7igIU4HgPevX6s0UQAalX1h39ST4FHaT2B6KwdXhMvW5ePGBQ7sZ3crK4nhCyPLsRT3wcH2X_mZZAmu_fWnFemplQXploNe4xatd6jldz9esTiQmHPwZwIpOaNLYuwNueELyoBei9qw-3fz7eByWHkEFGFjtK4HrszA00hh1FwkESoE9D8xefuNpNn2vxdF_E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNZqubcZNwOmBPZUtwaf5Rls7yH3Ryarz_ivpIkpiK059kFhFjFlIjDUTAnmKV58JKhr9GEmWYIcoV4bPn3Jb43LjzpOlGmbzo9Nx6UyflRd2aqdCMEnqwCxHQxwgJXf9juC1o7Kov-dh500n94C8JuRGABDcgcI4hHfXCXq9KIY1wv6ejEZCOrt6aWxJ1avMuxZjiJC4NssaImD-C-b01nELxSzIxIFJ1liu2i9RCm-EaVm8bfkTPFxUvxm80D5ll4ONmPssamE",
];

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
            {/* Ambient Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-mint/10 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-peach/15 blur-[120px] rounded-full translate-y-1/4 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 max-w-4xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-8 animate-fade-in-up">
                    <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        AI-Powered Resume Builder
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-[58px] leading-[1.1] font-extrabold text-text-main mb-8 tracking-tight animate-fade-in-up animation-delay-200">
                    Land your dream job with an <br />
                    <span className="hero-gradient-text">ATS-ready resume</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Unlock the power of AI to craft a professional, high-impact resume that passes through tracking systems and gets you noticed by recruiters.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
                    <Link to="/builder" className="w-full sm:w-auto px-8 py-4 bg-mint hover:bg-mint/90 text-white font-bold rounded-xl shadow-lg shadow-mint/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03] active:scale-[0.98] no-underline">
                        Build My Resume <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                    <Link to="/dashboard/templates" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border-ui hover:bg-surface text-text-secondary font-bold rounded-xl transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.98] no-underline text-center">
                        See Templates
                    </Link>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col items-center gap-4 animate-fade-in-up animation-delay-600">
                    <div className="flex -space-x-3">
                        {avatars.map((src, i) => (
                            <img
                                key={i}
                                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 object-cover"
                                alt={`User avatar ${i + 1}`}
                                src={src}
                            />
                        ))}
                    </div>
                    <p className="text-sm font-medium text-text-secondary">
                        Trusted by <span className="text-text-main font-bold">2M+ job seekers</span> worldwide
                    </p>
                </div>
            </div>
        </section>
    );
}
