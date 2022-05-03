import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFilteredTodos } from './redux/todoSlice';

const App = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(setFilteredTodos());

    // eslint-disable-next-line
  }, [todos]);

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
