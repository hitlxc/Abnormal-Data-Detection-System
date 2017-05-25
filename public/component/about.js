import React, { PropTypes, Component } from 'react';

//import ReactDOM from 'react-dom';

export default class About extends Component {
  render() {
    return <div style={{margin: '0 10px 20px 10px'}}>
    	<div id="chart1-title" style={{padding:'80px 0 10px 0',borderBottom:'2px solid gray' ,fontSize: 32, width: '100%', }}>关于我们</div>
    	<div></div>
    	<div id="chart1-title" style={{padding:'80px 0 10px 0',borderBottom:'2px solid gray' ,fontSize: 32, width: '100%', }}>为什么选择我们</div>
    	<div style={{padding:10}}>恶意URL的检测方法有很多，然而经过精心包装的URL可能会避开我们制定的拦截规则。而我们使用机器学习算法在大量恶意URL中训练出模型，在数据中寻找出规律，在各种模型中寻找适配情况更好的模型，从而提高恶意URL的辨识能力</div>
		    	
    </div>;
  }
}