import Button from "./UI/Button";

const TaskInput = () => {
  return (
    <div className="flex gap-3 w-full justify-center">
      <input
        type="text"
        className="border-2 border-yellow-500 w-4/5 px-4 py-2"
      />
      <Button color="success">Add</Button>
    </div>
  );
};

export default TaskInput;
