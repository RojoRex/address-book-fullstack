import React from 'react'
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';





const signInstyle = {
  'signIn':{
   margin:'15px auto',
   padding:'17px',
   maxWidth: '357px',
   height:'325px',
   border:'2px solid red',
   marginTop:'130px',
  },
  'centerStyle':{
    marginTop: '65px',
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
  }
}
 


class LogIn extends React.Component {
constructor(props){
  super(props)

  this.state={
    email:'',
    password:'',
    emailError:false,
    passError:false,
  }
  this.handlePassword=this.handlePassword.bind(this)
  this.handleEmail=this.handleEmail.bind(this)
}

handleEmail(e){
  this.setState({email: e.target.value})
  var input=e.target.value;
  if (input.length){
    this.setState({emailError:false})
  }
  else{
    this.setState({emailError:true})
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


render(){
  const {classes}=this.props
 return (
 
   <div className={classes.centerStyle}>
     <Grid
       container
       direction="column"
       justify="center"
       alignItems="center"

       >
       
       <Paper  className={classes.signIn}>
        
       <form onSubmit={this.handleLogin}>
        <div className={classes.cont}>
        
         <TextField
          variant="outlined"
           required
           fullWidth
           margin="normal"
           label="Email Address"
           className="text-field"
           value={this.state.email}
           onBlur={this.handleEmail}
           onChange={this.handleEmail}
           error={this.state.emailError}
      
        /> 
        {this.state.emailError ? (
                 <React.Fragment>
                  <p className={classes.warning}>
                    Email is required
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
           <Button variant="contained" color="primary"  style={{backgroundColor:'#607C98',width:'320px',marginTop:'10px'}} type="submit">Log In</Button>
           
           <Grid container style={{marginTop:'10px'}}>
            <Grid item style={{marginLeft:'50px'}}>
              <Link to={'./address'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
           </div>
       </form>
       </Paper>
       
   </Grid>
   </div>
 
 );
}
}

export default withStyles(signInstyle) (LogIn)
