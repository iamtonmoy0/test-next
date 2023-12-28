import React from "react";
import SlideBar from "./slidebar";
import Link from "next/link";
const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <div className="flex flex-row w-full">
      <div className="w-2/12">
        <SlideBar />
      </div>
      <div className="w-10/12">
        this is blog section
        {data.map((post) => (
          <ul key={post.id} className="my-4 border border-gray-200 rounded">
            <p>number: {post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Link href={`/blogs/${post.id}`}>
              <button className="bg-green-500 py-2 px-4 rounded">
                Details
              </button>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Page;
