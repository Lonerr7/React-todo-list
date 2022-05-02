import s from './Task.module.scss';
import edit from '../../../assets/images/edit.png';
import tick from '../../../assets/images/tick.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  toggleTaskCompletion,
  changeTaskText,
} from '../../../redux/todoSlice';

const Task = ({ taskInfo, isCompleted, id }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [taskText, setTaskText] = useState(taskInfo);

  const transitionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const taskDeleteHandler = () => {
    dispatch(deleteTask({ id }));
  };

  const taskCompletionHanlder = () => {
    dispatch(toggleTaskCompletion({ id, isCompleted: !isCompleted }));
  };

  const taskTextChangeHandler = () => {
    dispatch(changeTaskText({ id, newTaskText: taskText }));
    setEditMode(false);
  };

  return (
    <animated.div className={s.task__box} style={transitionStyle}>
      <div className={isCompleted ? s.task__completed : s.task}>
        {editMode ? (
          <div className={s.task__editBox}>
            <input
              className={s.task__editInput}
              type="text"
              value={taskText}
              autoFocus={true}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <img
              className={s.task__editSaveImg}
              src={tick}
              alt="tick"
              onClick={taskTextChangeHandler}
            />
          </div>
        ) : (
          <p
            className={isCompleted ? s.task__info_crossed : s.task__info}
            onClick={taskCompletionHanlder}
          >
            {taskInfo}
          </p>
        )}
        <div className={s.task__controls}>
          <button className={s.edit__btn}>
            <img
              className={s.edit__img}
              src={edit}
              alt="edit"
              onClick={() => {
                setTaskText(taskInfo);
                setEditMode(!editMode);
              }}
            />
          </button>
          <button className={s.task__btn} onClick={taskDeleteHandler}>
            ✕
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Task;
