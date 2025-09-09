#!/usr/bin/env node

// Script to generate sitemap from routes in App.tsx
// Run with: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Base URL for the site
const BASE_URL = 'https://computer-pros-baltimore-project.lovable.app';

// Route priority mapping
const ROUTE_PRIORITIES = {
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
function extractRoutesFromApp() {
  try {
    const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf-8');
    
    // Regex to match Route components with path prop
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    const routes = [];
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
function getRouteMeta(route) {
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
function generateSitemap() {
  const routes = extractRoutesFromApp();
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  console.log(`Found ${routes.length} routes:`);
  routes.forEach(route => console.log(`  ${route}`));
  
  const urls = routes.map(route => {
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
function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
    console.log('\n✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📍 Sitemap URL: ${BASE_URL}/sitemap.xml`);
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
  }
}

// Run the generator
if (require.main === module) {
  console.log('🚀 Generating sitemap from App.tsx routes...\n');
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap, extractRoutesFromApp };