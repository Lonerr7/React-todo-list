import s from './FilterBtns.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { setFilter } from '../../../redux/filtersSlice';
import { Filters } from '../../../types/types';

const FilterBtns: React.FC = () => {
  const dispatch = useAppDispatch();

  const filterCompletedTodos = () => {
    dispatch(setFilter(Filters.completed));
  };

  const filterUncompletedTodos = () => {
    dispatch(setFilter(Filters.uncompleted));
  };

  const showAllTodos = () => {
    dispatch(setFilter(Filters.all));
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
