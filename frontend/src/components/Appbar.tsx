const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex">
        <div className="font-bold text-lg">Medium</div>
      </div>

      <div className="flex">
        <div className="rounded-full bg-black">
          <p className="font-semibold text-white px-2 py-0.5">N</p>
        </div>
        <div className="ml-2">Logout</div>
      </div>
    </div>
  );
};

export default Appbar;
