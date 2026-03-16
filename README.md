# Surgical Vision — Website

A fast, free static website hosted on GitHub Pages.

## Adding a new video (no coding needed)

Open `data/videos.js` and copy any existing video entry. Fill in:

```js
{
  id: "rarp-nvb-002",           // unique ID — procedure-chapter-number
  procedureId: "rarp",          // rarp | rc | recon
  chapterId: "rarp-nvb",        // must match a chapter id in the procedures list
  title: "Your video title",
  description: "What this video covers in 1-2 sentences.",
  youtubeId: "dQw4w9WgXcQ",    // the part after ?v= in your YouTube URL
  duration: "32:15",
  difficulty: "Essential",      // Essential | Advanced
  complexity: "Standard anatomy", // Standard anatomy | Challenging anatomy
  tags: ["nerve sparing", "robotic", "technique"],  // 3-5 tags
  publishedDate: "2025-03-01",  // YYYY-MM-DD
  curriculumOrder: 5            // where it sits in the learning path for this chapter
}
```

Save the file, commit, and the site updates automatically.

## Adding a new chapter

In `data/videos.js`, find the right procedure in `SV_DATA.procedures` and add to its `chapters` array:

```js
{ id: "rarp-complications", title: "Complication Management", order: 8 }
```

Then assign videos to it using `chapterId: "rarp-complications"`.

## Deployment (GitHub Pages — free)

1. Create a free account at github.com
2. Create a new repository named: `surgical-vision` (or `yourusername.github.io`)
3. Upload all these files
4. Go to Settings → Pages → Source: main branch / root
5. Your site is live at `https://yourusername.github.io/surgical-vision`
6. Point your domain `surgicalvision.org` to it via a CNAME record (GitHub has a guide)

**Total cost: €0/month** (just your annual domain renewal)

## File structure

```
surgical-vision/
├── index.html        ← Homepage
├── library.html      ← Full video library with search
├── css/
│   └── style.css     ← All styles
├── js/
│   └── common.js     ← Shared card builders
└── data/
    └── videos.js     ← YOUR CONTENT — edit this to add videos
```

## SEO tips

- Every video in `videos.js` contributes to search engine indexing
- Use full anatomical terms in `title`, `description`, and `tags`
- e.g. "radical prostatectomy bladder neck dissection median lobe" ranks better than "BND video 3"
