import s from './FilterBtns.module.scss';
import { filterTodos, setFilteredTodos } from '../../../redux/todoSlice';
import { useAppDispatch } from '../../../hooks/hooks';

const FilterBtns: React.FC = () => {
  const dispatch = useAppDispatch();

  const filterCompletedTodos = () => {
    dispatch(filterTodos({ isCompleted: true }));
  };

  const filterUncompletedTodos = () => {
    dispatch(filterTodos({ isCompleted: false }));
  };

  const showAllTodos = () => {
    dispatch(setFilteredTodos());
  };

  return (
    <div className={s.tasksInput__filterBtnsBox}>
      <p className={s.tasksInput__filterBtnsTitle}>Фильтр</p>
      <div className={s.tasksInput__filterBtns}>
        <button
          className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_all}`}
          onClick={showAllTodos}
        >
          Все
        </button>
        <button
          className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_done}`}
          onClick={filterCompletedTodos}
        >
          Выполненные
        </button>
        <button
          className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_undone}`}
          onClick={filterUncompletedTodos}
        >
          Не выполненные
        </button>
      </div>
    </div>
  );
};

export default FilterBtns;
