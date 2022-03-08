import "./App.css";
import "antd/dist/antd.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
