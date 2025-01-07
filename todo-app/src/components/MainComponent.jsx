import Category from "./Category";
import TaskArea from "./TaskArea";

const MainComponent = () => {
  return (
    <div className="flex gap-4 h-4/5 w-4/5 border border-red-500 shadow-lg rounded-lg bg-white">
      <div className="w-1/5 bg-gray-100 rounded-lg p-4 shadow-md">
        <Category />
      </div>
      <div className="w-1 h-full bg-green-500"></div>
      <div className="w-4/5 bg-gray-50 rounded-lg p-4 shadow-md">
        <TaskArea />
      </div>
    </div>
  );
};

export default MainComponent;
