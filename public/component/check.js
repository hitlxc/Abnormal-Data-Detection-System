import React, { PropTypes, Component } from 'react';

//import ReactDOM from 'react-dom';
import echarts from 'echarts'
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTouchTap = () => {
  	this.refs.res1.innerText = '恶意URL\n含有危险参数<script>xxx</script>\n精确度92%'
  	this.refs.res1Box.style.display = 'block'
  }
  
  render() {
    return  <div>
    	<MuiThemeProvider  muiTheme={getMuiTheme()}>
        	<div style={{ padding: '0 50px 20px 50px'}} >
        		<div id="chart1-title" style={{padding: '80px 0 10px 0', borderBottom:'2px solid gray' ,fontSize: 32, width: '100%'}}>URL在线检测</div>
		    	<div style={{textAlign:'center',marginTop:100}} >
			    	<TextField
			          id="text-field-controlled"
			          value={this.state.value}
			          onChange={this.handleChange}
			          style={{margin:10,width:400}}
			        />
			        <RaisedButton label="分析" primary={true} onTouchTap={this.handleTouchTap} />
		        </div>
		        <div ref='res1Box' style={{padding:'10px 50px 0 50px',marginTop:100,display:'none'}} >
			        <Paper style={{ padding:20 ,height:200, margin:10}} zDepth={1} >
				    	<div ref='res1'>分析结果:</div>
				    </Paper>
			    </div>
		    </div>
	    </MuiThemeProvider>
	    
    </div>
  }
}