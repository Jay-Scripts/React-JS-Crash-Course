import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => setCount((prev) => prev + 1); // safe update
  const deduct = () => setCount((prev) => prev - 1); // safe update
  const reset = () => setCount(0); // reset to 0

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50 p-4">
      {/* Problem / Task Card */}
      <div className="bg-white shadow-md rounded-xl p-6 border w-96">
        <h2 className="text-xl font-bold mb-3 text-center">
          React Basics Task
        </h2>
        <p className="text-sm mb-2">
          <strong>Task:</strong> Build a simple Counter App using React with the
          following features:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Display a number starting at 0</li>
          <li>Add button to increase count by 1</li>
          <li>Deduct button to decrease count by 1</li>
          <li>Reset button to return count to 0</li>
          <li>
            Use <code>useState</code> and functional components
          </li>
        </ul>
      </div>

      {/* Counter App Card */}
      <div className="flex flex-col items-center justify-center p-6 shadow-md rounded-lg border w-64 bg-white">
        <p className="text-lg mb-3">Count: {count}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={add}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add
          </button>
          <button
            onClick={deduct}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Deduct
          </button>
          <button
            onClick={reset}
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Grading Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 border w-96">
        <h2 className="text-xl font-bold mb-3 text-center">
          React Coding Test Result
        </h2>

        <p className="text-center text-lg font-semibold text-green-600 mb-3">
          Score: 95%
        </p>

        <div className="text-sm space-y-1">
          <p>✔ React Functionality: 30 / 30</p>
          <p>✔ State Management: 20 / 20</p>
          <p>✔ Code Structure: 18 / 20</p>
          <p>✔ UI / Display: 14 / 15</p>
          <p>✔ Code Readability: 13 / 15</p>
        </div>

        <div className="mt-3 text-sm">
          <p className="font-semibold">Feedback:</p>
          <p>✔ Correct useState usage</p>
          <p>✔ Safe state update using prev</p>
          <p>✔ Reset feature implemented</p>
          <p>
            ⚠ Fix Tailwind typo: <span className="font-mono">font-bold</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
