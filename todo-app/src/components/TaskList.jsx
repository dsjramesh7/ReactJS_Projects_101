import { useSelector, useDispatch } from "react-redux";
import Button from "./UI/Button";
import { deleteTask, editTask, toggleTaskCompletion } from "../redux/taskSlice";
import { useState } from "react";

const TaskList = () => {
  const allTodos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [updatedTaskName, setUpdatedTaskName] = useState("");

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    dispatch(editTask({ taskId, taskName: updatedTaskName }));
    setEditMode(null);
  };

  const handleCheckBox = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  return (
    <div className="mt-10">
      {allTodos && allTodos.length > 0 ? (
        <div className="space-y-4">
          {allTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onChange={() => handleCheckBox(todo.id)}
                  checked={todo.completed}
                  className="h-5 w-5 accent-green-500 cursor-pointer"
                />
                {editMode === todo.id ? (
                  <input
                    type="text"
                    placeholder="Rename task"
                    value={updatedTaskName}
                    onChange={(e) => setUpdatedTaskName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                ) : (
                  <h2
                    className={`text-lg font-semibold ${
                      todo.completed
                        ? "line-through text-red-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.taskName}
                  </h2>
                )}
              </div>
              <div className="flex gap-2">
                {editMode === todo.id ? (
                  <button
                    onClick={() => handleEditTask(todo.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditMode(todo.id);
                      setUpdatedTaskName(todo.taskName);
                    }}
                    className="px-3 py-1 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTask(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-xl font-bold text-gray-700">
          No Task Present!!!
        </h1>
      )}
    </div>
  );
};

export default TaskList;
