import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-purple mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="card p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-neon-purple rounded-full flex items-center justify-center shadow-lg shadow-primary-200/50">
                                    <FaUser className="text-3xl text-slate-900" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Who I Am</h3>
                                    <p className="text-primary-700">Full-Stack Developer</p>
                                </div>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                I'm a <span className="text-primary-700 font-semibold">motivated Computer Science student</span> with
                                strong foundations in <span className="text-neon-purple font-semibold">C, C++, Java, and Python</span>.
                                Proficient in object-oriented programming and data structures, I'm passionate about
                                building <span className="text-primary-700 font-semibold">efficient, real-world software solutions</span> that
                                solve meaningful problems.
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                With hands-on experience in <span className="text-neon-purple font-semibold">full-stack development</span>,
                                mobile app development, and cloud technologies, I bring ideas to life through clean, scalable code.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Stats & Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="card text-center p-6"
                        >
                            <FaCode className="text-5xl text-primary-600 mx-auto mb-4" />
                            <h4 className="text-3xl font-bold text-slate-900 mb-2">50+</h4>
                            <p className="text-slate-500">DSA Problems Solved</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="card text-center p-6"
                        >
                            <FaGraduationCap className="text-5xl text-neon-purple mx-auto mb-4" />
                            <h4 className="text-3xl font-bold text-slate-900 mb-2">8.37</h4>
                            <p className="text-slate-500">CGPA (B.Sc IT)</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="card text-center p-6"
                        >
                            <div className="text-5xl text-primary-600 mx-auto mb-4">🏆</div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-2">3⭐</h4>
                            <p className="text-slate-500">HackerRank Rating</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="card text-center p-6"
                        >
                            <FaHeart className="text-5xl text-neon-pink mx-auto mb-4" />
                            <h4 className="text-3xl font-bold text-slate-900 mb-2">5+</h4>
                            <p className="text-slate-500">Major Projects</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
