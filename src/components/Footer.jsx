const productLinks = ["Resume Builder", "Templates", "Cover Letters"];
const companyLinks = ["About Us", "Careers", "Privacy"];

export default function Footer() {
    return (
        <footer className="bg-surface py-20 px-6 border-t border-border-ui">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                            </div>
                            <span className="text-lg font-extrabold">
                                CareerForge <span className="text-primary">Pro</span>
                            </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Empowering job seekers with artificial intelligence to craft professional futures.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-text-main mb-6">Product</h4>
                        <ul className="space-y-4">
                            {productLinks.map((link) => (
                                <li key={link}>
                                    <a className="text-text-secondary hover:text-primary transition-colors text-sm" href="#">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-text-main mb-6">Company</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <a className="text-text-secondary hover:text-primary transition-colors text-sm" href="#">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-text-main mb-6">Socials</h4>
                        <div className="flex gap-4">
                            {["public", "alternate_email", "share"].map((icon) => (
                                <a
                                    key={icon}
                                    className="w-10 h-10 rounded-full border border-border-ui flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border-ui flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-tertiary text-xs">© 2024 CareerForge Pro. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-text-tertiary hover:text-primary text-xs transition-colors" href="#">
                            Terms of Service
                        </a>
                        <a className="text-text-tertiary hover:text-primary text-xs transition-colors" href="#">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
