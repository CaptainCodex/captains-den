import React, { Component } from 'react';

export enum ParticleSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  XL = 'xl'
}

interface Particle {
  path: string;
  size: ParticleSize;
}

interface Props {
  particles: Particle[];
  delay: number;
}

interface State {
  particles: Particle[];
}

export class FloatingParticles extends Component<Props, State> {
  static defaultProps = {
    delay: 10000
  };

  state: State = {
    particles: []
  };

  componentDidMount() {
    this.gradualLoad();
  }

  gradualLoad() {
    if (this.props.particles.length > 20) {
      throw new Error(
        `Max particles: 20. ${this.props.particles.length} provided.`
      );
    }

    this.props.particles.forEach((particle, key) => {
      setTimeout(() => {
        this.setState({
          particles: this.state.particles.concat(particle)
        });
      }, Math.random() * this.props.delay);
    });
  }

  render() {
    return (
      <div className="floating-particles">
        {this.state.particles.map((particle, key) => (
          <div key={key} className="particle">
            <img className={particle.size} src={particle.path} />
          </div>
        ))}
      </div>
    );
  }
}
