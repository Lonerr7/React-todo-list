import { useEffect } from 'react';
import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';
import { useDispatch } from 'react-redux';
import { setFilteredTodos } from './redux/todoSlice';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredTodos());
    console.log(`filtered totds`);
  }, []);

  return (
    // <div
    //   className={props.isInitialized ? 'app__wrapper' : 'app__wrapper hidden'}
    // >
    //   <TasksCount />
    //   <TasksInput />
    //   <Tasks />
    // </div>
    <div className={'app__wrapper'}>
      <TasksCount />
      <TasksInput />
      <Tasks />
    </div>
  );
};

export default App;
