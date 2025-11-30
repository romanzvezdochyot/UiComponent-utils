import React from 'react';
import { Input } from './Input';
import Toggle from './Toggle';

class Example extends React.Component {
  forceUpdateHandler = () => {
    this.forceUpdate();
  };

  render(): React.ReactNode {
    return (
      <>
        <div>
          <Toggle forceUpdate={this.forceUpdateHandler} />
          <Input />
        </div>
      </>
    );
  }
}

export default Example;
