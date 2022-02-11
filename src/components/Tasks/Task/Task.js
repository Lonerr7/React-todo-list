import s from './Task.module.scss';

const Task = (props) => {
  return (
    <div className={s.task__box}>
      <div className={props.isCompleted ? s.task__completed : s.task}>
        <p
          className={props.isCompleted ? s.task__info_crossed : s.task__info}
          onClick={() => {
            props.toggleTaskCompletion(props.id, !props.isCompleted);
          }}
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
