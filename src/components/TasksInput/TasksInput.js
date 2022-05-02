import React, { useState } from 'react';
import FilterBtns from './FilterBtns/FilterBtns';
import TaskDeletePopup from './TaskDeletePopup/TaskDeletePopup';
import s from './TasksInput.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/todoSlice';

const TasksInput = (props) => {
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);

  const onTextType = (e) => {
    setTaskText(e.target.value);
  };

  const onTaskAdd = () => {
    if (taskText) {
      dispatch(addTask({ text: taskText }));
      setTaskText('');
    }
  };

  return (
    <div className={s.tasksInput__box}>
      <div className={s.tasksInput__inputs}>
        <input
          className={s.tasksInput}
          type="text"
          placeholder="Что Вы хотите сделать?"
          value={taskText}
          onChange={onTextType}
        />
        <button className={s.tasksInput__btn} onClick={onTaskAdd}>
          Добавить
        </button>
      </div>
      <FilterBtns
        filterTodos={props.filterTodos}
        getLocalTodosAC={props.getLocalTodosAC}
      />
      <button className={s.tasksInput__deleteAllBtn}>Удалить все</button>
      {deleteMode ? (
        <TaskDeletePopup
          setDeleteMode={setDeleteMode}
          deleteAllTasks={props.deleteAllTasks}
        />
      ) : null}
    </div>
  );
};

export default TasksInput;
