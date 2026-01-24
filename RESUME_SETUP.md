# Resume Setup Instructions

## 📄 Adding Your Resume

The Resume button has been added to your portfolio's Hero section. To make it work, you need to add your resume PDF file.

### Steps to Add Your Resume:

1. **Prepare your resume PDF**
   - Make sure your resume is in PDF format
   - Name it `resume.pdf` (or you can use any name, just update the link)

2. **Place the PDF in the public folder**
   - Copy your `resume.pdf` file to: `c:\Users\omjar\OneDrive\Desktop\Portfolio\public\resume.pdf`
   - The public folder is where static assets are served from

3. **Alternative: Use a different filename**
   - If you want to use a different filename (e.g., `Om_Jariwala_Resume.pdf`), update the link in `src/components/Hero.jsx`:
   ```javascript
   href="/Om_Jariwala_Resume.pdf"
   ```

4. **Alternative: Link to an online resume**
   - If your resume is hosted online (Google Drive, Dropbox, etc.), you can use that URL:
   ```javascript
   href="https://your-resume-link.com/resume.pdf"
   ```

### What Was Added:

✅ **Resume Button** next to "View Projects" button
- Features a download icon (📥)
- Styled with `btn-secondary` class (outline style)
- Opens in a new tab when clicked
- Matches your portfolio's neon theme

### Current Button Location:

The Resume button appears in the **Hero section** (top of the page), right next to the "View Projects" button.

---

**Note:** Until you add your actual resume file, clicking the button will show a 404 error. This is normal and will work once you add the PDF file.
