import React from 'react'

export default function TodoCard(props) {
  return (
    <li class="todo-card">
      <p>{props.todo.title}</p>
      <p>{props.todo.content}</p>
    </li>
  )
}
