import BlogCard from "./BlogCard";
import Appbar from "./Appbar";
import { useBlog } from "../hooks";

const Blogs = () => {
  const { load, blogs } = useBlog();
  if (load) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="hidden lg:block">
        <Appbar></Appbar>
      </div>

      {blogs.map((blog) => {
        return (
          <div className="mx-20">
            <BlogCard
              key={blog.id}
              id={blog.id}
              author={blog.author.name}
              topic={blog.category}
              title={blog.title}
              content={blog.content}
              date={blog.publishedAt}
            ></BlogCard>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
