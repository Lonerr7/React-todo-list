import Task from './Task/Task';
import s from './Tasks.module.scss';
import { useAppSelector } from '../../hooks/hooks';

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.todos.filteredTodos);
  const taskElements = tasks.map((t) => (
    <Task
      taskInfo={t.taskText}
      key={t.id}
      id={t.id}
      isCompleted={t.isCompleted}
    />
  ));

  return <div className={s.tasks__box}>{taskElements}</div>;
};

export default Tasks;
