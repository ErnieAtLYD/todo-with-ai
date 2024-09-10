import TodoList from '../src/components/TodoList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'A simple todo list application',
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <TodoList />
    </div>
  )
}
