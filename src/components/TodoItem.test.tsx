import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo';

describe('TodoItem Component', () => {
  const mockTodo: Todo = {
    id: 1,
    text: 'Test Task',
    completed: false,
    priority: 'medium',
    dueDate: '2024-09-13',
  };

  const onToggle = jest.fn();
  const onDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with given props', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />);
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-09-13/i)).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  xit('calls onDelete when delete button is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />);
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
