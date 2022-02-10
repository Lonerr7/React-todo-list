import React from 'react';
import s from './TasksInput.module.scss';

const TasksInput = () => {
  return (
    <div className={s.tasksInput__box}>
      <input
        className={s.tasksInput}
        type="text"
        placeholder="Что Вы хотите сделать?"
      />
      <button className={s.tasksInput__btn}>Добавить</button>
    </div>
  );
};

export default TasksInput;
