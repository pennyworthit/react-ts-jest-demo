import * as React from 'react';
import { HelloWorldProps } from './index.d';

export default class HelloWorld extends React.Component<HelloWorldProps, any> {
  render() {
    return (
      <div style={{ color: this.props.color }}>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
