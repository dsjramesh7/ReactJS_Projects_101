import Button from "./UI/Button";

const TaskList = () => {
  return (
    <div className="flex justify-between px-5 items-center">
      <input type="checkbox" />
      <div className="flex gap-2">
        <p>id</p>
        <h2>task1</h2>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" color="success">
          Edit
        </Button>
        <Button color="sucess">Delete</Button>
      </div>
    </div>
  );
};

export default TaskList;
