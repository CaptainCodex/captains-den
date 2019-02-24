import React, { Component } from 'react';
import smoothScroll from 'smoothscroll-for-websites';

export class SmoothScroll extends Component {
  componentDidMount() {
    smoothScroll();
  }
}
