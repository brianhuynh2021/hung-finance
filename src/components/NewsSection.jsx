import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";

export default function NewsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init();
    const loaded = loadPosts();
    setPosts(loaded.slice(0, 6));
  }, []);

  return (
    <section id="tin-tuc" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Tin tức & chia sẻ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-[#FFF6EC] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </p>

                <h3 className="font-semibold text-lg mt-1 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <Link
                  to={`/posts/${post.slug}`}
                  className="inline-block px-4 py-2 text-sm rounded-full border border-orange-500 text-orange-600 hover:bg-orange-50 font-medium"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
