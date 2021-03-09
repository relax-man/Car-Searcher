import React, { Component } from 'react';
import BackgroundImageOnLoad from 'background-image-on-load';
import { Spinner } from 'components/common/Spinnners';

class LoadingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  handleLoad = () => {
    this.setState({ loaded: true });
  };
  render() {
    return (
      <div
        className={this.props.className}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#2b2b2b',
          backgroundImage: `url(${this.props.src})`,
          ...this.props.style
        }}
      >
        <BackgroundImageOnLoad
          src={this.props.src}
          onLoadBg={this.handleLoad}
        />
        {!this.state.loaded && <Spinner variant="white" />}
      </div>
    );
  }
}

export default LoadingImage;
