import { motion } from 'framer-motion';
import { FaRocket, FaGithub, FaCloud, FaTerminal } from 'react-icons/fa';
import { SiVercel, SiNetlify } from 'react-icons/si';

const Deploy = () => {
    const deployOptions = [
        {
            name: 'Vercel',
            icon: SiVercel,
            description: 'Deploy in seconds with automatic CI/CD',
            steps: [
                'Push your code to GitHub',
                'Import project in Vercel',
                'Deploy automatically',
            ],
            color: 'from-black to-gray-800',
            link: 'https://vercel.com',
        },
        {
            name: 'Netlify',
            icon: SiNetlify,
            description: 'Simple, fast, and reliable hosting',
            steps: [
                'Connect your GitHub repo',
                'Configure build settings',
                'Deploy with one click',
            ],
            color: 'from-teal-600 to-teal-800',
            link: 'https://netlify.com',
        },
        {
            name: 'GitHub Pages',
            icon: FaGithub,
            description: 'Free hosting directly from your repository',
            steps: [
                'Run: npm run build',
                'Push to gh-pages branch',
                'Enable GitHub Pages',
            ],
            color: 'from-purple-600 to-purple-800',
            link: 'https://pages.github.com',
        },
    ];

    return (
        <section id="deploy" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <FaRocket className="text-5xl text-neon-cyan animate-bounce" />
                        <h2 className="section-title">Deploy Your Portfolio</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get your portfolio live in minutes with these deployment options
                    </p>
                </motion.div>

                {/* Deployment Options */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {deployOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="card overflow-hidden"
                        >
                            <div className={`bg-gradient-to-br ${option.color} p-6 text-center`}>
                                <option.icon className="text-6xl text-white mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-white">{option.name}</h3>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-400 mb-6">{option.description}</p>

                                <div className="space-y-3 mb-6">
                                    {option.steps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-neon-cyan text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            <p className="text-gray-300 text-sm">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={option.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:scale-105 transition-transform"
                                >
                                    Deploy Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Build Commands */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="card p-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FaTerminal className="text-3xl text-neon-cyan" />
                        <h3 className="text-2xl font-bold text-white">Build Commands</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 mb-2">Install Dependencies:</p>
                            <code className="block bg-gray-900 text-neon-cyan p-4 rounded-lg border border-gray-700 font-mono">
                                npm install
                            </code>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-2">Development Server:</p>
                            <code className="block bg-gray-900 text-neon-cyan p-4 rounded-lg border border-gray-700 font-mono">
                                npm run dev
                            </code>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-2">Production Build:</p>
                            <code className="block bg-gray-900 text-neon-cyan p-4 rounded-lg border border-gray-700 font-mono">
                                npm run build
                            </code>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Deploy;
