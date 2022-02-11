import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTaskAC } from '../../redux/todoReducer';
import s from './TasksInput.module.scss';

const TasksInput = (props) => {
  const [taskText, setTaskText] = useState('');

  const onTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  const onTaskAdd = () => {
    props.addTask(taskText);
    setTaskText('');
  };

  return (
    <div className={s.tasksInput__box}>
      <input
        className={s.tasksInput}
        type="text"
        placeholder="Что Вы хотите сделать?"
        value={taskText}
        onChange={onTaskChange}
      />
      <button className={s.tasksInput__btn} onClick={onTaskAdd}>
        Добавить
      </button>
    </div>
  );
};

const dispatchToProps = {
  addTask: addTaskAC,
};

export default connect(null, dispatchToProps)(TasksInput);
