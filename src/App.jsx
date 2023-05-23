import { useSelector } from 'react-redux';
import Posts from './components/posts/Posts';
import Form from './components/todos/Form';
import TodoItem from './components/todos/TodoItem';
import User from './components/user/User';

function App() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="min-h-screen h-full w-screen bg-indigo-400">
      <div className="container mx-auto px-4">
        <header className="flex gap-20 ">
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit State Change</h1>
            <User />
          </div>
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit Todo App</h1>
            <Form />
            {todos?.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
          <div className="w-1/3">
            <h1 className="font-bold my-5">Redux Toolkit Async Thunk</h1>
            <Posts />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
