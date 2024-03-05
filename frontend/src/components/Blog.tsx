import { useParams } from "react-router-dom";
import { useSingleBlog } from "../hooks";
import Appbar from "./Appbar";
import { format } from "date-fns";
const Blog = () => {
  const params = useParams();
  const id = params.id || "";

  const { load, blog } = useSingleBlog(id);
  if (load) return <div>Loading...</div>;
  else
    return (
      <div>
        <Appbar></Appbar>
        <div className="flex flex-row justify-center">
          <div className="mt-10 ml-20 w-2/3">
            <div className="text-5xl font-extrabold">{blog?.title}</div>
            <div className="my-6 text-xl text-slate-600">
              Posted on{" "}
              {format(blog?.publishedAt || "dd/mm/yyyy", "MMMM dd, yyyy")}
            </div>
            <p className="text-lg text-black font-medium">{blog?.content}</p>
          </div>
          <div className="w-1/3 mt-10 ml-20 invisible sm:visible">
            <div className="text-2xl">Author</div>
            <div className="flex flex-row mt-4">
              <div className="rounded-full bg-black my-5 px-0.5 py-0.5 invisible md:visible">
                <p className="font-semibold text-white px-3 py-0.5">
                  {blog?.author.name[0]}
                </p>
              </div>
              <div className="ml-4">
                <div className="text-4xl font-bold mb-2">
                  {blog?.author.name}
                </div>
                <div className="text-xl text-slate-600 invisible md:visible">
                  {blog?.author.about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;
