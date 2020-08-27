import React, { Component } from 'react';
import './style.less';
class ErrorWrap extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
  render() {
    const { show } = this.props;
    if (this.state.errorInfo || show) {
      return (
        <div className="error-page">
          <div className="main-wrapper">
            <div className="signboard-wrapper">
              <div className="signboard">Closed</div>
              <div className="string" />
              <div className="pin pin1" />
              <div className="pin pin2" />
              <div className="pin pin3" />
            </div>
          </div>
          <h2>对不起，我们好像遇到了一些问题...</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorWrap;
