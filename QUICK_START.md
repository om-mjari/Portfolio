# 🚀 Quick Start Guide

## Get Your Portfolio Running in 2 Minutes!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

That's it! Your portfolio is now running locally! 🎉

---

## What You'll See

✅ **Hero Section** - Your name with neon glow effects and animated particles  
✅ **About Me** - Professional summary with key stats  
✅ **Education Timeline** - Your academic journey  
✅ **Projects** - Showcase of your major projects  
✅ **Skills** - Technical skills with icons  
✅ **Achievements** - Awards and certifications  
✅ **Deploy Guide** - Instructions for going live  
✅ **Contact** - Multiple ways to reach you  

---

## Next Steps

### 1. Customize Your Content
Edit these files to personalize your portfolio:
- `src/components/Hero.jsx` - Update name, tagline, social links
- `src/components/About.jsx` - Update bio and stats
- `src/components/Projects.jsx` - Add your projects
- `src/components/Contact.jsx` - Update contact info

### 2. Deploy to Production
Choose your preferred platform:
- **Vercel** (Recommended) - See `DEPLOYMENT.md`
- **Netlify** - See `DEPLOYMENT.md`
- **GitHub Pages** - See `DEPLOYMENT.md`

### 3. Share Your Portfolio
Once deployed, share your portfolio:
- Add to your resume
- Share on LinkedIn
- Add to GitHub profile
- Send to recruiters

---

## Troubleshooting

### Port Already in Use?
```bash
# Kill the process on port 5173
npx kill-port 5173
npm run dev
```

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images Not Loading?
- Ensure images are in the `public/` folder
- Use `/image-name.png` in your code (with leading slash)

---

## Need Help?

📧 Email: 22bmiit101@gmail.com  
💬 GitHub Issues: Create an issue in your repository  
📚 Documentation: See `README.md` for detailed info

---

## Pro Tips

💡 **Hot Reload**: Changes you make will automatically update in the browser  
💡 **Mobile Testing**: Open on your phone using the Network URL shown in terminal  
💡 **Performance**: Run `npm run build` to check production bundle size  
💡 **SEO**: Update meta tags in `index.html` before deploying  

---

<div align="center">

**Happy Coding! 🎨**

Built with React, Tailwind CSS, and Framer Motion

</div>
