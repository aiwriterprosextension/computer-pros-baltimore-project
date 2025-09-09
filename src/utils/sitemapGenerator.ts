// Sitemap generator that extracts routes from App.tsx
import fs from 'fs';
import path from 'path';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

// Base URL for the site
const BASE_URL = 'https://computer-pros-baltimore-project.lovable.app';

// Route priority mapping
const ROUTE_PRIORITIES: Record<string, { priority: string; changefreq: SitemapURL['changefreq'] }> = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/services': { priority: '0.9', changefreq: 'weekly' },
  '/about': { priority: '0.8', changefreq: 'monthly' },
  '/contact': { priority: '0.8', changefreq: 'monthly' },
  '/booking': { priority: '0.9', changefreq: 'daily' },
  '/blog': { priority: '0.7', changefreq: 'daily' },
  '/resources': { priority: '0.7', changefreq: 'weekly' },
  '/industries': { priority: '0.8', changefreq: 'weekly' },
  '/legal': { priority: '0.3', changefreq: 'yearly' },
  '/free-checklist': { priority: '0.8', changefreq: 'monthly' },
};

// Extract routes from App.tsx
export function extractRoutesFromApp(): string[] {
  try {
    const appPath = path.join(process.cwd(), 'src', 'App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf-8');
    
    // Regex to match Route components with path prop
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    const routes: string[] = [];
    let match;
    
    while ((match = routeRegex.exec(appContent)) !== null) {
      const route = match[1];
      // Skip dynamic routes and 404 routes
      if (!route.includes(':') && route !== '*') {
        routes.push(route);
      }
    }
    
    return routes.sort();
  } catch (error) {
    console.error('Error extracting routes:', error);
    return [];
  }
}

// Get priority and changefreq for a route
function getRouteMeta(route: string): { priority: string; changefreq: SitemapURL['changefreq'] } {
  // Check for exact match
  if (ROUTE_PRIORITIES[route]) {
    return ROUTE_PRIORITIES[route];
  }
  
  // Check for prefix matches
  for (const [prefix, meta] of Object.entries(ROUTE_PRIORITIES)) {
    if (route.startsWith(prefix) && prefix !== '/') {
      return meta;
    }
  }
  
  // Default values
  return { priority: '0.5', changefreq: 'monthly' };
}

// Generate sitemap XML
export function generateSitemap(): string {
  const routes = extractRoutesFromApp();
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const urls: SitemapURL[] = routes.map(route => {
    const { priority, changefreq } = getRouteMeta(route);
    
    return {
      loc: `${BASE_URL}${route}`,
      lastmod,
      changefreq,
      priority,
    };
  });
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return `${xmlHeader}
${urlsetOpen}${urlElements}
${urlsetClose}`;
}

// Write sitemap to public directory
export function writeSitemap(): void {
  try {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error writing sitemap:', error);
  }
}

// Development-friendly version for client-side
export function generateSitemapClient(): string {
  // Static routes extracted from App.tsx (updated manually or via build process)
  const routes = [
    '/',
    '/services/managed-services',
    '/services/cybersecurity',
    '/services/microsoft-365',
    '/services/ai-enablement',
    '/services/projects-migrations',
    '/services/pricing',
    '/resources',
    '/blog',
    '/about',
    '/contact',
    '/industries/law-firms',
    '/industries/dental-practices',
    '/industries/property-managers',
    '/industries/medical-offices',
    '/industries/accountants',
    '/industries/professional-services',
    '/booking',
    '/free-checklist',
    '/checklist-thank-you',
    '/privacy-policy',
    '/terms-of-service',
    '/data-processing-agreement',
    '/cookie-policy',
    '/business-associate-agreement',
  ];
  
  const lastmod = new Date().toISOString().split('T')[0];
  
  const urls: SitemapURL[] = routes.map(route => {
    const { priority, changefreq } = getRouteMeta(route);
    
    return {
      loc: `${BASE_URL}${route}`,
      lastmod,
      changefreq,
      priority,
    };
  });
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return `${xmlHeader}
${urlsetOpen}${urlElements}
${urlsetClose}`;
}