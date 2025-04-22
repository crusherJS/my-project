import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to Our Todo List
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Organize your tasks efficiently with our powerful todo application.
      </p>
      
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Our Todo List
        </h2>
        
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Add
          </button>
        </div>
        
        {todos.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 py-4">
            No tasks yet. Add your first task above!
          </p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`p-3 rounded-md border flex justify-between items-center ${
                  todo.completed
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {editingId === todo.id ? (
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-grow px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      autoFocus
                    />
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <span
                        className={`${
                          todo.completed
                            ? 'line-through text-gray-500 dark:text-gray-400'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(todo.id, todo.text)}
                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    
    </div>
  );
}