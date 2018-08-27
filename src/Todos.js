import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<li
					key={todo.id}
					className="list-group-item text-dark text-left">
						{todo.text} 
							<span
								className="float-right text-danger delete"
								onClick={() => deleteTodo(todo.id)}>
									<i className="fas fa-trash-alt"></i>
									<span className="tooltips">Remove</span>
							</span>
				</li>
			)
		})
	) : (
		<h3 className="mt-3">No Todos here, add some!</h3>
		)

	return (
		<ul className="list-group">
			{todoList}
		</ul>
	)
}

export default Todos;