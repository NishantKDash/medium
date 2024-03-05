import { useState, useEffect } from "react";
import GetBlog from "../axios/GetBlog";
import GetBlogs from "../axios/GetBlogs";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    Id: string;
    name: string;
    about: string;
  };
  category: string;
  publishedAt: string;
}

export const useBlog = () => {
  const [load, setLoad] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    GetBlogs()
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoad(false);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  return { load, blogs };
};

export const useSingleBlog = (token: string) => {
  const [load, setLoad] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    GetBlog(token)
      .then((res) => {
        setBlog(res.data.blog);
        setLoad(false);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  return { load, blog };
};
