#!/usr/bin/env node

/**
 * Quick script to create a new TIL post
 * Usage: npm run new-til "Title of my TIL"
 */

import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.error('Usage: npm run new-til "Title of my TIL"');
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0];
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const filename = `${slug}.md`;
const filepath = path.join(process.cwd(), 'src', 'content', 'til', filename);

const content = `---
title: "${title}"
date: "${date}"
tags: []
---

Write your TIL here...
`;

if (fs.existsSync(filepath)) {
  console.error(`File already exists: ${filepath}`);
  process.exit(1);
}

fs.writeFileSync(filepath, content);
console.log(`Created: ${filepath}`);
console.log(`\nEdit the file and add your content!`);
