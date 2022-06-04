import s from './TasksCount.module.scss';
import { useAppSelector } from '../../hooks/hooks';

const TasksCount: React.FC = () => {
  const tasksCount = useAppSelector(
    (state) => state.todos.filteredTodos.length
  );

  return <div className={s.tasksCount}>Всего задач: {tasksCount}</div>;
};

export default TasksCount;
