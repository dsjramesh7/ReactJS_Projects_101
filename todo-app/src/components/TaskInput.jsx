import { useState } from "react";
import { addTask } from "../redux/taskSlice";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 1001);
  };

  // to add task in an array of taskList
  const handleAddTask = () => {
    // console.log(inputValue);
    dispatch(
      addTask({
        id: randomNumberGenerator(),
        taskName: inputValue,
        completed: false,
      })
    );
    setInputValue("");
  };

  return (
    <div className="flex gap-3 w-full justify-center items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-yellow-500 rounded-lg px-4 py-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <Button onClick={handleAddTask} color="success">
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
