import './style.css';

export function TaskBox({ title, isCompleted = false, handleComplete }) {
	return (
		<div className={`tasklist-tarefa ${isCompleted && 'completa'}`}>
			<span>{title}</span>
			<div className="btnação">
				{!isCompleted && <button onClick={handleComplete}>✔</button>}
				<button>✖</button>
			</div>
		</div>
	);
}
