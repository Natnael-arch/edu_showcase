# Deploy to Vercel

## Step 1: Create a New GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `edufund-showcase`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

## Step 2: Push to GitHub

Run these commands in the showcase directory:

```bash
cd /home/nate/Edufund/showcase
git remote add origin https://github.com/YOUR_USERNAME/edufund-showcase.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `edufund-showcase` with your actual GitHub username and repository name.

## Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `edufund-showcase` repository
5. Vercel will auto-detect the settings:
   - Framework Preset: Vite
   - Root Directory: `./` (or leave blank)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

The site will be live in seconds! 🚀

## Alternative: Deploy via Vercel CLI

```bash
npm i -g vercel
cd /home/nate/Edufund/showcase
vercel
```

Follow the prompts to deploy.

