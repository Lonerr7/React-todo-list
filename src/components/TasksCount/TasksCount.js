import s from './TasksCount.module.scss';
import { useSelector } from 'react-redux';

const TasksCount = () => {
  const tasksCount = useSelector((state) => state.todos.filteredTodos.length);

  return <div className={s.tasksCount}>Всего задач: {tasksCount}</div>;
};

export default TasksCount;
