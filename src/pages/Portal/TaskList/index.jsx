import { TaskBox } from '../../../components/TaskBox';
import './style.css';

export function TaskList() {
	return (
		<section className="tasklist-conteudo">
			<div>
				<h1>Adicionar novas tarefas</h1>
				<div className="tasklist-novatarefa">
					<input type="text" id="Nova tarefa" placeholder="Adicionar tarefa..." />
					<button>+</button>
				</div>
				<div>
					<TaskBox title="Teste 2" />
				</div>
			</div>

			<div className="tasklist-tarefaconcluida">
				<h1>Tarefas completas</h1>
				<TaskBox title="Teste" isCompleted />
			</div>
		</section>
	);
}
