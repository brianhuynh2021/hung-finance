// src/utils/loadPosts.js

// Đọc tất cả file .md trong src/posts dưới dạng string (raw)
const files = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Parse front-matter thủ công (không dùng gray-matter)
function parseFrontMatter(raw) {
  const match = raw.match(/^---([\s\S]*?)---/);
  const metadata = {};
  let body = raw;

  if (match) {
    const metaBlock = match[1].trim();

    metaBlock.split("\n").forEach((line) => {
      if (!line.trim()) return;
      const [key, ...rest] = line.split(":");
      const value = rest.join(":").trim().replace(/^"|"$/g, "");
      metadata[key.trim()] = value;
    });

    body = raw.slice(match[0].length).trim();
  }

  return { metadata, body };
}

export function loadPosts() {
  const posts = [];

  for (const path in files) {
    const raw = files[path];
    const { metadata, body } = parseFrontMatter(raw);

    const slug = path.split("/").pop().replace(".md", "");

    posts.push({
      slug,
      title: metadata.title || slug,
      date: metadata.date || null,
      thumbnail: metadata.thumbnail || null,
      youtube: metadata.youtube || "",
      content: body,
    });
  }

  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });
}