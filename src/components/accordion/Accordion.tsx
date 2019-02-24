import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';

export interface Row {
  headline: string;
  content: string;
}

interface State {
  collapseStates: boolean[];
}

interface Props {
  rows: Row[];
  single: boolean;
}

export class Accordion extends Component<Props, State> {
  static defaultProps = {
    single: true
  };

  state: State = {
    collapseStates: []
  };

  componentDidMount() {
    this.setState({
      collapseStates: new Array(this.props.rows.length).fill(false)
    });
  }

  toggle = (index: number) => () => {
    const toggleState = !this.state.collapseStates[index];

    if (this.props.single) {
      this.setState({
        collapseStates: this.state.collapseStates.map((toggled, key) =>
          key === index ? toggleState : false
        )
      });

      return;
    }

    this.setState({
      collapseStates: this.state.collapseStates.map((toggled, key) =>
        key === index ? toggleState : toggled
      )
    });
  };

  render() {
    const { rows } = this.props;

    return (
      <div>
        {rows.map((row, key) => (
          <div key={key} className={css(styles.row)}>
            <div
              className={css(
                styles.headline,
                this.state.collapseStates[key] && styles.expand
              )}
              onClick={this.toggle(key)}
            >
              {row.headline}
            </div>
            <Collapse isOpen={this.state.collapseStates[key]}>
              <div className={css(styles.content)}>{row.content}</div>
            </Collapse>
          </div>
        ))}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  root: {},

  row: {
    border: '1px solid #edf4f8',
    marginBottom: '1em'
  },

  headline: {
    padding: '.75rem 1.25rem',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '0.75em',
    cursor: 'pointer',

    ':before': {
      display: 'inline-block',
      content: "''",
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(assets/icons/arrow-down.svg)',
      transition: 'transform .3s ease',
      marginRight: '.5rem',
      width: '2em',
      height: '.8em',
      top: 1,
      position: 'relative',
      transform: 'rotate(-90deg)'
    }
  },

  expand: {
    ':before': {
      transform: 'rotate(0deg)'
    }
  },

  content: {
    padding: '1.250rem',
    fontWeight: 300
  }
});
