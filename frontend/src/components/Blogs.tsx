import React from "react";
import BlogCard from "./BlogCard";
import Appbar from "./Appbar";

const blogs = [
  {
    author: "Peter V.",
    topic: "Side Hustle",
    title:
      "How an Ugly Single Page Website Makes $5000 a Month with affiliate Marketing",
    content:
      "No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man al;jsdkfjals;kdjfasdfjkalshdfjklahsdkjflhasdkjlfhkjasldhfjkahsdkjfhlskjdhfkljahsdfjklhasdkjfhk",
    date: "12/12/12",
  },
  {
    author: "Peter V.",
    topic: "Side Hustle",
    title:
      "How an Ugly Single Page Website Makes $5000 a Month with affiliate Marketing",
    content:
      "No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man al;jsdkfjals;kdjfasdfjkalshdfjklahsdkjflhasdkjlfhkjasldhfjkahsdkjfhlskjdhfkljahsdfjklhasdkjfhk",
    date: "12/12/12",
  },
  {
    author: "Peter V.",
    topic: "Side Hustle",
    title:
      "How an Ugly Single Page Website Makes $5000 a Month with affiliate Marketing",
    content:
      "No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man al;jsdkfjals;kdjfasdfjkalshdfjklahsdkjflhasdkjlfhkjasldhfjkahsdkjfhlskjdhfkljahsdfjklhasdkjfhk",
    date: "12/12/12",
  },
  {
    author: "Peter V.",
    topic: "Side Hustle",
    title:
      "How an Ugly Single Page Website Makes $5000 a Month with affiliate Marketing",
    content:
      "No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for man al;jsdkfjals;kdjfasdfjkalshdfjklahsdkjflhasdkjlfhkjasldhfjkahsdkjfhlskjdhfkljahsdfjklhasdkjfhk",
    date: "12/12/12",
  },
];
const Blogs = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Appbar></Appbar>
      </div>
      {blogs.map((blog) => {
        return (
          <div className="mx-20">
            <BlogCard
              author={blog.author}
              topic={blog.topic}
              title={blog.title}
              content={blog.content}
              date={blog.date}
            ></BlogCard>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
