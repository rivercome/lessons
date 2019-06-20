import React from 'react';
import { Drawer, Button } from 'antd';

export default class Content extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          课程解说
        </Button>
        <Drawer
          title="Practical Deep Learning for Coders"
          placement="right"
          width='700'
          mask={false}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <h1>{this.props.LessonTitle}</h1>
       {this.props.massContent}
        </Drawer>
    
      </div>
    );
  }
}
