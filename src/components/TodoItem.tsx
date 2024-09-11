import React from "react";
import { Todo } from "../../types/todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  const priorityColors = {
    low: "bg-green-100",
    medium: "bg-card",
    high: "bg-orange-100",
    urgent: "bg-red-100",
  };

  return (
    <div
      className={`flex items-center justify-between ${
        priorityColors[todo.priority]
      }`}
    >
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={onToggle}
          className="mr-2 w-5 h-5 bg-background"
        />
        <label className="text-card-foreground">
          <span
            className={`text-sm ${
              todo.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {todo.text}
          </span>
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="px-2 py-1 text-xs">
          High
        </Badge>
        <div className="text-sm text-muted-foreground">{todo.dueDate}</div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-muted/50"
        >
          <FilePenIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="text-muted-foreground hover:bg-muted/50"
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

export default TodoItem;
