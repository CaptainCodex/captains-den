import React, { Component } from 'react';
import Typed from 'typed.js';
import Chance from 'chance';

interface Props {
  messages: string[];
  shuffle: boolean;
  fadeOut: boolean;
  loop: boolean;
  loopCount: number;
}

interface State {}

export class TypedMessage extends Component<Props, State> {
  static defaultProps = {
    messages: [],
    shuffle: false,
    fadeOut: false,
    loop: false,
    loopCount: Infinity
  };

  state: State = {};

  chance = new Chance();
  id = this.chance.word();
  typed: Typed | undefined;

  componentDidMount() {
    const { messages, shuffle, fadeOut, loop, loopCount } = this.props;

    const options = {
      strings: messages,
      typeSpeed: 50,
      backSpeed: 20,
      shuffle,
      fadeOut,
      loop,
      loopCount
    };

    this.typed = new Typed(`#${this.id}`, options);
  }

  render() {
    const { id } = this;

    return <span id={id} className="typed-message" />;
  }
}
