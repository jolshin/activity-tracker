import React from "react";
import ActivityForm from "./ActivityForm";
import ActivityViewer from "./ActivityViewer";

export default class ActivityWidget extends React.Component {
  constructor() {
    super();
    this.nextId = 0;
    this.state = {
      activityData: [],
      selectedActivity: {},
    };
  }

  addActivityHandler = (activity) => {
    if (
      activity.date === "" ||
      isNaN(activity.distance) ||
      activity.distance <= 0
    ) {
      alert("Заполните поля");
      return;
    }

    this.nextId++;

    const nextActivityData = this.state.activityData;

    if (this.checkDate(activity.date)) {
      const existedActivityRecord = nextActivityData.find(
        (a) => a.date === activity.date
      );
      existedActivityRecord.distance += activity.distance;
    } else {
      nextActivityData.push(activity);
    }

    this.setState({
      activityData: nextActivityData,
      selectedActivity: {},
    });
  };

  deleteActivityHandler = (id) => {
    const updatedActivityData = this.state.activityData.filter(
      (activity) => activity.id !== id
    );
    this.setState({ activityData: updatedActivityData });
  };

  editActivityHandler = (activity) => {
    this.setState({ selectedActivity: activity });
    this.deleteActivityHandler(activity.id);
  };

  formChangeHandler = (e) => {
    if (e.target.name === "distance") {
      this.selectedDistanceUpdate(e);
    } else {
      this.selectedDateUpdate(e);
    }
  };

  selectedDistanceUpdate = (e) => {
    const distance = e.target.value;
    this.setState((prevState) => ({
      selectedActivity: {
        ...prevState.selectedActivity,
        distance: distance,
      },
    }));
  };

  selectedDateUpdate = (e) => {
    const date = e.target.value;
    this.setState((prevState) => ({
      selectedActivity: {
        ...prevState.selectedActivity,
        date: date,
      },
    }));
  };

  checkDate(date) {
    for (let activity of this.state.activityData) {
      if (activity.date === date) {
        return activity;
      }
    }
  }

  render() {
    return (
      <div className="container">
        <ActivityForm
          nextId={this.nextId}
          selectedActivity={this.state.selectedActivity}
          onAddActivity={this.addActivityHandler}
          onFormChange={this.formChangeHandler}
        />
        <ActivityViewer
          activityData={this.state.activityData}
          onDeleteActivity={this.deleteActivityHandler}
          onEditActivity={this.editActivityHandler}
        />
      </div>
    );
  }
}
