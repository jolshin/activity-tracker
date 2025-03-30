const ActivityForm = ({
  nextId,
  selectedActivity,
  onAddActivity,
  onFormChange,
}) => {
  return (
    <div className="activity-form-container">
      <div className="activity-form header">
        <span>Дата</span>
        <span>Пройдено, км</span>
        <span></span>
      </div>
      <form className="activity-form form">
        <input
          type="date"
          id="date"
          name="date"
          value={
            selectedActivity.date === undefined ? "" : selectedActivity.date
          }
          onChange={onFormChange}
        />
        <input
          type="number"
          step="0.1"
          min="0"
          max="100"
          id="distance"
          name="distance"
          value={
            selectedActivity.distance === undefined
              ? ""
              : selectedActivity.distance
          }
          onChange={onFormChange}
        />
        <button
          type="button"
          onClick={() =>
            onAddActivity({
              id: nextId,
              date: date.value,
              distance: parseFloat(distance.value),
            })
          }
        >
          Ok
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;
