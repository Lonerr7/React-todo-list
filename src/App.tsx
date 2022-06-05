import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';

const App: React.FC = () => {
  return (
    <div className={'app__wrapper'}>
      <TasksCount />
      <TasksInput />
      <Tasks />
    </div>
  );
};

export default App;
