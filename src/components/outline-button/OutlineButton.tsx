import React, { Component } from 'react';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import { StyleSheet, css } from 'aphrodite';
import chroma from 'chroma-js';

export enum Color {
  BLUE,
  PURPLE
}

interface Props {
  className: string;
  rounded: boolean;
  color: Color;
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

export class OutlineButton extends Component<Props> {
  static defaultProps = {
    className: '',
    rounded: false,
    color: Color.BLUE,
    disabled: false,
    onClick: () => {}
  };

  getColorStyle = () => {
    switch (this.props.color) {
      case Color.BLUE:
        return styles.blue;
      case Color.PURPLE:
        return styles.purple;
    }
  };

  render() {
    const { getColorStyle } = this;
    const { children, className, rounded, disabled, onClick } = this.props;

    return (
      <Button
        className={classnames(
          'outline-button',
          className,
          css(styles.root, getColorStyle(), rounded && styles.rounded)
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
}

const blue = {
  normal: '#028fff',
  dark: chroma('#028fff')
    .darken()
    .hex(),
  darker: chroma('#028fff')
    .darken(2)
    .hex()
};

const purple = {
  normal: '#9f55ff',
  dark: chroma('#9f55ff')
    .darken()
    .hex(),
  darker: chroma('#9f55ff')
    .darken(2)
    .hex()
};

const styles = StyleSheet.create({
  root: {
    fontSize: '.8em',
    fontWeight: 400,
    letterSpacing: 1.45,
    textTransform: 'uppercase',
    padding: '.375rem 1.125rem',
    boxShadow: 'none',
    color: '#fff',
    border: `2px solid transparent`,
    backgroundColor: 'transparent'
  },

  rounded: {
    borderRadius: 20
  },

  blue: {
    borderColor: blue.normal,
    color: blue.normal,

    ':hover': {
      borderColor: blue.normal,
      backgroundColor: blue.normal,
      color: '#fff'
    },

    ':active': {
      borderColor: blue.darker,
      backgroundColor: blue.darker,
      color: '#fff'
    }
  },

  purple: {
    borderColor: purple.normal,
    color: purple.normal,

    ':hover': {
      borderColor: purple.normal,
      backgroundColor: purple.normal,
      color: '#fff'
    },

    ':active': {
      borderColor: purple.darker,
      backgroundColor: purple.darker,
      color: '#fff'
    }
  }
});
