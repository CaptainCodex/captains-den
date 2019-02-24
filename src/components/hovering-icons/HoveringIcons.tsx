import React, { Component } from 'react';
import AOS from 'aos';

interface Icon {
  path: string;
}

interface Props {
  icons: Icon[];
}

export class HoveringIcons extends Component<Props> {
  componentDidMount() {
    if (this.props.icons.length > 7) {
      throw new Error(`Max particles: 7. ${this.props.icons.length} provided.`);
    }

    AOS.init();
  }

  render() {
    return (
      <div className="hovering-icons">
        {this.props.icons.map((icon, key) => (
          <div key={key} className="icon" data-aos="fade-in">
            <img src={icon.path} />
          </div>
        ))}
      </div>
    );
  }
}
