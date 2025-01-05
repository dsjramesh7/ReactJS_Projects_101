const Category = () => {
  const categories = ["All", "Pending", "Completed"];
  return (
    <div className="flex flex-col justify-center h-full items-center gap-5 font-bold text-xl">
      {categories && categories.length > 0 ? (
        categories.map((category, index) => {
          return (
            <h1 key={index} className="cursor-pointer">
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
