import React, { Component, RefObject } from 'react';
import { Waypoint } from 'react-waypoint';
import Anime from 'animejs';

interface Props {
  count: number;
  duration: number;
}

export class Counter extends Component<Props> {
  static defaultProps = {
    count: 0,
    duration: 3000
  };

  container: RefObject<HTMLDivElement> = React.createRef();

  handleWaypointEnter = () => {
    Anime.remove(this.container.current);

    Anime({
      autoplay: true,
      duration: this.props.duration,
      targets: this.container.current,
      innerText: [0, this.props.count],
      round: 1,
      easing: 'easeInOutExpo'
    });
  };

  handleWaypointLeave = () => {
    Anime.remove(this.container.current);

    Anime({
      autoplay: true,
      duration: this.props.duration,
      targets: this.container.current,
      innerText: [this.props.count, 0],
      round: 1,
      easing: 'easeInOutExpo'
    });
  };

  componentWillUnmount() {
    Anime.remove(this.container.current);
  }

  render() {
    const { handleWaypointEnter, handleWaypointLeave } = this;

    return (
      <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave}>
        <div className="counter" ref={this.container} />
      </Waypoint>
    );
  }
}
