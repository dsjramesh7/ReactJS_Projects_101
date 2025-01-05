import { useSelector, useDispatch } from "react-redux";
import Button from "./UI/Button";
import { deleteTask, editTask, toggleTaskCompletion } from "../redux/taskSlice";
import { useState } from "react";

const TaskList = () => {
  const allTodos = useSelector((state) => state.Todos);
  console.log("allTodos", allTodos);
  const dispatch = useDispatch();
  // const [editInputValue, setEditInputValue] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [updatedTaskName, setUpdatedTaskName] = useState("");

  // to delete task from tasklist
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // to edit task
  const handleEditTask = (taskId) => {
    // console.log(taskId, taskName);
    dispatch(editTask({ taskId, taskName: updatedTaskName }));
    setEditMode(null);
  };

  // for completeing task
  const handleCheckBox = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
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
                <input
                  type="checkbox"
                  onChange={() => handleCheckBox(todo.id)}
                  checked={todo.completed}
                />
                <div className="flex gap-2">
                  {/* <p>{todo.id}</p> */}
                  {editMode === todo.id ? (
                    <input
                      type="text"
                      placeholder="rename task"
                      value={updatedTaskName}
                      onChange={(e) => setUpdatedTaskName(e.target.value)}
                    />
                  ) : (
                    <h2
                      className={`font-semibold text-2xl ${
                        todo.completed ? "line-through text-red-500" : ""
                      }`}
                    >
                      {todo.taskName}
                    </h2>
                  )}
                </div>
                <div className="flex gap-2">
                  {editMode === todo.id ? (
                    <Button
                      onClick={() => handleEditTask(todo.id)}
                      color="success"
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setEditMode(todo.id);
                        setUpdatedTaskName(todo.taskName);
                      }}
                      variant="outline"
                      color="success"
                    >
                      Edit
                    </Button>
                  )}
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
