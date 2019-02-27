import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

interface Props {
  tagline: string;
  headline: string;
  subheader: string;
  content: string;
}

interface State {}

export class ParagraphStyle1 extends Component<Props, State> {
  static defaultProps = {
    tagline: '',
    headline: '',
    subheader: '',
    content: ''
  };

  state: State = {};

  componentDidMount() {}

  render() {
    const { tagline, headline, subheader, content } = this.props;

    return (
      <div className={classnames('paragraph-style-1', css(styles.root))}>
        <h6 className={classnames('tagline', css(styles.tagline))}>
          {tagline}
        </h6>
        <h3 className="headline">{headline}</h3>
        <h4 className={classnames('subheader', css(styles.subheader))}>
          {subheader}
        </h4>
        <p className="content">{content}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    color: '#41494f'
  },

  tagline: {
    color: '#646f79',
    fontWeight: 300,
    fontSize: 13,
    textTransform: 'uppercase'
  },

  subheader: {
    color: '#646f79',
    fontWeight: 300
  }
});
