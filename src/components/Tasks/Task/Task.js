import s from './Task.module.scss';
import edit from '../../../assets/images/edit.png';
import tick from '../../../assets/images/tick.png';
import { useState } from 'react';

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [taskInfo, setTaskInfo] = useState(props.taskInfo);

  const editModeHandler = () => {
    setEditMode(!editMode);
    setTaskInfo(props.taskInfo);
  };

  const taskInfoChangeHandler = (e) => {
    setTaskInfo(e.target.value);
  };

  const onNewTaskInfoAccept = () => {
    props.editTaskInfo(props.id, taskInfo);
    setEditMode(!editMode);
  };

  return (
    <div className={s.task__box}>
      <div className={props.isCompleted ? s.task__completed : s.task}>
        {editMode ? (
          <div className={s.task__editBox}>
            <input
              className={s.task__editInput}
              type="text"
              value={taskInfo}
              onChange={taskInfoChangeHandler}
              autoFocus={true}
            />
            <img className={s.task__editSaveImg} src={tick} alt="tick" onClick={onNewTaskInfoAccept} />
          </div>
        ) : (
          <p
            className={props.isCompleted ? s.task__info_crossed : s.task__info}
            onClick={() => {
              props.toggleTaskCompletion(props.id, !props.isCompleted);
            }}
          >
            {props.taskInfo}
          </p>
        )}
        <div className={s.task__controls}>
          <button className={s.edit__btn} onClick={editModeHandler}>
            <img className={s.edit__img} src={edit} alt="edit" />
          </button>
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
    </div>
  );
};

export default Task;
