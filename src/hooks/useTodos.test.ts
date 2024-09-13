import { renderHook, act } from '@testing-library/react-hooks';
import { useTodos } from './useTodos';

describe('useTodos Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with no todos', () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  it('should add a new todo', () => {
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
      result.current.toggleTodo(result.current.todos[0].id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('New Task');
      result.current.deleteTodo(result.current.todos[0].id);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Task 1');
      result.current.addTodo('Task 2');
      result.current.toggleTodo(result.current.todos[0].id);
      result.current.clearCompletedTodos();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Task 2');
  });
});
