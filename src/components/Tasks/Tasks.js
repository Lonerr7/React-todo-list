import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskTC,
  editTaskInfoTC,
  getLocalTodosTC,
  setIsInitializedAC,
  toggleTaskCompletionTC,
} from '../../redux/todoReducer';
import Task from './Task/Task';
import s from './Tasks.module.scss';

const TasksContainer = (props) => {
  useEffect(() => {
    props.getLocalTodos();
    props.setIsInitializedSuccess(true);
    // eslint-disable-next-line
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
      editTaskInfo={props.editTaskInfo}
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
  getLocalTodos: getLocalTodosTC,
  editTaskInfo: editTaskInfoTC,
  setIsInitializedSuccess: setIsInitializedAC,
};

export default connect(mapStateToProps, dispatchToProps)(TasksContainer);
