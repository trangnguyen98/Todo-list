import "./App.css";
import "antd/dist/antd.css";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodoForm />
    </div>
  );
}

export default App;
