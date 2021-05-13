import React from 'react';
export function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');
  console.log('value ', value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a new item"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="buttonadd" type="submit">
        Add
      </button>
    </form>
  );
}
