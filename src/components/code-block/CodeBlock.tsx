import React, { Component } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

interface Props {
  code: string;
}

interface State {
  code: string;
}

export class CodeBlock extends Component<Props, State> {
  static defaultProps = {};

  state: State = {
    code: ''
  };

  componentDidMount() {
    const { code } = this.props;

    this.setState({
      code: hljs.highlightAuto(code).value
    });
  }

  render() {
    const { code } = this.state;

    return (
      <pre className="code-block">
        <code className="hljs" dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    );
  }
}
