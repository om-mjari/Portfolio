# 🚀 DEPLOYMENT GUIDE

This guide will help you deploy your portfolio to the web in minutes.

## 🎯 Choose Your Platform

### ⚡ Vercel (RECOMMENDED - Easiest & Fastest)

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free for personal projects

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/signup](https://vercel.com/signup)
   - Sign up with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Click "Deploy"
   - **Done!** Your site is live! 🎉

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps

---

### 🌊 Netlify (Great Alternative)

**Why Netlify?**
- Simple drag-and-drop deployment
- Continuous deployment from Git
- Free SSL certificates
- Form handling built-in

**Steps:**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Option A: Drag & Drop**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - **Done!** Instant deployment! 🎉

3. **Option B: Git Integration**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

### 🐙 GitHub Pages (Free Forever)

**Why GitHub Pages?**
- Completely free
- Integrated with GitHub
- Easy version control
- No third-party needed

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   
   Add these lines:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   
   Add base path:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/portfolio/',  // Add this line
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save
   - Wait 2-3 minutes
   - Visit: `https://YOUR_USERNAME.github.io/portfolio`

---

## 🔧 Build Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel: Settings → Domains → Add
3. Add your domain
4. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. In Netlify: Domain settings → Add custom domain
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: YOUR_SITE.netlify.app
   ```

### For GitHub Pages:

1. Create file `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display properly
- [ ] Links work (GitHub, LinkedIn, Email)
- [ ] Responsive on mobile
- [ ] Smooth animations
- [ ] Contact form works (if added)
- [ ] SEO meta tags present
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `Module not found`
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Check image paths (use `/image.png` for public folder)
- Ensure images are in `public/` folder
- Verify image names match exactly (case-sensitive)

### Blank Page After Deploy

- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Clear browser cache
- Check deployment logs

### GitHub Pages 404

- Ensure `gh-pages` branch exists
- Check GitHub Pages settings
- Verify `base` path matches repository name
- Wait 5-10 minutes for DNS propagation

---

## 📊 Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🎉 Success!

Your portfolio is now live! Share it with:
- Recruiters
- On LinkedIn
- In your resume
- On your GitHub profile

**Pro Tip:** Update your portfolio regularly with new projects and skills!

---

## 📞 Need Help?

- Check [Vercel Docs](https://vercel.com/docs)
- Check [Netlify Docs](https://docs.netlify.com)
- Check [GitHub Pages Docs](https://docs.github.com/pages)
- Email: 22bmiit101@gmail.com

---

<div align="center">

**Happy Deploying! 🚀**

</div>
