import s from './Task.module.scss';

const Task = (props) => {
  return (
    <div className={s.task__box}>
      <div className={s.task}>
        {props.isCompleted ? (
          <p
            className={s.task__info_crossed}
            onClick={() => {
              props.toggleTaskCompletion(props.id, false);
            }}
          >
            {props.taskInfo}
          </p>
        ) : (
          <p
            className={s.task__info}
            onClick={() => {
              props.toggleTaskCompletion(props.id, true);
            }}
          >
            {props.taskInfo}
          </p>
        )}
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
