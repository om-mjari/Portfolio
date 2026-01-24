import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
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
                            <span className="text-white">OM</span>{' '}
                            <span className="glow-text">JARIWALA</span>
                        </motion.h1>

                        <motion.p
                            className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Building Scalable,{' '}
                            <span className="text-gradient">Real-World</span> Software Solutions
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-400 mb-8 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Motivated Computer Science Student | Full-Stack Developer |
                            Passionate about creating efficient, innovative software that makes a difference
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a href="#projects" className="btn-primary">
                                View Projects
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
                                className="text-3xl text-gray-400 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/om-jariwala-89a0b0246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com"
                                className="text-3xl text-gray-400 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                            >
                                <FaEnvelope />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative animate-float">
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-3xl blur-3xl opacity-30 animate-glow"></div>
                            <img
                                src="/hero-workspace.png"
                                alt="Developer Workspace"
                                className="relative rounded-3xl border-2 border-neon-cyan/30 shadow-2xl"
                            />
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
                <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
                    <motion.div
                        className="w-2 h-2 bg-neon-cyan rounded-full mt-2"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
