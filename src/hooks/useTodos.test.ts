import { renderHook, act } from '@testing-library/react';
import { useTodos } from './useTodos';

describe('useTodos Hook', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('New Task');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('New Task');
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('New Task');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  xit('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('New Task');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  xit('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Task 1');
      result.current.addTodo('Task 2');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
      result.current.clearCompletedTodos();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Task 2');
  });
});