import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]); // Array to hold tasks
  const [inputValue, setInputValue] = useState(""); // Track input text

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]); // Add new task to the array
      setInputValue(""); // Clear the input box
    }
  };

  // NEW: The logic to remove a task
  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md min-h-[50vh] p-5 w-80 shadow-lg">
        <h1 className="text-center font-bold mb-4">ToDo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="border rounded-md p-2 flex-grow"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update state as you type
            placeholder="Add new task"
          />
          <button
            onClick={addTask}
            className="p-2 bg-green-500 rounded-md text-white hover:bg-green-600"
          >
            Add
          </button>
        </div>

        {/* This is how we display the list in React */}
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div className="flex">
              {" "}
              <p key={index} className="p-2 bg-gray-100 rounded border flex-1">
                {task}{" "}
              </p>{" "}
              <button
                onClick={() => deleteTask(index)}
                className="border bg-red-500 text-white rounded-md p-2 font-bold px-2 hover:text-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
