import { useSelector, useDispatch } from "react-redux";
import Button from "./UI/Button";
import { deleteTask } from "../redux/taskSlice";

const TaskList = () => {
  const allTodos = useSelector((state) => state.Todos);
  // console.log("allTodos", allTodos);
  const dispatch = useDispatch();

  // to delete task from tasklist
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <>
      {allTodos && allTodos.length > 0 ? (
        <>
          {allTodos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="flex justify-between px-5 items-center"
              >
                <input type="checkbox" />
                <div className="flex gap-2">
                  <p>{todo.id}</p>
                  <h2 className="text-red">{todo.taskName}</h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" color="success">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteTask(todo.id)}
                    color="sucess"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h1>No Task Present!!!</h1>
      )}
    </>
  );
};

export default TaskList;
