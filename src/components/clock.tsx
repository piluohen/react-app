import * as React from 'react';

class Clock extends React.Component {
  timerID = 0
  public state = {
    date: new Date()
  }
  public componentDidMount () {
    this.timerID = window.setInterval(() => {
      this.tick()
    }, 1000)
  }
  public componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state && this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;