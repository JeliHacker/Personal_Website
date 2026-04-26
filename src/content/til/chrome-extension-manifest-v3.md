---
title: "Chrome Extension Manifest V3 basics"
date: "2026-04-26"
tags: ["chrome", "extensions", "javascript"]
---

When building a Chrome extension with Manifest V3, you need these key parts:

## The manifest.json

```json
{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0.0",
  "permissions": ["activeTab", "storage"],
  "action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }],
  "background": {
    "service_worker": "background.js"
  }
}
```

## Key differences from MV2

- **Service workers** replace background pages (no persistent background)
- **`action`** replaces `browser_action` and `page_action`
- **`host_permissions`** is separate from `permissions`
- More restrictive CSP by default

Loading locally: `chrome://extensions` → Developer mode → Load unpacked
