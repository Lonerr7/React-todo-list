import './App.scss';
import Tasks from './components/Tasks/Tasks';
import TasksCount from './components/TasksCount/TasksCount';
import TasksInput from './components/TasksInput/TasksInput';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { useEffect } from 'react';
import { setFilteredTodos } from './redux/todoSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(setFilteredTodos());

    // eslint-disable-next-line
  }, [todos]);

  return (
    <div className={'app__wrapper'}>
      <TasksCount />
      <TasksInput />
      <Tasks />
    </div>
  );
};

export default App;
