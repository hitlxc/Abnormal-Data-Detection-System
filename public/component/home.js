import React, { PropTypes, Component } from 'react';

//import ReactDOM from 'react-dom';

export default class Home extends Component {
  render() {
    return <div>
    	<div style={{
    		background:'url(../img/banner2.png) no-repeat',  
    		width:'100%',
    		height:600,
    		backgroundSize: 'cover' ,
    	}}></div>
    	<div style={{
    		textAlign:'center',
    		margin:'100px 0 50px 0'
    	}}>
    		<h2>守护中小型网站安全</h2>
    		<h3>基于机器学习，对恶意URL进行分析，拦截</h3>
    		<h3>快速，高效的URL防火墙</h3>
    	</div>
    	<div style={{width: '80%', height:200, padding: '0px 10%'}}>
    		<div style={{textAlign:'center',float:'left',width:'40%',height:80,margin:'5%'}}>
    			<a style={{color:'black' , textDecoration:'none'}} href='/log'>
	    			<div style={{
			    		background:'url(../img/日志.png) no-repeat',  
			    		width:100,
			    		height:100,
			    		backgroundSize: 'cover' ,
			    		margin:'auto',
			    		marginBottom:10
			    	}}></div>
	    			<span>服务器日志 </span>
    			</a>
    		</div>
    		<div style={{textAlign:'center',float:'left',width:'40%',height:80,margin:'5%'}}>
	    		<a style={{color:'black' , textDecoration:'none'}} href='/check'>
	    			<div style={{
			    		background:'url(../img/检测.png) no-repeat',  
			    		width:100,
			    		height:100,
			    		backgroundSize: 'cover' ,
			    		margin:'auto',
			    		marginBottom:10
			    	}}></div>
	    			<span>异常URL在线检测 </span> 
    			</a>
    		</div>
    	</div>

    	<div style={{width: '80%', height:200, padding: '0px 10%',margin:'40px 0 40px 0'}}>
    		<div style={{textAlign:'center',float:'left',width:'40%',height:80,margin:'5%'}}>
    			<a style={{color:'black' , textDecoration:'none'}} href='/blacklist'>
	    			<div style={{
			    		background:'url(../img/黑名单.png) no-repeat',  
			    		width:100,
			    		height:100,
			    		backgroundSize: 'cover' ,
			    		margin:'auto',
			    		marginBottom:10
			    	}}></div>
	    			<span>黑名单 </span>
	    		</a>
    		</div>
    		<div style={{textAlign:'center',float:'left',width:'40%',height:80,margin:'5%'}}>
    			<a style={{color:'black' , textDecoration:'none'}} href='/about'>
	    			<div style={{
			    		background:'url(../img/关于.png) no-repeat',  
			    		width:100,
			    		height:100,
			    		backgroundSize: 'cover' ,
			    		margin:'auto',
			    		marginBottom:10
			    	}}></div>
	    			<span>关于我们 </span> 
	    		</a>
    		</div>
    	</div>
    </div>;
  }
}