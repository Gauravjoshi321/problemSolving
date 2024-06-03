import { useState } from "react";

export default function Todo() {
  const [list, setList] = useState(["Wakeup", "Workout", "Bath", "Breakfast"]);
  const [addTodoValue, setAddTodoValue] = useState("")
  const [formData, setFormData] = useState({})


  function handleAdd() {
    if (addTodoValue === "") return;
    setList(list => [...list, addTodoValue]);
    setAddTodoValue("")
  }

  function handleChange(val) {
    setAddTodoValue(val);
  }

  function handleDelete(todo) {
    const li = list.filter(li => li !== todo);
    setList(li);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleCheck(name) {
    setFormData({ ...formData, [name]: true })
  }

  console.log(formData);


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {
        list.map((todo) => (
          <div key={todo}>
            <label >
              <input
                type="checkbox"
                name={todo}
                defaultChecked={false}
                onChange={() => handleCheck(todo)}
              />
              {todo}
            </label>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        ))
      }
      <input type="text" value={addTodoValue} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button type="submit">Submit</button>
    </form>
  )
}