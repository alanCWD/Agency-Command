import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wand2, 
  Copy, 
  LayoutTemplate, 
  Store, 
  Bot,
  Zap,
  Globe2,
  FileCode2,
  BookText,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type CreationMode = 'template' | 'copy';
type Tier = 'basic' | 'pro' | 'enterprise';

const PROMPT_PRESETS = [
  {
    name: "Agency Blueprint",
    description: "Master prompt for generating full agency website apps.",
    prompt: `System Role & Objective:
Act as an Elite Full-Stack Developer, Technical SEO Expert, and UI/UX Designer. Your objective is to build a premium, high-performance web application tailored for conversion. We are building an agency-grade product meant to replace outdated, bloated CMS platforms (like WordPress) with a fast, modern, and secure architecture.

1. Core Tech Stack & Integrations:
You must architect the application to seamlessly support the following infrastructure:
- Frontend Framework: Use a modern headless framework (e.g., Next.js or React with Vite) and Tailwind CSS for highly responsive, modern styling.
- Version Control & Deployment: The code must be clean, modular, and ready to be pushed to GitHub, which will trigger automatic production deployments via Netlify.
- Media Delivery (Bunny.net): Do not store heavy images locally. Configure all <img /> tags to use a base URL pointing to a Bunny.net Pull Zone (Bunny Optimizer) for auto-WebP conversion and resizing. Any video elements must be architected to accept a Bunny Stream embed/URL rather than standard HTML5 video tags.
- Transactional Email (SendGrid): All contact forms, lead captures, or reservation requests must be wired to use the SendGrid API securely via a backend route/serverless function. Do not expose API keys on the frontend.

2. Architecture & Data Management (The Admin-Proof Setup):
- Separation of Concerns: Do not hardcode easily changeable text (like business hours, phone numbers, product names, or pricing) deep inside complex React components.
- Configuration Files: Create a centralized data structure (e.g., data/content.json or config.ts). This allows me (the Admin) to easily update client text and images in the GitHub repository without risking the underlying UI code breaking.

3. Advanced SEO & Discoverability Protocol:
You must build technical SEO into the core of the app:
- Schema Markup (JSON-LD): Automatically generate appropriate dynamic Schema for the page type (e.g., LocalBusiness for service sites, Product for eCommerce, Restaurant for dining, or FAQPage).
- Semantic HTML & Accessibility: Strictly enforce logical H1-H6 tag hierarchy. All images MUST have descriptive alt tags. All interactive elements must be accessible (ARIA attributes where necessary).
- AI Search Readiness: Generate a static /llms.txt file at the root that clearly outlines the business’s core information, services, and products so external AI crawlers can digest the site instantly.
- Speed & Core Web Vitals: Ensure the DOM is lightweight, unused CSS is purged, and the site scores 95+ on mobile PageSpeed Insights.

4. Adaptive Niche Requirements (Apply based on the specific client):
- If Local Business/Service: Prioritize click-to-call buttons, embedded service area maps, and high-converting lead forms (SendGrid).
- If Restaurant: Architect a clean, mobile-first JSON-driven menu system and an easy-to-read hours/location footer.
- If eCommerce/Retail: Build state-managed shopping cart components, dynamic product grids, and high-res image galleries powered by Bunny.net.
- If Micro Site/Landing Page: Focus on single-page scroll logic, extreme load speed, and sticky Call-To-Action (CTA) headers.

5. Execution Protocol:
Before writing the full application, use Plan Mode. Output a brief architectural outline detailing:
1. The folder structure.
2. The data schema for the configuration file.
3. The planned UI components.
Wait for my approval on the plan before executing the code.

6. Local SEO & NAP Consistency (Google Business Profile Sync):
The website must treat the client's Google Business Profile (GBP) as the absolute single source of truth for all business identity data to ensure maximum Local SEO authority.
- Strict NAP Alignment: The business Name, Address, and Phone Number (NAP), as well as operating hours, must be an exact character-for-character match with the GBP data provided below. Do not alter abbreviations (e.g., if GBP uses "Rd.", do not expand to "Road").
- Centralized Configuration: You must store this GBP data in a single global configuration file (e.g., data/business-profile.json or config/nap.ts).
- Dynamic Injection: Never hardcode the address, phone number, or business name into individual UI components (like the Footer, Header, or Contact Page). All components must dynamically import and render the data from the centralized GBP configuration file.
- Schema Automation: The LocalBusiness JSON-LD structured data must automatically pull from this exact same configuration file to ensure Google reads the exact same NAP data in the code as it sees on the page.

Project Specifics:
[INSERT YOUR SPECIFIC CLIENT DETAILS, TEXT, COLORS, AND NICHES HERE]`
  },
  {
    name: "GBP Sync Code",
    description: "Architect backend sync logic between Google and website.",
    prompt: `Role: Act as a Senior Full-Stack Developer specializing in Google Cloud Platform and Google Business Profile (GBP) API integrations.

Objective: Architect and write the code for a dynamic synchronization bridge between a Google Business Profile and a restaurant website. The goal is to fetch and display Reviews, the Full Food Menu, and the "About Us" description, ensuring the website stays in sync with GBP updates.

Technical Specifications:
1. Authentication: Implement an OAuth 2.0 flow using a Refresh Token strategy. The backend must securely store the Refresh Token to generate new Access Tokens without manual intervention.
2. Endpoints to Use:
   - Reviews: accounts.locations.reviews.list (Implement pagination using nextPageToken).
   - Menu: accounts.locations.foodMenus (Map categories, item names, descriptions, and prices).
   - Business Info: accounts.locations (Fetch profile.description for the About Us section).
3. Real-Time Sync Logic: Set up a Google Cloud Pub/Sub listener for the MY_BUSINESS_UPDATES topic to trigger instant updates when a review is posted or a profile is edited. Provide a fallback polling mechanism (Cron Job) that refreshes the full menu data every 60 minutes.
4. Frontend Requirements:
   - Reviews Component: A paginated list/grid showing user name, star rating (converted from ENUM to stars), comment text, and reply text.
   - Menu Component: A structured layout that groups items by categoryName. Each item must display price, description, and attributes (e.g., "Vegan").
   - About Us: A text block styled for the restaurant’s branding.

Deliverables:
1. Node.js/Express Backend Proxy: To handle OAuth, token refreshing, and API requests (protecting the Client Secret).
2. React/Vue Frontend Logic: To fetch data from the proxy and render the UI with custom CSS.
3. Setup Guide: Step-by-step instructions for enabling the Business Profile API in Google Cloud Console and configuring the Redirect URI.

Constraint: Ensure all data is cached locally (e.g., Redis or a simple JSON store) to prevent exceeding Google API quotas and to ensure the website loads instantly even if the API is slow.`
  },
  {
    name: "SEO Master",
    description: "Perform SEO and AI-readiness overhaul on an existing app.",
    prompt: `I am deploying this app on Autoscale. Please perform a full SEO and AI-readiness overhaul with the following requirements:

1. Technical SEO:
   - Create a dynamic sitemap.xml and a robots.txt file in the root.
   - Ensure the app uses Server-Side Rendering (SSR) or provides pre-rendered meta tags for every route so crawlers see content immediately on Autoscale wake-up.
   - Add a logic to automatically generate descriptive alt tags for all images if they are missing.
2. AI Search Optimization (llms.txt):
   - Create an llms.txt file in the root directory.
   - This file should provide a concise, Markdown-formatted summary of what this app does, its primary features, and a 'map' of the key URLs for AI agents (like GPTBot or Gemini) to parse.
3. Analytics Dashboard:
   - Build a custom route at /analytics.
   - This route should display a clean, password-protected dashboard showing basic stats (page views, unique visitors, and top referrers).
   - Note: Use a lightweight local database (like SQLite or Replit KeyValue) to persist this data across Autoscale instances.
4. Metadata & Social:
   - Implement dynamic Open Graph (OG) tags and Twitter Card metadata for every page.
   - Ensure the <title> and <meta description> update based on the current route.
5. Performance:
   - Minify all CSS/JS and implement lazy-loading for images to ensure high Core Web Vitals scores.`
  },
  {
    name: "Programmatic SEO Machine",
    description: "Architect a programmatic SEO framework with dynamic routes and Schema.org injection.",
    prompt: `System Role & Objective:
Act as an Elite Technical SEO Developer. Your objective is to scaffold a web application purposely built to scale "Programmatic SEO" for a low-content/thin web app.

1. Programmatic Dynamic Routing:
You must architect a data-driven routing system to mass-generate highly-targeted landing pages without duplicating component code. 
- Create a configuration array/manifest that holds SEO variables (e.g., "Competitors", "Niches", or "Locations").
- Generate dynamic route endpoints (e.g., \`/compare/[software-competitor]\` or \`/solutions/for-[industry-niche]\`).
- The specific UI layout should remain consistent, but the H1, Metadata, copy, and specific features must render dynamically based on the URL parameter.

2. Dynamic Schema.org (JSON-LD) Injector:
You must build a centralized \`<SchemaInjector />\` component that injects structured data into the \`<head>\` of every page dynamically.
- Core App Schema: Inject \`SoftwareApplication\` or \`WebApplication\` schema on the main domain.
- Generative Pages: Ensure programmatic pages inject specific \`FAQPage\` or \`HowTo\` schema based on the active dynamic variables.
- Action-Intent: For applicable restaurant or e-commerce clients, inject \`OrderAction\` schema targeting the native ordering domain.

3. Static Generation (SSG) / Pre-rendering:
Search engines must read these pages instantly. Architect the app so these programmatic dynamic routes can be statically exported as raw HTML at build time (avoiding heavy JS parsing delays for Googlebot). Ensure strict 404 handling prevents "soft 404" ghost pages from inflating the index.

4. AI Search Bot Indexing (/llms.txt):
Programmatically generate an \`llms.txt\` file at the project root for AI crawlers like ChatGPT, Claude, and Gemini. It must contain a stripped-down, markdown-formatted directory of the software's capabilities and a link map of the programmatic pages.

Execution Protocol:
Before writing code, output the exact dynamic routing structure you will use, provide 3 examples of the JSON schema templates to be injected, and map out the data arrays that will drive the generation.`
  },
  {
    name: "Retail Merchant Sync",
    description: "Architect a retail backend that syncs products and local inventory to Google Merchant Center.",
    prompt: `1. Architecture overview
Backend ↔ Merchant Center via API
Your site's backend calls the Merchant API / Content API for Shopping to: create/update products, update inventory, and manage accounts.

Merchant Center ↔ Google Business Profile
You link the Merchant Center account to the GBP location(s); Google then uses your product + local inventory feeds to show products on your Business Profile and in local results.

A typical flow:

Product created/updated in your DB.

Backend pushes it via Merchant API products.insert / products.patch (or equivalent in Merchant API).

Backend pushes store‑level inventory via Local Inventory feed or API.

GBP is linked to that Merchant Center account, so products appear in “See what’s in store” / Products on the profile.

2. Enable API access to Merchant Center
Create/verify Merchant Center account

Set up the Merchant Center account and verify/claim your website.

Enable API and credentials in Google Cloud

In Google Cloud Console, enable the Merchant API (or legacy “Content API for Shopping” if you’re following older docs).

Create OAuth 2.0 credentials or a service account and download the JSON key (contains client_email, private_key).

Grant access to Merchant Center

In Merchant Center, add the service account email as a user (standard or admin, depending on needs).

Set up client library in your backend

Google provides client libraries (Java, PHP, Node, Python, etc.).

Quickstart shows how to authenticate and make a first call.

Once done, your backend can programmatically manage everything that you’d normally upload via GMC feeds.

3. Push products from your backend to Merchant Center
Product data model
You need to map your DB fields to Google’s product attributes. At minimum: id, title, description, link, image_link, price, availability, condition, brand (where relevant).

Using the Content API / Merchant API, you can:

Insert new product: upload a product when created in your CMS.

Patch/update: sync price, availability, titles, etc. when edited.

Example capabilities the docs highlight: upload products, manage inventory, manage accounts, connect to Google Ads/free listings from code.

For a clean architecture:

Create a product sync service that:

Listens to DB events (create/update/delete).

Batches calls to Merchant API for performance.

Logs errors and sync status per product (for admin UI).

4. Add local inventory for GBP (store‑level data)
To connect products to specific physical locations (what GBP will actually show locally), you need local inventory data per store.

Key attributes in Local Inventory spec:

id – same as your product ID in your primary feed.

store_code – must match the store code in your Business Profile locations.

price, sale_price (if any), availability, pickup_method, etc.

You can provide this via:

Local inventory feed files (CSV/TSV/XML) uploaded or fetched by Merchant Center.

Or via API methods for inventory (Merchant API supports automated inventory management).

Important detail: Google notes that Business Profile store codes and inventory feeds must match, and that syncing locations to Merchant Center can take up to ~24 hours before inventory uploads are accepted.`
  }
];

export function Builder() {
  const [mode, setMode] = useState<CreationMode>('template');
  const [tier, setTier] = useState<Tier>('pro');
  const [useGbp, setUseGbp] = useState(true);
  const [useGmc, setUseGmc] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert("App generated successfully! Redirecting...");
    }, 2000);
  };

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto pb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold bg-white w-fit px-2 py-1 rounded inline-block -mx-2">Website App Builder</h1>
        <p className="text-sm text-slate-500">Generate a fully integrated, SEO-optimized company web application.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="space-y-6">
          {/* Base Selection */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">1. Select Creation Base</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMode('template')}
                className={cn(
                  "p-4 rounded-xl border text-left transition-all",
                  mode === 'template' 
                    ? "border-indigo-600 ring-1 ring-indigo-600 bg-indigo-50" 
                    : "border-slate-200 hover:border-indigo-300 bg-white"
                )}
              >
                <LayoutTemplate className={cn("mb-3", mode === 'template' ? "text-indigo-600" : "text-slate-400")} size={24} />
                <h3 className="text-sm font-bold text-slate-900">Pre-existing Template</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Start from a high-converting agency template.</p>
              </button>
              <button
                onClick={() => setMode('copy')}
                className={cn(
                  "p-4 rounded-xl border text-left transition-all",
                  mode === 'copy' 
                    ? "border-indigo-600 ring-1 ring-indigo-600 bg-indigo-50" 
                    : "border-slate-200 hover:border-indigo-300 bg-white"
                )}
              >
                <Copy className={cn("mb-3", mode === 'copy' ? "text-indigo-600" : "text-slate-400")} size={24} />
                <h3 className="text-sm font-bold text-slate-900">Copy Existing Site</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Provide a URL to clone and modernize a site.</p>
              </button>
            </div>
          </motion.section>

          {/* Configuration */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">2. Technical SEO & Infrastructure</h2>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 space-y-5">
                {/* GBP Sync */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="flex items-center h-6 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600" checked={useGbp} onChange={(e) => setUseGbp(e.target.checked)} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Store size={16} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
                        <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Google Profile Sync</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Map NAP data and auto-generate Location pages from GBP API.</p>
                  </div>
                </label>

                {/* Google Merchant Center */}
                <label className="flex items-start gap-3 cursor-pointer group border-t border-slate-100 pt-5">
                  <div className="flex items-center h-6 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600" checked={useGmc} onChange={(e) => setUseGmc(e.target.checked)} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                       <ShoppingBag size={16} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
                       <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Google Merchant Center (Retail)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Sync product catalogs and local store inventory directly to free Google Shopping & GBP listings.</p>
                  </div>
                </label>

                {/* Programmatic SEO */}
                <label className="flex items-start gap-3 cursor-pointer group border-t border-slate-100 pt-5">
                  <div className="flex items-center h-6 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600 cursor-pointer" defaultChecked />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Globe2 size={16} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Programmatic Page Engine</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Mass-generate thin-content landing pages utilizing template variables.</p>
                    
                    <div className="mt-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-600 mb-2">
                         <span>URL Structure:</span>
                         <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-indigo-700 font-bold">domain.com/features/[use-case]</span>
                      </div>
                      <div className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mb-1 mt-3">Active Variable Sets:</div>
                      <div className="flex gap-2">
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 flex items-center gap-1 rounded text-[10px] font-bold">
                          [software-competitor] <span className="text-indigo-400 font-normal">x4</span>
                        </span>
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 flex items-center gap-1 rounded text-[10px] font-bold">
                          [industry-niche] <span className="text-emerald-400 font-normal">x12</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Schema Injector */}
                <label className="flex items-start gap-3 cursor-pointer group border-t border-slate-100 pt-5">
                  <div className="flex items-center h-6 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600 cursor-pointer" defaultChecked />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FileCode2 size={16} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Schema.org JSON-LD Injector</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Forces Action-Intent SEO without requiring long-form blog content.</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">WebApp Schema</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">FAQ Schema</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">OrderAction</span>
                    </div>
                  </div>
                </label>

                {/* LLMs.txt */}
                <label className="flex items-start gap-3 cursor-pointer group border-t border-slate-100 pt-5">
                  <div className="flex items-center h-6 mt-0.5">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-600 cursor-pointer" defaultChecked />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Bot size={16} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
                      <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">AI Content Index (llms.txt)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Auto-compiles the app's features into /llms.txt for ChatGPT & Gemini bots.</p>
                  </div>
                </label>
              </div>
            </div>
          </motion.section>

          {/* Pricing Tiers */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">3. Select Tier Plan</h2>
            <div className="space-y-3">
              {[
                { id: 'basic', name: 'Basic', desc: 'Standard template, limited GBP sync (1/day)', price: '$49/mo' },
                { id: 'pro', name: 'Pro', desc: 'Customizable, real-time GBP, Search Console', price: '$99/mo' },
                { id: 'enterprise', name: 'Enterprise', desc: 'Multi-loc GBP, API, Dedicated coach', price: '$249/mo' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id as Tier)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left",
                    tier === t.id 
                      ? "border-indigo-600 ring-1 ring-indigo-600 bg-indigo-50" 
                      : "border-slate-200 hover:border-indigo-300 bg-white"
                  )}
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{t.desc}</p>
                  </div>
                  <div className="font-bold text-indigo-700">
                    {t.price}
                  </div>
                </button>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Prompting Interface */}
        <div className="space-y-6">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="h-full flex flex-col">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                4. Custom Prompt
                <Bot size={14} className="text-indigo-500"/>
              </div>
            </h2>
            
            <div className="flex gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                <BookText size={14} /> Presets:
              </div>
              <div className="flex flex-wrap gap-2">
                {PROMPT_PRESETS.map((preset, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setPrompt(preset.prompt)}
                    className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 font-bold uppercase tracking-wider px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors shadow-sm"
                    title={preset.description}
                  >
                    Load {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-1 flex-1 flex flex-col overflow-hidden">
              {mode === 'copy' && (
                <div className="p-4 border-b border-slate-100 bg-slate-50">
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Target URL to Clone</label>
                  <input 
                    type="url" 
                    placeholder="https://example.com" 
                    className="w-full border-slate-200 border rounded-lg px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white" 
                  />
                </div>
              )}
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the company, its vibe, special features, and color scheme..."
                className="w-full flex-1 p-5 resize-none focus:outline-none focus:ring-0 text-slate-900 placeholder:text-slate-400 bg-transparent min-h-[400px] text-sm leading-relaxed"
              />
              <div className="p-3 border-t border-slate-100 flex justify-between items-center bg-slate-50 rounded-b-xl">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2">Shift + Enter for new line</span>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || (mode === 'copy' && !prompt && false)}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors"
                >
                  {isGenerating ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <Zap size={16} />
                    </motion.div>
                  ) : (
                    <Wand2 size={16} />
                  )}
                  {isGenerating ? 'Generating...' : 'Build Website'}
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
