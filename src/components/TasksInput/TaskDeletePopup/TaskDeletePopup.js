import s from './TaskDeletePopup.module.scss';

const TaskDeletePopup = (props) => {
  const onBtnNoClick = () => {
    props.setDeleteMode(false);
  };

  const onBtnYesClick = () => {
    props.deleteAllTasks();
    props.setDeleteMode(false);
  };

  return (
    <div className={s.taskDeletePopup}>
      <p className={s.taskDeletePopup__title}>
        Вы действительно хотите удалить все Ваши задачи?
      </p>
      <div className={s.taskDeletePopup__btns}>
        <button className={s.taskDeletePopup__btnYes} onClick={onBtnYesClick}>
          Да
        </button>
        <button className={s.taskDeletePopup__btnNo} onClick={onBtnNoClick}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default TaskDeletePopup;
