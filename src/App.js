import { connect } from 'react-redux';
import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';

const App = (props) => {
  return (
    <div
      className={props.isInitialized ? 'app__wrapper' : 'app__wrapper hidden'}
    >
      <TasksCount />
      <TasksInput />
      <Tasks />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: state.todo.isInitialized,
});

const dispatchToProps = {};

export default connect(mapStateToProps, dispatchToProps)(App);
