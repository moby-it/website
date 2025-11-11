# Moby IT Website

A simple static website for Moby IT - George Spanos.

## Structure

- `index.html` - Main page
- `styles.css` - Stylesheet
- `public/` - Static assets (fonts, images)

## GitHub Pages Deployment

This site is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

### Setup Instructions

1. **Navigate to Repository Settings**
   - Go to your repository on GitHub
   - Click on **Settings** tab (if you don't see it, click the dropdown menu)
   - You need admin or maintainer permissions to configure GitHub Pages

2. **Access GitHub Pages Settings**
   - In the left sidebar, scroll down to find **Pages** under "Code and automation"
   - Click on **Pages**

3. **Change Source to GitHub Actions**
   - Under "Build and deployment"
   - Find the "Source" dropdown
   - Select **GitHub Actions** (instead of "Deploy from a branch")
   - The workflow is already configured in `.github/workflows/deploy.yml`

4. **Deploy Your Site**
   - Commit and push your changes to the `main` branch
   - GitHub will automatically run the workflow
   - Check the Actions tab to monitor the deployment progress

5. **Access Your Site**
   - Your site will be available at: `https://[your-username].github.io/moby-website/`
   - First deployment may take a few minutes
   - The URL will be shown in the Pages settings after successful deployment

### Troubleshooting

- If the source dropdown is grayed out, try switching to "Deploy from a branch" first, then back to "GitHub Actions"
- Check the **Actions** tab for any deployment errors
- Ensure you have the correct permissions (admin or maintainer)

### Multi-Page Sites

Yes, GitHub Pages supports multi-page sites! You can:

- Add more HTML files (e.g., `about.html`, `contact.html`)
- Organize pages in folders (e.g., `blog/post1.html`)
- Link between pages using relative paths
- All files will be accessible at their paths (e.g., `yoursite.com/about.html` or `yoursite.com/blog/post1.html`)

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file with your domain (e.g., `moby-it.com`)
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in the repository settings

## Local Development

To preview the site locally, you can use any static server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve

# Or simply open index.html in your browser
```