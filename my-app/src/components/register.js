import React from 'react'
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Icon from '../images/avatar.png'
import Background from '../images/background.jpg'
import axios from 'axios'






const signInstyle = {
  'signIn':{
   margin:'15px auto',
   padding:'17px',
   maxWidth: '550px',
   height:'395px',
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
    marginTop:'45px',
  },
  'pads':{
    marginBottom:'40px',
  },
  'imgs':{
    marginTop: '65px',
    height:'100px',
    width:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}
 


class LogIn extends React.Component {
constructor(props){
  super(props)

  this.state={
    firstname:'',
    lastname:'',
    user:'',
    password:'',
    userError:false,
    passError:false,
  }
  this.handlePassword=this.handlePassword.bind(this)
  this.handleuserName=this.handleuserName.bind(this)
  this.handlefirstName=this.handlefirstName.bind(this)
  this.handlelastName=this.handlelastName.bind(this)
  this.handlesubmit=this.handlesubmit.bind(this)
}

handlefirstName(e){
  this.setState({firstname: e.target.value})
  var input=e.target.value;
  if (input.length){
    this.setState({userError:false})
  }
  else{
    this.setState({userError:true})
  }
}

handlelastName(e){
  this.setState({lastname: e.target.value})
  var input=e.target.value;
  if (input.length){
    this.setState({userError:false})
  }
  else{
    this.setState({userError:true})
  }

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

handlesubmit(e){
  e.preventDefault();

  axios.post("http://localhost:3001/api/register",{
    firstname:this.state.firstname,
    lastname:this.state.lastname,
    username:this.state.user,
    password:this.state.password
  })
  .then(res=>{
    this.props.history.replace("/");
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
       <form onSubmit={this.handlesubmit}>
        
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.firstname}
                onBlur={this.handlefirstName}
                onChange={this.handlefirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={this.state.lastname}
                onBlur={this.handlelastName}
                onChange={this.handlelastName}
              />
            </Grid>
          
    
        <Grid item xs={12}>
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
         </Grid>
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
           
       
       <Grid item  xs={12}>
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
      
      </Grid>
      
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
          
          
          <div className={classes.bBox}>
           <Button variant="contained" color="primary"  style={{backgroundColor:'#607C98' ,width:'500px',marginLeft:'35px'}} onClick={this.handlesubmit}>Create Account</Button>
          </div>
          </Grid>
         
       </form>
       </Paper>
       
   </Grid>
  
   </div>
 </div>
 );
}
}

export default withStyles(signInstyle) (LogIn)
