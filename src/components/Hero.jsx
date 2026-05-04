import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const cloudLayers = [
        { left: '6%', top: '18%', size: 'w-28 h-14', delay: 0 },
        { left: '72%', top: '14%', size: 'w-36 h-16', delay: 0.5 },
        { left: '18%', top: '74%', size: 'w-24 h-12', delay: 1 },
        { left: '80%', top: '68%', size: 'w-32 h-14', delay: 1.5 },
    ];

    const campusHighlights = [
        'Cloud learner',
        'Campus energy',
        'Premium UI builder',
        'JavaScript-first experiences',
    ];

    const architectureNodes = [
        { title: 'Campus UI', tone: 'from-primary-400 to-sky-300' },
        { title: 'Cloud APIs', tone: 'from-neon-purple to-primary-300' },
        { title: 'CI/CD', tone: 'from-cyan-300 to-neon-purple' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid pt-20">
            {/* Soft cloud layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {cloudLayers.map((cloud, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${cloud.size} rounded-full bg-white/70 shadow-[0_18px_60px_-30px_rgba(91,157,255,0.65)] blur-[1px]`}
                        style={{
                            left: cloud.left,
                            top: cloud.top,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 12, 0],
                            opacity: [0.45, 0.85, 0.45],
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            delay: cloud.delay,
                        }}
                    />
                ))}

                {[...Array(14)].map((_, i) => (
                    <motion.div
                        key={`orb-${i}`}
                        className="absolute w-3 h-3 rounded-full bg-primary-300/50"
                        style={{
                            left: `${8 + i * 6}%`,
                            top: `${18 + (i % 4) * 14}%`,
                        }}
                        animate={{
                            y: [0, -18, 0],
                            opacity: [0.18, 0.6, 0.18],
                        }}
                        transition={{
                            duration: 4 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-8xl font-display font-black mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-slate-900">OM</span>{' '}
                            <span className="glow-text">JARIWALA</span>
                        </motion.h1>

                        <motion.p
                            className="text-2xl md:text-3xl text-slate-700 mb-4 font-semibold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Buil scalable,{' '}
                            <span className="text-gradient">cloud-ready</span> software with a campus-first mindset.
                        </motion.p>

                        <motion.p
                            className="text-lg text-slate-600 mb-8 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Motivated Computer Science student and full-stack developer focused on cloud computing,
                            clean interfaces, and building polished digital experiences that feel premium.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            {campusHighlights.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-white/80 text-slate-700 border border-white/90 shadow-sm text-sm font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a href="#projects" className="btn-primary">
                                View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center gap-2"
                            >
                                <FaDownload />
                                Resume
                            </a>
                        </motion.div>

                        {/* Quick Contact Icons */}
                        <motion.div
                            className="flex gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <a
                                href="https://github.com/OM-MJARI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-slate-500 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/om-jariwala-89a0b0246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-slate-500 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com"
                                className="text-3xl text-slate-500 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                            >
                                <FaEnvelope />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        className="relative flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative animate-float w-full max-w-[520px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-white to-neon-purple/30 rounded-[2rem] blur-3xl opacity-40 animate-glow"></div>

                            <div className="relative rounded-[2rem] border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(55,92,140,0.4)] p-5 md:p-6">
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-300 via-white to-neon-purple blur-2xl opacity-60 scale-110"></div>
                                        <div className="relative w-[290px] h-[290px] md:w-[340px] md:h-[340px] rounded-full p-2 bg-gradient-to-br from-primary-300 via-white to-neon-purple shadow-[0_25px_70px_-30px_rgba(55,92,140,0.45)]">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border border-white/80">
                                                <img
                                                    src="/Omu.jpg"
                                                    alt="Om Jariwala professional portrait"
                                                    className="w-full h-full object-cover"
                                                    style={{ objectPosition: 'center 50%' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center bg-white/70">
                    <motion.div
                        className="w-2 h-2 bg-primary-500 rounded-full mt-2"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
