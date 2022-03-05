import { TaskBox } from '../../../components/TaskBox';
import './style.scss';
import { CircularProgress } from "@mui/material";
import { useState } from "react";

import {
  useUpdateUserCollection,
  useCreateNewTask,
  useUserCollection,
} from "../../../services/firebase/firebase";


export function TaskList() {
  const [taskTitle, setTaskTitle] = useState("");
  const [value, loading, error] = useUserCollection();
  const updateTask = useUpdateUserCollection();

  const createNewTask = useCreateNewTask();

  async function handleCompleteTask(title) {
    try {
      await updateTask(title);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleNewTask() {
    try {
      createNewTask(taskTitle);
      setTaskTitle("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="tasklist-conteudo">
      <div>
        <h1>Adicionar novas tarefas</h1>
        <div className="tasklist-novatarefa">
          <input
            type="text"
            id="Nova tarefa"
            placeholder="Adicionar tarefa..."
            value={taskTitle}
            onChange={(evt) => setTaskTitle(evt.target.value)}
          />
          <button onClick={handleNewTask}>+</button>
        </div>
        <div style={{ textAlign: "center" }}>
          {loading && <CircularProgress sx={{ width: "100%", mt: 3 }} />}
          {value &&
            value
              .filter(({ isCompleted }) => !isCompleted)
              .map((task, idx) => (
                <TaskBox
                  key={idx}
                  title={task.title}
                  handleComplete={() => handleCompleteTask(task.title)}
                />
              ))}
        </div>
      </div>

      <div className="tasklist-tarefaconcluida">
        <h1>Tarefas completas</h1>
        {value &&
          value
            .filter(({ isCompleted }) => isCompleted)
            .map((task, idx) => (
              <TaskBox key={idx} title={task.title} isCompleted />
            ))}
      </div>
    </section>
  );
}
