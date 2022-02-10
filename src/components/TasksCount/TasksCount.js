import { connect } from 'react-redux';
import s from './TasksCount.module.scss';

const TasksCount = (props) => {
  return <div className={s.tasksCount}>Всего задач: {props.tasksCount}</div>;
};

const mapStateToProps = (state) => ({
  tasksCount: state.todo.todos.length,
});

export default connect(mapStateToProps, null)(TasksCount);
