(full cinematic 3D background, glassmorphism, neon, pipelines, floating icons, raytracing, depth)
import { motion } from 'framer-motion';

// 3D cloud/DevOps cinematic background
const ThreeDBackground = () => {
	// Volumetric clouds
	const clouds = [
		{ className: 'left-[8%] top-[14%] h-64 w-64', color: 'from-[#5fb6ff]/60 to-[#7a86ff]/40', blur: 'blur-3xl', delay: 0 },
		{ className: 'right-[10%] top-[18%] h-80 w-80', color: 'from-[#7a86ff]/60 to-[#5fb6ff]/30', blur: 'blur-3xl', delay: 0.6 },
		{ className: 'left-[22%] bottom-[14%] h-56 w-56', color: 'from-[#5fb6ff]/50 to-[#7a86ff]/30', blur: 'blur-2xl', delay: 1.2 },
		{ className: 'right-[24%] bottom-[18%] h-44 w-44', color: 'from-[#7a86ff]/50 to-[#5fb6ff]/20', blur: 'blur-2xl', delay: 1.8 },
	];

	// Floating microservices, containers, k8s clusters
	const icons = [
		{ top: '18%', left: '14%', icon: '🛰️', size: 'text-2xl', glow: 'shadow-[0_0_24px_#5fb6ff99]' },
		{ top: '30%', left: '24%', icon: '🐳', size: 'text-2xl', glow: 'shadow-[0_0_24px_#5fb6ff99]' },
		{ top: '48%', left: '18%', icon: '☁️', size: 'text-2xl', glow: 'shadow-[0_0_24px_#7a86ff99]' },
		{ top: '62%', left: '80%', icon: '⚙️', size: 'text-2xl', glow: 'shadow-[0_0_24px_#7a86ff99]' },
		{ top: '74%', left: '68%', icon: '📦', size: 'text-2xl', glow: 'shadow-[0_0_24px_#5fb6ff99]' },
		{ top: '26%', left: '74%', icon: '☸️', size: 'text-2xl', glow: 'shadow-[0_0_24px_#7a86ff99]' },
	];

	// Data pipelines (neon lines)
	const pipelines = [
		// SVG paths for glowing lines
		{ d: 'M190 220C350 170 470 250 610 220C760 190 840 110 1010 150C1170 186 1210 320 1280 380', opacity: 0.7 },
		{ d: 'M160 620C320 540 420 700 580 650C730 604 860 500 1040 560C1170 600 1240 710 1320 760', opacity: 0.55 },
		{ d: 'M290 390C420 330 530 360 640 430C740 494 840 490 960 430C1080 370 1160 330 1260 390', opacity: 0.45 },
	];

	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Volumetric clouds */}
			{clouds.map((cloud, i) => (
				<motion.div
					key={i}
					className={`absolute ${cloud.className} rounded-full bg-gradient-to-br ${cloud.color} ${cloud.blur}`}
					animate={{
						y: [0, -18, 0],
						x: [0, 14, 0],
						scale: [1, 1.08, 1],
						opacity: [0.35, 0.72, 0.35],
					}}
					transition={{ duration: 10 + i * 2, repeat: Infinity, delay: cloud.delay }}
				/>
			))}

			{/* Neon grid overlay for depth */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(95,182,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(95,182,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

			{/* Floating microservices, containers, k8s clusters */}
			{icons.map((node, i) => (
				<motion.div
					key={i}
					className={`absolute ${node.size} ${node.glow}`}
					style={{ top: node.top, left: node.left }}
					animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
					transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.2 }}
				>
					<span className="select-none">{node.icon}</span>
				</motion.div>
			))}

			{/* Neon data pipelines (SVG) */}
			<svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 1440 960" fill="none" preserveAspectRatio="none">
				{pipelines.map((pipe, i) => (
					<path
						key={i}
						d={pipe.d}
						stroke="url(#lineGradient)"
						strokeWidth="2.5"
						strokeOpacity={pipe.opacity}
						strokeDasharray="6 10"
					/>
				))}
				<defs>
					<linearGradient id="lineGradient" x1="0" y1="0" x2="1440" y2="0">
						<stop offset="0%" stopColor="#5fb6ff" stopOpacity="0.2" />
						<stop offset="48%" stopColor="#7a86ff" stopOpacity="0.9" />
						<stop offset="100%" stopColor="#5fb6ff" stopOpacity="0.25" />
					</linearGradient>
				</defs>
			</svg>

			{/* Glassmorphism UI panels (subtle, for depth) */}
			<div className="absolute left-1/4 top-1/3 w-1/3 h-1/4 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]" />
			<div className="absolute right-1/5 bottom-1/4 w-1/4 h-1/6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]" />
		</div>
	);
};

export default ThreeDBackground;
