import React from "react";

export default function TodoCard(props) {
  const {
    children,
    edit,
    handleAddEdit,
    edittedValue,
    setEdittedValue,
    todoKey,
    handleEditTodo,
    handleDelete,
  } = props;

  return (
    <div className="p-2 relative sm:p-3 border flex items-stretch border-white border-solid rounded-md ">
      <div className="flex-1 flex rounded-md">
        {!(edit === todoKey) ? (
          <>{children}</>
        ) : (
          <input
            className="bg-inherit flex-1 text-white outline-none"
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        )}
      </div>
      <div className="flex items-center rounded-md ">
        {edit === todoKey ? (
          <i
            onClick={handleEditTodo}
            className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer "
          ></i>
        ) : (
          <i
            onClick={handleAddEdit(todoKey)}
            className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"
          ></i>
        )}
        <i
          onClick={handleDelete(todoKey)}
          className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"
        ></i>
      </div>
    </div>
  );
}
