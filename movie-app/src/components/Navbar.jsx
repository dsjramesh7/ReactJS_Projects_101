import Button from "./sharedUI/Button";

const Navbar = () => {
  return (
    <div className="shadow-md bg-gray-700 text-white w-full h-20 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold text-blue-400">
            Movie<span className="text-red-400">Mania</span>
          </h1>
          <div className="hidden md:flex items-center gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 text-white"
            />
            <Button variant="outline" color={"primary"} btnName={"Search"} />
          </div>
          <Button variant="primary" color="warn" btnName={"Sign Out"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
