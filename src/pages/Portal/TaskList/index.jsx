import './style.css';

export function TaskList() {
	return (
		<section className="tasklist-conteudo">
			<div>
				<h1>Adicionar novas tarefas</h1>
				<div className="tasklist-novatarefa">
					<input type="text" id="Nova tarefa" placeholder="Adicionar tarefa..." />
					<button>+</button>

					<div className="tasklist-tarefa">
						<span className="tarefa1">Título da tarefa</span>
						<div className="btnação">
							<button>✔</button>
							<button>✖</button>
						</div>
					</div>
				</div>
			</div>

			<div className="tasklist-tarefaconcluida">
				<h1>Tarefas completas</h1>
				<span className="tarefaconcluida1">Título da tarefa</span>
				<div className="removertarefa">
					<button>✖</button>
				</div>
			</div>
		</section>
	);
}
