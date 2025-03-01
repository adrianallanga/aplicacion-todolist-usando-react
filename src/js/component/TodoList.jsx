import React, { useState } from "react"

const todolist = () => {
    const [tasks, setTasks] = useState([""]);
    console.log(tasks)
    const [newTask, setNewTask] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    }
    const handleKeyDown = (evento) => {
        if (evento.key === "Enter") {
            //handleSubmit()
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    }
    const removeTasks = (index) => {
        const copyTask = [...tasks]
        setTasks(copyTask.filter(task => task !== tasks[index]))
    }
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="haz las tareas"
                />

            </form>
            {tasks.map((iten, index) => {
                return <div key={index} className="">
                    <p>{iten}</p>
                    <button onClick={() => removeTasks(index)}>x</button>
                </div>
            })}
        </div>
    )

}
export default todolist;