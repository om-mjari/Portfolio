import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            degree: 'M.Sc IT (Pursuing)',
            institution: 'University',
            period: 'Aug 2025 - Apr 2026',
            status: 'In Progress',
            icon: '🎓',
        },
        {
            degree: 'B.Sc IT',
            institution: 'University',
            period: 'Aug 2022 - Apr 2025',
            grade: 'CGPA: 8.37',
            icon: '🎓',
        },
    ];

    return (
        <section id="education" className="py-20 bg-black/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Education Timeline</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink hidden md:block"></div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-5/12">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="card p-6 relative"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-4xl">{edu.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                            <p className="text-neon-cyan">{edu.institution}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                                        <FaCalendar className="text-neon-purple" />
                                        <span>{edu.period}</span>
                                    </div>

                                    {edu.grade && (
                                        <div className="text-lg font-semibold text-neon-cyan">
                                            {edu.grade}
                                        </div>
                                    )}

                                    {edu.status && (
                                        <div className="inline-block px-4 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-semibold mt-2">
                                            {edu.status}
                                        </div>
                                    )}
                                </motion.div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="hidden md:flex w-2/12 justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                    className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full border-4 border-black shadow-lg shadow-neon-cyan/50"
                                ></motion.div>
                            </div>

                            {/* Spacer */}
                            <div className="w-full md:w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
