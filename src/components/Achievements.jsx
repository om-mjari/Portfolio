import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaCertificate, FaCode } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            icon: FaTrophy,
            title: 'First Runner Up',
            description: 'Shri Shambhbhai V. Patel College Competition',
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500/10',
        },
        {
            icon: FaTrophy,
            title: 'Hackathon Finalist',
            description: 'Inter-University Hackathon (CHARUSAT)',
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/10',
        },
        {
            icon: FaCode,
            title: '50+ DSA Problems',
            description: 'Solved on LeetCode',
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
        },
        {
            icon: FaStar,
            title: '3⭐ HackerRank',
            description: 'Problem Solving Badge',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
        },
    ];

    const certifications = [
        {
            title: 'Full Stack Development',
            issuer: 'Golden Gate University',
            icon: '🎓',
        },
        {
            title: 'Google Cloud Digital Basics',
            issuer: 'Google Cloud',
            icon: '☁️',
        },
        {
            title: 'SQL Certification',
            issuer: 'HackerRank',
            icon: '🗄️',
        },
        {
            title: 'Python Certification',
            issuer: 'HackerRank',
            icon: '🐍',
        },
    ];

    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Achievements & Certifications</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
                </motion.div>

                {/* Achievements Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        <span className="text-gradient">Achievements</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="card text-center p-6"
                            >
                                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <achievement.icon className={`text-3xl ${achievement.color}`} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                                <p className="text-gray-400 text-sm">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        <span className="text-gradient">Certifications</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card p-6 border-l-4 border-neon-purple"
                            >
                                <div className="text-4xl mb-3">{cert.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                                <p className="text-neon-cyan text-sm">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
