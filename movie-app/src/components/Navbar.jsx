const Navbar = () => {
  return (
    <div className="flex container justify-between p-4">
      <h1>MovieMania</h1>
      <div className="flex gap-4">
        <input type="text" className="border border-red-500 p-2 w-96" />
        <button>Search</button>
      </div>
      <button>sign in</button>
    </div>
  );
};

export default Navbar;
