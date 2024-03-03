import { useParams } from "react-router-dom";

const Error = () => {
  const param = useParams();
  return (
    <div className="text-center mt-2">
      <h1 className="font-bold">No such path /{param["*"]}</h1>
    </div>
  );
};

export default Error;
