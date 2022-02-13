import s from './FilterBtns.module.scss';

const FilterBtns = (props) => {
  const filterCompletedTodos = () => {
    props.filterTodos(true);
  };

  const filterUncompletedTodos = () => {
    props.filterTodos(false);
  };

  const showAllTodos = () => {
    props.getLocalTodosAC(JSON.parse(localStorage.getItem('todos')));
  };

  return (
    <div className={s.tasksInput__filterBtns}>
      <button
        className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_all}`} onClick={showAllTodos}
      >
        Все
      </button>
      <button
        className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_done}`} onClick={filterCompletedTodos}
      >
        Выполненные
      </button>
      <button
        className={`${s.tasksInput__filterBtn} ${s.tasksInput__filterBtn_undone}`} onClick={filterUncompletedTodos}
      >
        Не выполненные
      </button>
    </div>
  );
};

export default FilterBtns;
