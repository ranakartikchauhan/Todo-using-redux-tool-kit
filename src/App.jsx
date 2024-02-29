import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./features/todo/todoSlice";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import TodoButton from "./components/todoButton";

function App() {
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const reversedTodos = [...todos].reverse();

  const onChange = (value, setState) => {
    setState(value);
  };

  const setTodo = () => {
    dispatch(addTodo({ description }));
    setDescription("");
  };
  const delToDo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const editTodo = () => {
    dispatch(updateTodo({ id, description }));
    setDescription("");
    setId("");
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div>
          <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div>
              <div className="bg-white items-center justify-center min-h-screen flex">
                <div className="w-full bg-gray-100 rounded-lg shadow-lg px-6 py-8 max-w-lg">
                  <div className="text-gray-600 text-center mb-6">
                    <p className="text-2xl font-semibold">My Todo List</p>
                  </div>
                  <div className="mb-6">
                    <div className="items-center flex">
                      <input
                        type="text"
                        placeholder="New task"
                        value={description}
                        onChange={(e) => {
                          onChange(e.target.value, setDescription);
                        }}
                        className="focus:border-indigo-700 focus:outline-none
                                        focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300
                                        text-black bg-gray-100 font-normal w-full h-12 text-xs rounded-md shadow-sm"
                      />
                      {!id && <TodoButton text="Add" onClick={setTodo} />}
                      {id && <TodoButton text="Done" onClick={editTodo} />}
                    </div>
                  </div>
                  {reversedTodos.map((todo) => {
                    return (
                      <ul key={todo.id}>
                        <li className="justify-between items-center bg-white dark:bg-gray-800 rounded-md px-4 py-2 mb-4 flex shadow">
                          <span className="text-gray-700 dark:text-white">
                            {todo.description}
                          </span>
                          <span className="px-4 justify-between flex">
                            <button
                              className="mx-2"
                              type="button"
                              onClick={() => {
                                setDescription(todo.description);
                                setId(todo.id);
                              }}
                            >
                              <MdEdit />
                            </button>
                            <button
                              type="button"
                              className="mx-2"
                              onClick={() => {
                                delToDo(todo.id);
                              }}
                            >
                              <AiFillDelete />
                            </button>
                          </span>
                        </li>
                      </ul>
                    );
                  })}

                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
