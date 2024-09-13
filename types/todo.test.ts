import { Todo } from './todo';

describe('Todo Type', () => {
  it('should have the correct properties', () => {
    const todo: Todo = {
      id: 1,
      text: 'Sample Task',
      completed: false,
      priority: 'medium',
      dueDate: '2024-09-13',
    };

    expect(todo).toHaveProperty('id');
    expect(todo).toHaveProperty('text');
    expect(todo).toHaveProperty('completed');
    expect(todo).toHaveProperty('priority');
    expect(todo).toHaveProperty('dueDate');
  });

  it('should have the correct types for each property', () => {
    const todo: Todo = {
      id: 1,
      text: 'Sample Task',
      completed: false,
      priority: 'medium',
      dueDate: '2024-09-13',
    };

    expect(typeof todo.id).toBe('number');
    expect(typeof todo.text).toBe('string');
    expect(typeof todo.completed).toBe('boolean');
    expect(['low', 'medium', 'high', 'urgent']).toContain(todo.priority);
    expect(typeof todo.dueDate).toBe('string');
  });
});
