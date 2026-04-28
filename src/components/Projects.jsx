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
            title: 'Metaverse Campus',
            subtitle: 'Cloud-Ready Immersive Learning Space',
            description: 'A premium metaverse concept for virtual campus walkthroughs, student collaboration, and immersive showcases powered by scalable cloud-hosted assets and interactive front-end experiences.',
            tech: ['React', 'Three.js', 'WebGL', 'Cloud Storage'],
            github: 'https://github.com/om-mjari/metaverse',
            gradient: 'from-sky-400 to-indigo-400',
        },
        {
            title: 'Auto Deployment System',
            subtitle: 'Cloud CI/CD Workflow Engine',
            description: 'Automates build, test, containerization, and deployment on every push with rollback-friendly releases, monitoring hooks, and environment-aware pipeline stages.',
            tech: ['JavaScript', 'Docker', 'CI/CD', 'Terraform'],
            github: 'https://github.com/OM-MJARI',
            gradient: 'from-emerald-400 to-cyan-400',
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
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-purple mx-auto mb-4"></div>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Real-world applications built with modern technologies, cloud workflows, and polished UI patterns.
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
                            <div className="card h-full flex flex-col relative overflow-hidden border border-white/80">
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                                {/* Glow Effect on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none`}></div>

                                <div className="p-6 flex-1 flex flex-col relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neon-purple font-semibold mb-4">{project.subtitle}</p>

                                    <p className="text-slate-600 mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-50 text-primary-700 text-sm rounded-full border border-slate-200 group-hover:border-primary-300 transition-colors"
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
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-primary-600 hover:text-white text-white rounded-full transition-all duration-300 font-semibold cursor-pointer shadow-sm"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                                className="flex items-center justify-center px-4 py-3 border border-primary-300 text-primary-700 hover:bg-primary-50 rounded-full transition-all duration-300 cursor-pointer"
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
