import './style.css';

export function TaskBox({ title, isCompleted = false }) {
	return (
		<div className={`tasklist-tarefa ${isCompleted && 'completa'}`}>
			<span>{title}</span>
			<div className="btnação">
				{!isCompleted && <button>✔</button>}
				<button>✖</button>
			</div>
		</div>
	);
}
