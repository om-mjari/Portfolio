import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/OM-MJARI', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/om-jariwala-89a0b0246/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-white border-t border-slate-200 py-12 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-display font-black mb-4">
                            <span className="text-slate-900">OM</span>{' '}
                            <span className="glow-text">JARIWALA</span>
                        </h3>
                        <p className="text-slate-500 mb-4">
                            Building scalable, real-world software solutions with passion and precision.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-xl" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-500 hover:text-primary-700 transition-colors duration-300 inline-block hover:translate-x-2 transform"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li>
                                <a href="https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com" className="hover:text-primary-700 transition-colors">
                                    22bmiit101@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+916353778808" className="hover:text-primary-700 transition-colors">
                                    +91 6353778808
                                </a>
                            </li>
                            <li>Surat, Gujarat, India</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-gray-800 pt-8 text-center"
                >
                    <p className="text-slate-500 flex items-center justify-center gap-2 flex-wrap">
                        <span>© {currentYear} Om Jariwala. All rights reserved.</span>
                        <span className="hidden md:inline">•</span>
                        <span className="flex items-center gap-1">
                            Built with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
                        </span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
