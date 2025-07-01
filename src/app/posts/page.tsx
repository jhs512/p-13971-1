"use client";

export default function Page() {
  const posts = [
    { id: 1, title: "명언 1" },
    { id: 2, title: "명언 2" },
    { id: 3, title: "명언 3" },
    { id: 4, title: "명언 4" },
    { id: 5, title: "명언 5" },
    { id: 6, title: "명언 6" },
    { id: 7, title: "명언 7" },
    { id: 8, title: "명언 8" },
    { id: 9, title: "명언 9" },
    { id: 10, title: "명언 10" },
  ];

  return (
    <>
      <h1>글 목록</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
