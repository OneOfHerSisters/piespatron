import { promises as fs } from "fs";
import path from "path";

const PRIMARY = process.env.PRIMARY_DOMAIN || "https://username.github.io";
const BASE = (process.env.BASE_PATH || "").replace(/\/+$/,""); // "" or "/repo-name"
const ROOT = "."; // project root
const TODAY = new Date().toISOString().slice(0,10);

function norm(p){ return p.replace(/\\/g,"/"); }

function fileToWebPath(fp){
  let p = norm(fp).replace(/^\.\//,"/");
  if (p.endsWith("/index.html")) return p.slice(0, -"/index.html".length) + "/";
  if (p.endsWith("index.html")) return "/";
  return p;
}

async function listHtml(root="."){
  const out = [];
  const stack = [root];
  while (stack.length){
    const d = stack.pop();
    const items = await fs.readdir(d, { withFileTypes:true });
    for (const it of items){
      const full = path.join(d, it.name);
      const rel = norm(full);
      if (it.name === ".git" || it.name === "node_modules") continue;
      if (it.isDirectory()) stack.push(full);
      else if (it.isFile() && it.name.endsWith(".html")){
        if (it.name === "404.html") continue;
        out.push("./"+rel);
      }
    }
  }
  return out;
}

async function lastmod(p){
  try { const st = await fs.stat(p); return st.mtime.toISOString().slice(0,10); }
  catch { return TODAY; }
}

function absUrl(webPath){
  const base = (BASE && BASE !== "/") ? BASE : "";
  return PRIMARY.replace(/\/+$/,"") + base + webPath;
}

async function main(){
  const files = await listHtml(ROOT);
  const map = new Map();
  for (const f of files){
    const web = fileToWebPath(f);
    const lm = await lastmod(f);
    map.set(web, lm);
  }
  const urls = [...map.entries()].map(([web, lm]) => ({
    loc: absUrl(web),
    lastmod: lm,
    priority: web === "/" ? "1.0" : "0.7"
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  await fs.writeFile("sitemap.xml", xml.trim()+"\n", "utf-8");
  console.log("sitemap.xml written with", urls.length, "urls");
}

await main();


