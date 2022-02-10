import { connect } from 'react-redux';
import {
  deleteTaskAC,
  toggleTaskCompletionAC,
} from '../../redux/todoReducer';
import Task from './Task/Task';
import s from './Tasks.module.scss';

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
  deleteTask: deleteTaskAC,
  toggleTaskCompletion: toggleTaskCompletionAC,
 };

export default connect(mapStateToProps, dispatchToProps)(Tasks);
