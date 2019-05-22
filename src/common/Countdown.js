import React from "react";

const MILLISECONDS = 1000;

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingDays: 0,
      remainingHours: 0,
      remainingMins: 0,
      remainingSecs: 0
    };
  }

  componentWillMount() {
    this.interval = setInterval(this.onIntervalChange, MILLISECONDS);
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { remainingDays } = this.state;
    return (
      <React.Fragment>
          <h2 className="days subtitle is-3">faltan</h2>
          <h1 className="day-number title">{this.state.remainingDays}</h1>
        <h2 className="days subtitle is-3">días</h2>
      </React.Fragment>
    );
  }

  onIntervalChange = () => {
    let currentTimestamp = new Date().getTime();
    let difference = this.props.deadline - currentTimestamp;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.setState({
      remainingDays: this.addLeadingZero(days),
      remainingHours: this.addLeadingZero(hours),
      remainingMins: this.addLeadingZero(minutes),
      remainingSecs: this.addLeadingZero(seconds)
    });

    if (this.state.remainingDays === 0) {
      this.stop();
    }
  };

  stop() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  addLeadingZero = num => (num < 10 ? `0${num}` : num);
}

export { Countdown };
