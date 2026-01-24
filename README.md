# 🚀 Om Jariwala - Professional Portfolio

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **A stunning, aggressive, high-impact placement portfolio designed to impress recruiters and land your dream job.**

![Portfolio Preview](public/hero-workspace.png)

## ✨ Features

- 🎨 **Aggressive Dark Theme** - Bold, high-contrast design with neon accents
- ⚡ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- 🚀 **One-Click Deploy** - Ready for Vercel, Netlify, or GitHub Pages
- 🎯 **Recruiter-Focused** - Designed to showcase skills and projects effectively
- 💎 **Premium UI/UX** - Modern, clean, and professional design
- 🔥 **Performance Optimized** - Fast loading and smooth scrolling

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated particles
2. **About** - Professional summary with key stats
3. **Education** - Timeline of academic achievements
4. **Projects** - Showcase of major projects with tech stacks
5. **Skills** - Categorized technical skills with icons
6. **Achievements** - Awards, certifications, and accomplishments
7. **Deploy** - Step-by-step deployment guides
8. **Contact** - Multiple ways to get in touch
9. **Footer** - Quick links and social media

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.0
- **Icons:** React Icons
- **Build Tool:** Vite
- **Fonts:** Inter, Outfit (Google Fonts)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OM-MJARI/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" - Done! ✅

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy" - Done! ✅

### Option 3: GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://OM-MJARI.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

## 📁 Project Structure

```
portfolio/
├── public/
│   └── hero-workspace.png
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Deploy.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  neon: {
    cyan: '#00ffff',    // Change these
    pink: '#ff00ff',
    green: '#00ff00',
    purple: '#a855f7',
  }
}
```

### Content

Update your information in each component file:
- **Hero.jsx** - Name, tagline, social links
- **About.jsx** - Bio and stats
- **Education.jsx** - Academic timeline
- **Projects.jsx** - Project details
- **Skills.jsx** - Technical skills
- **Achievements.jsx** - Awards and certifications
- **Contact.jsx** - Contact information

### Fonts

Change fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and lazy loading
- Minimal bundle size

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Om Jariwala**

- GitHub: [@OM-MJARI](https://github.com/OM-MJARI)
- LinkedIn: [OM-JARIWALA](https://linkedin.com/in/OM-JARIWALA)
- Email: 22bmiit101@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Email me at 22bmiit101@gmail.com
- Connect on LinkedIn

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with ❤️ by Om Jariwala**

</div>
