# 🚀 Quick Deployment Commands

## Step 1: Push to GitHub

```bash
# Add your GitHub repository (replace YOUR_USERNAME with om-mjari)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to: https://vercel.com/signup
2. Sign up with GitHub
3. Click "Import Project"
4. Select your portfolio repository
5. Click "Deploy"
6. Done! ✅

## Your Portfolio Will Be Live At:
https://portfolio-YOUR_USERNAME.vercel.app

---

## Alternative: Netlify

1. Go to: https://app.netlify.com/start
2. Connect with GitHub
3. Select your portfolio repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Done! ✅

---

## Need Help?

- Email: 22bmiit101@gmail.com
- Check DEPLOYMENT.md for detailed instructions
