import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

interface Props {
  content: string;
}

export class CursiveHighlight extends Component<Props> {
  static defaultProps = {
    content: ''
  };

  render() {
    const { content } = this.props;

    return <p className={css(styles.root)}>&nbsp;{content}</p>;
  }
}

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Caveat, cursive',
    display: 'inline-block',
    transform: 'rotate(-5deg)',
    fontSize: '2em',
    color: '#fff',
    marginLeft: '4rem',
    ':before': {
      content: `''`,
      backgroundImage: 'url(assets/icons/cursive-arrow.png)',
      marginLeft: '-2rem',
      width: 31,
      height: 55,
      position: 'absolute'
    }
  }
});
