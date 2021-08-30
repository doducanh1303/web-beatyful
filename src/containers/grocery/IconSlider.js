import React from "react";
import { Slider,InputNumber,Button } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import "../grocery/Grocery.css"
class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) /30).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
       
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <div className="btn-filter">
            <Button type="text"><h3>Lọc</h3></Button>
            <p>Gía {min} - {value < 0 ? min:value}</p>
        </div>
      </div>
    );
  }
}
export default IconSlider;