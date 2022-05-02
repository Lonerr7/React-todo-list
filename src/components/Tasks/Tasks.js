import Task from './Task/Task';
import s from './Tasks.module.scss';
import { useSelector } from 'react-redux';

const TasksContainer = (props) => {
  return <Tasks {...props} />;
};

const Tasks = (props) => {
  const tasks = useSelector((state) => state.todos.todos);
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

export default TasksContainer;
