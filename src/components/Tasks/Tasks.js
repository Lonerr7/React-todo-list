import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskTC,
  getLocalTodosAC,
  toggleTaskCompletionTC,
} from '../../redux/todoReducer';
import Task from './Task/Task';
import s from './Tasks.module.scss';

const TasksContainer = (props) => {
  useEffect(() => {
    if (props.todos.length === 0 && localStorage.length > 0) {
      props.getLocalTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  return <Tasks {...props} />;
};

const Tasks = (props) => {
  const tasksElements = props.todos.map((t) => (
    <Task
      key={t.id}
      id={t.id}
      taskInfo={t.task}
      isCompleted={t.isCompleted}
      deleteTask={props.deleteTask}
      toggleTaskCompletion={props.toggleTaskCompletion}
    />
  ));

  return <div className={s.tasks__box}>{tasksElements}</div>;
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const dispatchToProps = {
  deleteTask: deleteTaskTC,
  toggleTaskCompletion: toggleTaskCompletionTC,
  getLocalTodos: getLocalTodosAC,
};

export default connect(mapStateToProps, dispatchToProps)(TasksContainer);
