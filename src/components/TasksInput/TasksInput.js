import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTaskTC, deleteAllTasksTC } from '../../redux/todoReducer';
import s from './TasksInput.module.scss';

const TasksInput = (props) => {
  const [taskText, setTaskText] = useState('');

  const onTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const onTaskAdd = () => {
    props.addTask(taskText);
    setTaskText('');
  };

  const onAllTasksDelete = () => {
    props.deleteAllTasks();
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
      <button className={s.tasksInput__deleteAllBtn} onClick={onAllTasksDelete}>
        Удалить все
      </button>
    </div>
  );
};

const dispatchToProps = {
  addTask: addTaskTC,
  deleteAllTasks: deleteAllTasksTC,
};

export default connect(null, dispatchToProps)(TasksInput);
