import LoadBlogs from "@/utils/loadBlogs";
import SingleBlogs from "@/utils/singleBlog";
import React from "react";
// generate dynamic title metadata
export const generateMetadata=async({params})=>{
  const data = await SingleBlogs(params.id)
  return{
    title:data.title
  }
}

// generate static params
export const generateStaticParams=async()=>{
  const blog = await LoadBlogs()
  return blog.map(({id})=>({
    id:id.toString()
  }))
}

const SingleBlogPage = async({ params }) => {
  const data =await SingleBlogs(params.id);
  return <div>this is single blog page.the blog number is{JSON.stringify(data)}</div>;
};

export default SingleBlogPage;
