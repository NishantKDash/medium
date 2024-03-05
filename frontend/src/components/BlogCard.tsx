import { format } from "date-fns";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  author: string;
  topic: string;
  title: string;
  content: string;
  date: string;
}
const BlogCard = ({ id, author, topic, title, content, date }: Props) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col h-72  justify-center border-b border-slate-200  w-full cursor-pointer hover:bg-slate-50 hover:rounded-lg m-10 lg:m-1">
        <div className="p-4">
          <div className="flex items-center">
            <div className="rounded-full bg-black">
              <p className="font-semibold text-white px-2">{author[0]}</p>
            </div>
            <div className="font-semibold mx-1">{author}</div>
            <div className="font-extrabold mx-1">
              <p className="mb-1.5">.</p>
            </div>
            <div className="font-semibold text-slate-600 text-sm md:text-base">
              {format(date, "MMMM dd, yyyy")}
            </div>
          </div>

          <div className="font-bold text-xs md:text-2xl lg:text-3xl mt-2 truncate">
            {title.length > 150 ? title.substring(0, 100) + ". . ." : title}
          </div>

          <div className="pt-2 w-4/5 text-sm md:text-base invisible sm:visible">
            {content.length > 300
              ? content.substring(0, 300) + ". . ."
              : content}
          </div>
          <div className="flex mt-10 invisible lg:visible">
            <div className="mr-4 bg-slate-200 rounded-full">
              <p className="px-2">{topic}</p>
            </div>
            <p className="text-slate-600 font-medium">
              {Math.ceil(content.length / 800)} min read
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
