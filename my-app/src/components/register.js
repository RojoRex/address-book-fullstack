import React from 'react'
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Icon from '../images/avatar.png'
import Background from '../images/background.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios'






const signInstyle = {
  'signIn':{
   margin:'15px auto',
   padding:'17px',
   maxWidth: '550px',
   height:'455px',
  },
  'bG':{
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundImage: `url(${Background})`,
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
    nameError:false,
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
    this.setState({nameError:false})
  }
  else{
    this.setState({nameError:true})
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
    if( res.data.error==="Account already taken"){
      alert('username already taken')
    }else{
    alert('account has been created')
    this.props.history.replace("/");
  }
  console.log(res)
  })

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
       <img src={Icon} className={classes.imgs} alt=""/>
       <Paper  className={classes.signIn}>
       
        
        <Grid container spacing={2}>
        <Grid item xs={12} >
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
                error={this.state.nameError}
              />
            </Grid>

            {this.state.nameError ? (
                 <React.Fragment>
                  <p className={classes.warning}>
                    Firstname is required
                  </p>
                  </React.Fragment>
                  ) : ( 
                  <React.Fragment> 
                    <p className={classes.dis}>
                  </p>
                  </React.Fragment>
                   
          )}
           
       

            <Grid item xs={12} >
              <TextField
                variant="outlined"
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
        /> 
         </Grid>
        
       <Grid item  xs={12}>
        <TextField
           fullWidth
           variant="outlined"
           label="Password"
           type="password"
           margin="normal"
           value={this.state.pass}
           onBlur={this.handlePassword}
           onChange={this.handlePassword}
      />
      
      </Grid>
          
          
          <div className={classes.bBox}>
           <Button variant="contained" color="primary"  style={{backgroundColor:'#607C98' ,width:'500px',marginLeft:'35px'}} onClick={this.handlesubmit}>Create Account</Button>
                    
           <Grid container style={{marginTop:'10px'}}>
            <Grid item style={{marginLeft:'170px'}}>
              <Link to={'/'} variant="body2">
                {"Have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
          
          </div>
          </Grid>
         
      
       </Paper>
       
   </Grid>
  
   </div>

 )
}
}

export default withStyles(signInstyle) (LogIn)
