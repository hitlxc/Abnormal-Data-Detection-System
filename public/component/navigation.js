//import React, { PropTypes, Component } from 'react';

import { Router, Route, Link, IndexRoute } from 'react-router';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker';
import $ from 'jquery';

const Navigation = React.createClass({
  getInitialState: function() {
    return {
      
      open:false,
      
    };
  },
  handleToggle: function(){
    this.setState({open: !this.state.open})
  },
  handleClose: function(){
    this.setState({open: false});
  },
  componentDidMount: function(){
    
  },
  render: function(){
    return (  
      <MuiThemeProvider  muiTheme={getMuiTheme()}>
        <div >
          <AppBar
            style={{width:'100%',boxShadow:'none',position: 'fixed' , top: 0}}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="异常URL检测系统"
          />
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} //点外部隐藏
          >
          <Link style={{  textDecoration: 'none'}} to='/'>
          <MenuItem onTouchTap={this.handleClose} primaryText="首页 "
            style={{
              height:'64px',
              color:'white',
              backgroundColor: 'rgb(0, 188, 212)',
              lineHeight: '64px',
              fontWeight: '300',
              fontSize:'24px',
              cursor: 'pointer',
            }}
          />
          </Link>
          <Link style={{  textDecoration: 'none'}} to='/about'><MenuItem onTouchTap={this.handleClose} >关于</MenuItem></Link>
          <Link style={{  textDecoration: 'none'}} to='/log'><MenuItem onTouchTap={this.handleClose} >服务器日志</MenuItem></Link>

          
          
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
});

module.exports = Navigation;
