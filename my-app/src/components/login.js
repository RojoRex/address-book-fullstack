import React from 'react'
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '../images/avatar.png'
import Background from '../images/background.jpg'
import axios from 'axios';





const signInstyle = {
  'signIn':{
   margin:'15px auto',
   padding:'17px',
   maxWidth: '357px',
   height:'325px',
  },
  'bG':{
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundImage: `url(${Background})`,
    height:'1000px',
  },

   'warning': {
    color: 'red',
    fontSize: '10px',
  },
  'dis':{
    display:'none',
  },

  'bBox': {
  
    height:'120px',
    paddingTop:'40px'
  },

  'cont':{

    width:'100%',
    height:'70px',
    marginTop:'25px',
  },
  'imgs':{
    marginTop: '65px',
    height:'100px',
    width:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}
 


class LogIn extends React.Component {
constructor(props){
  super(props)

  this.state={
    user:'',
    password:'',
    userError:false,
    passError:false,
  }
  this.handlePassword=this.handlePassword.bind(this)
  this.handleuserName=this.handleuserName.bind(this)
  this.handleLogin=this.handleLogin.bind(this)
}

handleuserName(e){
  this.setState({user: e.target.value})
  var input=e.target.value;
  if (input.length){
    this.setState({userError:false})
  }
  else{
    this.setState({userError:true})
  }

}

handlePassword(e){
  this.setState({password:e.target.value})
  var input=e.target.value;
  if (input.length){
    this.setState({passError:false})
  }
  else{
    this.setState({passError:true})
  }
}

handleLogin(e){
  e.preventDefault();

  axios.post("http://localhost:3001/api/login",{
    username:this.state.user,
    password:this.state.password
  })
  .then(res=>{
    console.log(res);
    
  })
}



render(){
  const {classes}=this.props
 return (
 <div className={classes.bG}>
   <div className={classes.centerStyle}>
     <Grid
       container
       direction="column"
       justify="center"
       alignItems="center"

       >
       <img src={Icon} className={classes.imgs} alt=""/>
       <Paper  className={classes.signIn}>
       <form onSubmit={this.handleLogin}>
        <div className={classes.cont}>
        
         <TextField
          variant="outlined"
           required
           fullWidth
           margin="normal"
           label="Username"
           className="text-field"
           value={this.state.user}
           onBlur={this.handleuserName}
           onChange={this.handleuserName}
           error={this.state.userError}
      
        /> 
        {this.state.userError ? (
                 <React.Fragment>
                  <p className={classes.warning}>
                    Username is required
                  </p>
                  </React.Fragment>
                  ) : ( 
                  <React.Fragment> 
                    <p className={classes.dis}>
                  </p>
                  </React.Fragment>
                   
          )}
        </div>

       <div className={classes.cont}>
        <TextField
           fullWidth
           required
           variant="outlined"
           label="Password"
           type="password"
           margin="normal"
           value={this.state.pass}
           onBlur={this.handlePassword}
           onChange={this.handlePassword}
           error={this.state.passError}
          
      />
            {this.state.passError ? (
                 <React.Fragment>
                  <p className={classes.warning}>
                    Password is required
                  </p>
                  </React.Fragment>
                  ) : ( 
                  <React.Fragment> 
                    <p className={classes.dis}>
                  </p>
                  </React.Fragment>
                   
          )}
          </div>
        
          <div className={classes.bBox}>
           <Button variant="contained" color="primary"  style={{backgroundColor:'#607C98',width:'320px',marginTop:'10px'}} type="submit" onClick={this.handleLogin}>Log In</Button>
           
           <Grid container style={{marginTop:'10px'}}>
            <Grid item style={{marginLeft:'50px'}}>
              <Link to={'./register'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
           </div>
       </form>
       </Paper>
       
   </Grid>
   </div>
   </div>
 );
}
}

export default withStyles(signInstyle) (LogIn)
