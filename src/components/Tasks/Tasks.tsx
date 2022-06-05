import Task from './Task/Task';
import s from './Tasks.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import { selectTodosByFilter } from '../../redux/selectors';

const Tasks: React.FC = () => {
  const tasks = useAppSelector(selectTodosByFilter);
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
