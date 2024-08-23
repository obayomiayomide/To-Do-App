import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Container>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
