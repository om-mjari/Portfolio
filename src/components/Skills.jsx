import { motion } from 'framer-motion';
import {
    SiCplusplus, SiPython, SiJavascript,
    SiReact, SiNodedotjs, SiFirebase, SiGit, SiAndroidstudio,
    SiKubernetes, SiTerraform, SiDocker
} from 'react-icons/si';
import { FaJava, FaCode, FaNetworkWired, FaServer } from 'react-icons/fa';
import { MdDevicesOther } from 'react-icons/md';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
                { name: 'Java', icon: FaJava, color: 'text-red-500' },
                { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
                { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
            ],
        },
        {
            title: 'Frameworks & Tools',
            icon: '🛠️',
            skills: [
                { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
                { name: 'Next.js', icon: SiReact, color: 'text-white' },
                { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
                { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500' },
                { name: 'Git', icon: SiGit, color: 'text-orange-600' },
            ],
        },
        {
            title: 'Software',
            icon: '🖥️',
            skills: [
                { name: 'VS Code', icon: FaCode, color: 'text-blue-400' },
                { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-green-400' },
            ],
        },
        {
            title: 'Cloud Computing',
            icon: '☁️',
            skills: [
                { name: 'Networking', icon: FaNetworkWired, color: 'text-purple-400' },
                { name: 'Operating System', icon: FaServer, color: 'text-gray-400' },
                { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-400' },
                { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500' },
                { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
                { name: 'CI/CD Pipeline', icon: MdDevicesOther, color: 'text-green-400' },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-white/60 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-purple mx-auto mb-4"></div>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Proficient in modern technologies, cloud tooling, and development workflows.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                        >
                            <div className="card h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="text-4xl">{category.icon}</div>
                                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                                            whileHover={{ x: 10, scale: 1.05 }}
                                            className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all duration-300 group cursor-pointer"
                                        >
                                            <skill.icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform`} />
                                            <span className="text-lg text-slate-600 group-hover:text-slate-900 font-medium">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 mb-4">Also familiar with:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['PHP', 'MySQL', 'MongoDB', 'Express.js', 'REST APIs', 'Responsive Design', 'OOP', 'Data Structures'].map((skill, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-white text-primary-700 rounded-full border border-slate-200 hover:border-primary-300 shadow-sm transition-all cursor-pointer"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
