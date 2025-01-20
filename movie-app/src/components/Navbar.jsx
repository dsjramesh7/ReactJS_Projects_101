import Button from "./sharedUI/Button";

const Navbar = () => {
  return (
    <div className="shadow-xl w-full">
      <div className="container mx-auto">
        <div className="flex justify-between p-4">
          <h1>MovieMania</h1>
          <div className="flex gap-4">
            <input type="text" className="border border-red-500 p-2 w-96" />
            <Button variant="outline" color={"primary"} btnName={"Search"} />
          </div>
          <Button variant="primary" color="warn" btnName={"Sign Out"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
