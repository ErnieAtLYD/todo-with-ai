import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Checkbox id={`task-${todo.id}`} checked={todo.completed} onCheckedChange={onToggle} className="mr-2" />
        <label
          htmlFor={`task-${todo.id}`}
          className={`text-card-foreground ${todo.completed ? 'line-through' : ''} ${
            todo.priority === 'urgent' ? 'text-[#ff0000] font-bold' : ''
          }`}
        >
          {todo.text}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="px-2 py-1 text-xs">
          {todo.priority}
        </Badge>
        <div className="text-sm text-muted-foreground">Due: {todo.dueDate}</div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50">
          <FilePenIcon className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50" onClick={onDelete}>
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default TodoItem