import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';

interface Props {
  count: number;
  duration: number;
}

interface State {
  currentCount: number;
  delay: number;
  direction: number;
}

export class Counter extends Component<Props, State> {
  static defaultProps = {
    count: 0,
    duration: 3000
  };

  state: State = {
    currentCount: 0,
    delay: 0,
    direction: 0
  };

  clearInterval: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.loadTimer();
  }

  loadTimer = () => {
    const delay = this.props.duration / this.props.count;

    this.setState({
      delay
    });

    this.clearInterval = setInterval(() => {
      if (
        (this.state.currentCount > 0 && this.state.direction === -1) ||
        (this.state.currentCount < this.props.count &&
          this.state.direction === 1)
      ) {
        let currentCount = this.state.currentCount + this.state.direction;

        currentCount = Math.min(Math.max(currentCount, 0), this.props.count);

        this.setState({
          currentCount
        });
      }
    }, delay);
  };

  handleWaypointEnter = (event: Waypoint.CallbackArgs) => {
    this.setState({
      direction: 1
    });
  };

  handleWaypointLeave = (event: Waypoint.CallbackArgs) => {
    this.setState({
      direction: -1
    });
  };

  componentWillUnmount() {
    if (this.clearInterval) {
      clearInterval(this.clearInterval);
    }
  }

  render() {
    const { handleWaypointEnter, handleWaypointLeave } = this;
    const { currentCount } = this.state;

    return (
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave}>
        <div className="counter">{currentCount}</div>
      </Waypoint>
    );
  }
}
