import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../store/slices/todoSlice';
import TodoItem from './TodoItem';

const Form = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const { todos } = useSelector(state => state.todo);

  const addTodoHandler = () => {
    const todo = {
      id: uuidv4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue('');
  };

  return (
    <>
      <form className="w-full flex" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={todoValue}
          placeholder="Type something..."
          className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
          onChange={e => setTodoValue(e.target.value)}
        />
        <button
          type="submit"
          className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
          onClick={addTodoHandler}
        >
          Submit
        </button>
      </form>

      {todos?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Form;
