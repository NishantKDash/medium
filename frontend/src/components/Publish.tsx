import Appbar from "./Appbar";
import { useState } from "react";
import { CreateBlogInput } from "@lo_ewolf/medium-common";
import moment from "moment";
import CreateBlog from "../axios/CreateBlog";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [blog, setBlog] = useState<CreateBlogInput>({
    title: "",
    content: "",
    publishedAt: moment(new Date()).format("DD/MM/YYYY"),
    category: "",
  });

  const navigate = useNavigate();
  return (
    <div>
      <Appbar></Appbar>
      <div className="w-screen h-screen flex m-10">
        <div
          className="flex pt-14 mr-10 text-4xl pb-2 font-normal text-slate-600 cursor-pointer hover:text-green-700"
          onClick={() => {
            CreateBlog(blog)
              .then((res) => {
                alert("Blog Published !!");
                navigate("/blogs");
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          +
        </div>
        <div className="flex flex-col h-full w-full">
          <input
            placeholder="Category"
            className="w-2/3 focus:outline-none"
            onChange={(e) => {
              setBlog({
                ...blog,
                category: e.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Title"
            className="w-2/3 h-36 cursor-pointer text-5xl border-transparent outline-transparent mt-2 focus:outline-none"
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
              });
            }}
          ></input>
          <input
            placeholder="Tell your story..."
            className="w-2/3 h-36 mt-2 focus:outline-none"
            onChange={(e) => {
              setBlog({
                ...blog,
                content: e.target.value,
              });
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Publish;
