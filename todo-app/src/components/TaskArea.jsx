import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskArea = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TaskArea;
