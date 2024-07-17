import { useState } from "react";

const items = [
  {
    title: "Task 1",
    isCompleted: "NOT COMPLETED",
  },
  { title: "Task 2", isCompleted: "COMPLETED" },
  { title: "Task 3", isCompleted: "NOT COMPLETED" },
  { title: "Task 4", isCompleted: "COMPLETED" },
];

const Tasks = () => {
  const [selectTask, setSelectTask] = useState(null);

  return (
    <>
      <h2>8: Сегизинчи уй тапшырма</h2>
      <button onClick={() => setSelectTask(null)}>All</button>
      <button onClick={() => setSelectTask("COMPLETED")}>Completed</button>
      <button onClick={() => setSelectTask("NOT COMPLETED")}>
        Uncompleted
      </button>

      {items.map((item, index) => {
        if (!selectTask || item.isCompleted === selectTask) {
          return (
            <p key={index}>
              {item.title} {item.isCompleted}
            </p>
          );
        }
      })}
    </>
  );
};
export default Tasks;
