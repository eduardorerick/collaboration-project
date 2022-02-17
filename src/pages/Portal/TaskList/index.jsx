import './style.css'

export function TaskList() {
	return (
		<section>
		<div className='conteudo'>
			<h1>Adicionar novas tarefas</h1>
			<div className='novatarefa'>
				<input type="text"
				 id="Nova tarefa"
				 placeholder='Adicionar tarefa...'
				/>
				<button>+</button>

				<div className='tarefa'>
					<span className='tarefa1'>Título da tarefa</span>
					<div className='btnação'>
						<button>✔</button>
						<button>✖</button>
					</div>
				</div>
				
			</div>
			
			<div className='tarefaconcluida'>
				<h1>Tarefas completas</h1>
				<span className='tarefaconcluida1'>Título da tarefa</span>
					<div className='removertarefa'>
						<button>✖</button>
					</div>
			</div>
			
		</div>
		</section>
	);
}
