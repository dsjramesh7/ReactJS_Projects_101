const Category = () => {
  const categories = ["All", "Pending", "Completed"];
  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 font-bold text-lg text-gray-800">
      {categories && categories.length > 0 ? (
        categories.map((category, index) => {
          return (
            <h1
              key={index}
              className="cursor-pointer hover:text-green-500 transition-colors duration-300"
            >
              {category}
            </h1>
          );
        })
      ) : (
        <p>no categories present</p>
      )}
    </div>
  );
};

export default Category;
