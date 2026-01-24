import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: '22bmiit101@gmail.com',
            link: 'https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com',
            color: 'text-red-500',
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 6353778808',
            link: 'tel:+916353778808',
            color: 'text-green-500',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Surat, Gujarat',
            link: null,
            color: 'text-blue-500',
        },
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            username: 'OM-MJARI',
            link: 'https://github.com/OM-MJARI',
            color: 'hover:text-gray-400',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            username: 'Om Jariwala',
            link: 'https://www.linkedin.com/in/om-jariwala-89a0b0246/',
            color: 'hover:text-blue-500',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-black/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Let's connect! I'm always open to discussing new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {info.link ? (
                                    <a href={info.link} className="block">
                                        <div className="card text-center p-6 h-full hover:border-neon-cyan cursor-pointer">
                                            <info.icon className={`text-4xl ${info.color} mx-auto mb-4`} />
                                            <h4 className="text-lg font-bold text-white mb-2">{info.label}</h4>
                                            <p className="text-gray-400 text-sm break-all">{info.value}</p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="card text-center p-6 h-full">
                                        <info.icon className={`text-4xl ${info.color} mx-auto mb-4`} />
                                        <h4 className="text-lg font-bold text-white mb-2">{info.label}</h4>
                                        <p className="text-gray-400 text-sm">{info.value}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="card p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            Connect on Social Media
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center gap-4 px-6 py-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-neon-cyan transition-all duration-300 ${social.color} group`}
                                >
                                    <social.icon className="text-3xl text-neon-cyan group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-sm text-gray-400">{social.label}</p>
                                        <p className="text-white font-semibold">{social.username}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=22bmiit101@gmail.com"
                            className="inline-flex items-center gap-3 btn-primary text-lg"
                        >
                            <FaPaperPlane /> Send Me an Email
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
