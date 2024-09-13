import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';
import { useTodos } from '@/hooks/useTodos';

// Mock the useTodos hook
jest.mock('@/hooks/useTodos');

describe('TodoList Component', () => {
  const mockUseTodos = useTodos as jest.MockedFunction<typeof useTodos>;

  beforeEach(() => {
    mockUseTodos.mockReturnValue({
      todos: [],
      addTodo: jest.fn(),
      toggleTodo: jest.fn(),
      deleteTodo: jest.fn(),
      clearCompletedTodos: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<TodoList />);
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  });

  it('adds a new task', () => {
    const addTodo = jest.fn();
    mockUseTodos.mockReturnValueOnce({
      todos: [],
      addTodo,
      toggleTodo: jest.fn(),
      deleteTodo: jest.fn(),
      clearCompletedTodos: jest.fn(),
    });

    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByText(/add task/i);

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith('New Task');
  });
});
