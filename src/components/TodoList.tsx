'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TodoItem from './TodoItem'
import { useTodos } from '@/hooks/useTodos'

export const TodoList = () => {
  const [newTask, setNewTask] = useState('')
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompletedTodos } = useTodos()

  const handleAddTodo = () => {
    if (newTask.trim()) {
      addTodo(newTask.trim())
      setNewTask('')
    }
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-card-foreground">To-Do List</h1>
      </div>
      <div className="mb-4 flex items-center">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button onClick={handleAddTodo} className="ml-4 px-4 py-2 rounded-md text-primary-foreground">
          Add task
        </Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button
          variant="secondary"
          onClick={clearCompletedTodos}
          className="px-4 py-2 rounded-md text-muted-foreground"
        >
          Clear Completed Tasks
        </Button>
      </div>
    </div>
  )
}

export default TodoList
