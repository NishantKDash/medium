import React from "react";
import { format } from "date-fns";

interface Props {
  author: string;
  topic: string;
  title: string;
  content: string;
  date: string;
}
const BlogCard = ({ author, topic, title, content, date }: Props) => {
  return (
    <div className="flex flex-col h-72  justify-center border-b border-slate-200  w-2/3">
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

      <div className="font-bold text-sm md:text-2xl lg:text-3xl">{title}</div>

      <div className="pt-2 w-4/5 text-sm md:text-base invisible sm:visible">
        {content.substring(0, 300)}. . .
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
  );
};

export default BlogCard;
