const fs = require("fs");
const path = require("path");

// Update these paths as needed:
const client = "acme-corp";
const sourceFile = `content/clients/${client}/article.md`;
const outputDir = `content/clients/${client}/`; // Where audience files will be written
const audiences = ["customer", "partner", "internal", "all"];

// Read the source file
const raw = fs.readFileSync(sourceFile, "utf-8");

// Filtering function for each audience
audiences.forEach(audience => {
  // Build regex to find all audience blocks
  let filtered = "";
  let regex = /<!-- audience: (.*?) -->([\s\S]*?)<!-- \/audience -->/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(raw)) !== null) {
    // Add content before this audience block (shared for all)
    filtered += raw.slice(lastIndex, match.index);

    // If block matches current audience (or "all"), keep it
    const targets = match[1].split(",").map(a => a.trim());
    if (targets.includes(audience) || targets.includes("all")) {
      filtered += match[2];
    }
    lastIndex = regex.lastIndex;
  }
  // Add any remaining content after last block
  filtered += raw.slice(lastIndex);

  // Write audience-specific file (can be used as your wrapper for Eleventy)
  const outPath = path.join(outputDir, `article-${audience}.md`);
  fs.writeFileSync(
    outPath,
    `---\ntitle: ACME Refund Policy (${audience.charAt(0).toUpperCase() + audience.slice(1)})\nlayout: base.njk\npermalink: clients/${client}/article-${audience}/index.html\naudience: ${audience}\n---\n\n${filtered.trim()}\n`
  );
  console.log(`Wrote ${outPath}`);
});
