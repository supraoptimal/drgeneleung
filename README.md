# Personal Portfolio Website

This directory contains a simple personal portfolio website built with just **HTML** and **CSS**.  The site has sections for an introduction, a writing list, and contact information.  It's designed to be lightweight and easy to update.

## Structure

| File       | Purpose                           |
|-----------:|------------------------------------|
| `index.html` | The main page of your site.  Update the headings, paragraph text, and links to reflect your own content. |
| `style.css`  | Styles for the site.  Modify colours, fonts, and spacing here to customize the look and feel. |

## Customizing

- **Name**: Change the `<title>` in the `<head>` of `index.html` and update the `<h1 class="site-title">Your Name</h1>` to display your own name.
- **Bio**: In the **About** section, replace the placeholder paragraph with a short biography.
- **Writing**: In the **Writing** section, replace the example list items with links to your own articles or Substack posts.  You can add or remove `<li>` elements as needed.  Also update the `href` in the Substack link to point to your actual Substack profile.
- **Contact information**: Update the email address in the **Contact** section to your own email address.  You can also add links to social media or other contact methods.
- **Styling**: Modify `style.css` to adjust colours, fonts, and layout.  The CSS is written to be easy to follow, with comments grouped by section.

## Previewing locally

You can open `index.html` directly in your browser to see how the site looks.  Double‑click the file or open it via `file:///` in the browser address bar.  No build step or web server is needed.

## Deploying to Vercel

Vercel makes it easy to host static websites.  There are two primary ways to deploy this project:

1. **Via Git**: Create a new repository on GitHub (or GitLab/Bitbucket), add these files to it, and then [import that repository into Vercel](https://vercel.com/docs/deployments#git).  Each push to your repository will automatically trigger a deployment.  When you add the custom domain in Vercel’s settings, Vercel will provide the necessary DNS records.

2. **Via Vercel CLI**: Install the Vercel CLI with `npm i -g vercel`, run `vercel` inside the project directory, and follow the prompts to log in and deploy.  The CLI method does **not** require a Git repository, but still gives you a unique URL and the ability to assign a custom domain.

## Connecting Your Namecheap Domain

After deploying the site on Vercel, you can connect your custom domain from Namecheap:

1. **Add the domain in Vercel**: In the Vercel dashboard for your project, go to **Settings → Domains** and add your domain.  Vercel will detect that the domain is not yet configured and display the required DNS records (either a CNAME for a subdomain or A/AAAA records for an apex domain).  Vercel’s documentation notes that Vercel nameservers are automatically provided if you choose to use a wildcard domain【126640694822830†L1551-L1555】.

2. **Update DNS at Namecheap**: Log in to your Namecheap account, navigate to **Domain List**, click **Manage** next to your domain, then open the **Advanced DNS** tab.  Create the DNS records exactly as Vercel describes.  For example, you might add an A record pointing to Vercel’s IP addresses or a CNAME pointing to a `*.vercel-dns.com` value.  Once added, wait for DNS propagation and check the Vercel dashboard—its status will change from “Invalid configuration” to “Valid configuration”【946988577018394†L256-L275】.

3. **(Recommended) Use Vercel as the DNS provider**: Vercel discourages putting a reverse proxy like Cloudflare in front of its platform because it can introduce latency and interfere with features like bot protection【678829108870487†L92-L110】.  For the simplest setup, use the nameservers that Vercel provides and configure those at Namecheap.  This gives Vercel full control of DNS and ensures your site benefits from its edge network and protection features.

After the DNS changes propagate (which can take a few minutes to several hours), your domain should point to the Vercel deployment.  You can then visit your domain and see your portfolio live.

## Extending the site

This simple HTML/CSS site is a starting point.  If you plan to add web apps or dynamic functionality later, consider migrating to a framework like **Next.js**.  Vercel has excellent support for Next.js, including serverless functions, API routes, and edge middleware.  You can gradually replace this static site by creating a new project with `npx create-next-app@latest` and deploying it to the same domain.