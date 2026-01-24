import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'specZone',
            subtitle: 'Spectacles E-commerce Platform',
            description: 'Full-featured e-commerce platform with admin dashboard, advanced filtering, and responsive UI. Includes inventory management, order processing, and customer analytics.',
            tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
            github: 'https://github.com/om-mjari/php_project',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'ShuttleScore',
            subtitle: 'Badminton Tournament App',
            description: 'Android application for managing badminton tournaments with real-time score updates, OTP-based authentication, and live leaderboards. Firebase integration for instant data sync.',
            tech: ['Android', 'Firebase', 'Java', 'Firebase Auth'],
            github: 'https://github.com/om-mjari/Andriod-ShuttleScore',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'iVidyarthi',
            subtitle: 'Educational Management System',
            description: 'Comprehensive role-based system for educational institutions with separate dashboards for Admin, Student, Lecturer, and Registrar. Automates academic workflows and streamlines communication.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/om-mjari/iVidhyarthi',
            gradient: 'from-green-500 to-teal-500',
        },
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real-world applications built with modern technologies and best practices
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="card h-full flex flex-col relative overflow-hidden">
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                                {/* Glow Effect on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>

                                <div className="p-6 flex-1 flex flex-col relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neon-purple font-semibold mb-4">{project.subtitle}</p>

                                    <p className="text-gray-300 mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-800 text-neon-cyan text-sm rounded-full border border-gray-700 group-hover:border-neon-cyan transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-neon-cyan hover:text-black text-white rounded-lg transition-all duration-300 font-semibold cursor-pointer"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black rounded-lg transition-all duration-300 cursor-pointer"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
