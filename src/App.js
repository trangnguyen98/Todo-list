import "./App.css";
import "antd/dist/antd.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;
