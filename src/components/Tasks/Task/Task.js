import { useState } from 'react';
import s from './Task.module.scss';

const Task = (props) => {
  const [taskStyle, setTaskStyle] = useState(true);

  const onTextClickHandler = () => {
    setTaskStyle(!taskStyle);
  };

  return (
    <div className={s.task__box}>
      <div className={s.task}>
        <p
          className={taskStyle ? s.task__info : s.task__info_crossed}
          onClick={onTextClickHandler}
        >
          {props.taskInfo}
        </p>
        <button
          className={s.task__btn}
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Task;
