export interface Todo {
    id: number
    text: string
    completed: boolean
    priority: 'low' | 'medium' | 'high' | 'urgent'
    dueDate: string | null
  }