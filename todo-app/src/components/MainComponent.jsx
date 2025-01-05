import Category from "./Category";
import TaskArea from "./TaskArea";

const MainComponent = () => {
  return (
    <div className="flex gap-4 h-4/5 w-4/5 border border-red-500">
      <div className="w-1/5">
        <Category />
      </div>
      <div className="border border-green-500 w-1 h-5/5 bg-green-500"></div>
      <div className="w-4/5">
        <TaskArea />
      </div>
    </div>
  );
};

export default MainComponent;
