import { useParams } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";
import ReactMarkdown from "react-markdown";

export default function PostDetail() {
  const { slug } = useParams();
  const posts = loadPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post)
    return (
      <p className="text-center py-10 text-red-500 text-lg">
        Bài viết không tồn tại.
      </p>
    );

  // Helper: extract YouTube ID safely
  const getYouTubeId = (url) => {
    if (!url) return null;

    // Standard ?v=xxxx
    if (url.includes("v=")) {
      return url.split("v=")[1].split("&")[0];
    }

    // youtu.be/xxxx
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }

    return null;
  };

  const youtubeId = getYouTubeId(post.youtube);

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full rounded-lg shadow mb-6"
        />
      )}

      {post.date && (
        <p className="text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString("vi-VN")}
        </p>
      )}

      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>
            {post.content}
        </ReactMarkdown>
      </div>

      {youtubeId && (
        <iframe
          className="w-full h-64 mt-6 rounded-xl"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </article>
  );
}