import { useEffect, useState } from "react";

const NewsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts/posts.json")
      .then((res) => res.json())
      .then(async (files) => {
        const loaded = [];

        for (const file of files) {
          const p = await fetch(`/posts/${file}`).then((r) => r.json());
          loaded.push(p);
        }

        setPosts(loaded);
      });
  }, []);

  return (
    <section id="tin-tuc" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Tin tức &amp; chia sẻ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-[#FFF6EC] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <p className="text-xs text-gray-500">{post.date}</p>

                <h3 className="font-semibold text-lg text-gray-900 mt-1 mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-700 mb-3">{post.short}</p>

                <button
                  onClick={() => alert("Trang chi tiết sẽ làm sau")}
                  className="px-4 py-2 text-sm rounded-full border border-orange-500 text-orange-600 hover:bg-orange-50 font-medium"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;