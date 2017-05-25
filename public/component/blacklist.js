import React, { PropTypes, Component } from 'react';

//import ReactDOM from 'react-dom';
import echarts from 'echarts'
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    ip:'192.168.11.11',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '手动'
  },
  {
    ip:'192.168.11.12',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '手动'
  },
  {
    ip:'192.168.11.13',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '手动'
  },
  {
    ip:'192.168.11.14',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '手动'
  },
  {
    ip:'192.168.11.15',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '手动'
  },
  {
    ip:'192.168.11.16',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '自动'
  },
  {
    ip:'192.168.11.17',
    location: '中国',
    time: '2017-05-23 16:00',
    type: '自动'
  },
];

export default class BlackList extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.location]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };
  
  handleTouchTap = () => {
    //this.refs.res1.innerText = '恶意URL\n含有危险参数<script>xxx</script>\n精确度92%'
  }

  render() {
    return  <div>
      <div id="chart1-title" style={{padding:'80px 0 10px 0',borderBottom:'2px solid gray' ,fontSize: 32, width: '98vw', margin: '0 10px 0 10px'}}>系统黑名单</div>  
    	<MuiThemeProvider  muiTheme={getMuiTheme()}>
        	<div style={{padding:10}}>
            <RaisedButton label="移出黑名单" primary={true} onTouchTap={this.handleTouchTap} />
            <RaisedButton label="添加黑名单" primary={true} style={{margin:20}} />
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                
                <TableRow>
                  <TableHeaderColumn tooltip="The IP">IP</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Location">地理位置</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Time">加入黑名单时间</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Type">加入类型</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.ip}</TableRowColumn>
                    <TableRowColumn>{row.location}</TableRowColumn>
                    <TableRowColumn>{row.time}</TableRowColumn>
                    <TableRowColumn>{row.type}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableRowColumn>IP</TableRowColumn>
                  <TableRowColumn>location</TableRowColumn>
                  <TableRowColumn>time</TableRowColumn>
                  <TableRowColumn>type</TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>
		    </div>
	    </MuiThemeProvider>
	    
      <div id="chart1-title" style={{padding:'80px 0 10px 0',borderBottom:'2px solid gray' ,fontSize: 32, width: '98vw', margin: '0 10px 0 10px'}}>系统白名单</div>  
      <MuiThemeProvider  muiTheme={getMuiTheme()}>
          <div style={{padding:10}}>
            <RaisedButton label="移出白名单" primary={true} onTouchTap={this.handleTouchTap} />
            <RaisedButton label="添加白名单" primary={true} style={{margin:20}} />
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                
                <TableRow>
                  <TableHeaderColumn tooltip="The IP">IP</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Location">地理位置</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Time">加入白名单时间</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.ip}</TableRowColumn>
                    <TableRowColumn>{row.location}</TableRowColumn>
                    <TableRowColumn>{row.time}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableRowColumn>IP</TableRowColumn>
                  <TableRowColumn>location</TableRowColumn>
                  <TableRowColumn>time</TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>
        </div>
      </MuiThemeProvider>
    </div>
  }
}