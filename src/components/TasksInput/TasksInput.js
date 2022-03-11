import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTaskTC,
  deleteAllTasksTC,
  filterTodosAC,
  getLocalTodosAC,
} from '../../redux/todoReducer';
import FilterBtns from './FilterBtns/FilterBtns';
import TaskDeletePopup from './TaskDeletePopup/TaskDeletePopup';
import s from './TasksInput.module.scss';

const TasksInput = (props) => {
  const [taskText, setTaskText] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);

  const onTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const onTaskAdd = () => {
    props.addTask(taskText);
    setTaskText('');
  };

  const onAllTasksDelete = () => {
    if (props.todos.length > 0) setDeleteMode(true);
  };

  return (
    <div className={s.tasksInput__box}>
      <div className={s.tasksInput__inputs}>
        <input
          className={s.tasksInput}
          type="text"
          placeholder="Что Вы хотите сделать?"
          value={taskText}
          onChange={onTaskTextChange}
        />
        <button className={s.tasksInput__btn} onClick={onTaskAdd}>
          Добавить
        </button>
      </div>
      <FilterBtns
        filterTodos={props.filterTodos}
        getLocalTodosAC={props.getLocalTodosAC}
      />
      <button className={s.tasksInput__deleteAllBtn} onClick={onAllTasksDelete}>
        Удалить все
      </button>
      {deleteMode ? (
        <TaskDeletePopup
          setDeleteMode={setDeleteMode}
          deleteAllTasks={props.deleteAllTasks}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const dispatchToProps = {
  addTask: addTaskTC,
  deleteAllTasks: deleteAllTasksTC,
  filterTodos: filterTodosAC,
  getLocalTodosAC,
};

export default connect(mapStateToProps, dispatchToProps)(TasksInput);
