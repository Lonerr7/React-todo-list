import { connect } from 'react-redux';
import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';

const App = () => {
  return (
    <div className="app__wrapper">
      <TasksCount />
      <TasksInput />
      <Tasks />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const dispatchToProps = {};

export default connect(mapStateToProps, dispatchToProps)(App);
