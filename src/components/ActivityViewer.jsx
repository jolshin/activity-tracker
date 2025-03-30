const ActivityViewer = ({ activityData, onDeleteActivity, onEditActivity }) => {
  if (activityData.length !== 0) {
    const sortedActivity = []
      .concat(activityData)
      .sort((a, b) => (a.date > b.date ? 1 : -1));

    return (
      <div className="activity-viewer">
        <div className="activity-item">
          <span>Дата, дд.мм.гггг</span>
          <span>Пройдено, км</span>
          <span>Действия</span>
        </div>
        {sortedActivity.map((activity, index) => (
          <div key={index} className="activity-item">
            <span>{new Date(activity.date).toLocaleDateString("ru-RU")}</span>
            <span>{parseFloat(activity.distance).toFixed(1)}</span>
            <div className="activity-actions">
              <button type="button" onClick={() => onEditActivity(activity)}>
                ✎
              </button>
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                ✘
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ActivityViewer;
