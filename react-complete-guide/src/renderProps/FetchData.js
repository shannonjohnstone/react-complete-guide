import { Component } from 'react';

class DataFetching extends Component {
  state = {
    loading: true,
    loadingMessage: 'Fetching data',
  };

  async componentDidMount() {
    const { startEffect, endEffect } = this.loadingEffect();
    startEffect();

    try {
      await this.props.fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
      endEffect();
    }
  }

  loadingEffect = () => {
    let loadingMessage = this.state.loadingMessage;
    let effectInterval;

    const startEffect = () => {
      effectInterval = setInterval(() => {
        loadingMessage += '.';
        this.setState({ loadingMessage });
      }, 500);
    };

    const endEffect = () => {
      clearInterval(effectInterval);
    };

    return {
      startEffect,
      endEffect,
    };
  };

  render() {
    if (this.state.loading) return this.state.loadingMessage;
    return this.props.render();
  }
}

export default DataFetching;
