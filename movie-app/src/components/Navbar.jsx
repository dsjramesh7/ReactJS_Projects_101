const Navbar = () => {
  return (
    <div className="flex container justify-between p-4">
      <h1>MovieMania</h1>
      <div className="flex gap-4">
        <input type="text" className="border border-red-500 p-2 w-96" />
        <button className="bg-blue-500">Search</button>
      </div>
      <button className="bg-red-500">sign in</button>
    </div>
  );
};

export default Navbar;
