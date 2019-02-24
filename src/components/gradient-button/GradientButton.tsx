import React, { Component } from 'react';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import { StyleSheet, css } from 'aphrodite';
import chroma from 'chroma-js';

export enum GradientColor {
  PURPLE_BLUE
}

interface Props {
  className: string;
  rounded: boolean;
  gradient: GradientColor;
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

export class GradientButton extends Component<Props> {
  static defaultProps = {
    className: '',
    rounded: false,
    gradient: GradientColor.PURPLE_BLUE,
    disabled: false,
    onClick: () => {}
  };

  getGradientStyle = () => {
    switch (this.props.gradient) {
      case GradientColor.PURPLE_BLUE:
        return styles.purpleBlue;
    }
  };

  render() {
    const { getGradientStyle } = this;
    const { children, className, rounded, disabled, onClick } = this.props;

    return (
      <Button
        className={classnames(
          'gradient-button',
          className,
          css(styles.root, getGradientStyle(), rounded && styles.rounded)
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
    border: 'none',
    fontSize: '.8em',
    fontWeight: 700,
    letterSpacing: 1.45,
    textTransform: 'uppercase',
    padding: '.5rem 1.25rem',
    boxShadow: 'none'
  },

  rounded: {
    borderRadius: 20
  },

  purpleBlue: {
    backgroundImage: `linear-gradient(-135deg, ${blue.normal} 25%, ${
      purple.normal
    } 100%)`,

    ':hover': {
      backgroundImage: `linear-gradient(-135deg, ${blue.dark} 25%, ${
        purple.dark
      } 100%)`
    },

    ':active': {
      backgroundImage: `linear-gradient(-135deg, ${blue.darker} 25%, ${
        purple.darker
      } 100%)`
    }
  }
});
