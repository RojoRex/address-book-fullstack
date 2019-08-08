import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Table from './contactlist'
import Tooltip from '@material-ui/core/Tooltip';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';








const useStyles= {
  'root': {
    display:"flex",
    height:"70px",
    width:"100%",
  },
  'addcontact': {
    marginRight:"20px",
  },
  'title': {
    flexGrow: '1',
  },
}


class Addressbook extends React.Component{
constructor(props){
  super (props)
  this.state = {
    open: false,
    userId:'',
    firstname:'',
    lastname:'',
    email:'',
    city:'',
    stateprob:'',
    postal:'',
    country:'',
    homephone:'',
    mobilephone:'',
    workphone:'',
  };
  this.handleInput=this.handleInput.bind(this)
  this.handlecreatContact=this.handlecreatContact.bind(this)
}

componentDidMount(){
  if(localStorage.getItem("usernameId")){
    this.setState({
      userId:localStorage.getItem('usernameId')
      
  })
  axios.get(`http://localhost:3001/api/list/${localStorage.getItem('usernameId')}`)
  .then(res=>{this.setState({
      contacts:res.data
  })  
  })
  } 
  
}


  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  logout(e){

   
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('usernameId')
    this.props.history.push('/')

  }



  handleInput=input=>e=>{
    this.setState({[input]:e.target.value,})
  }

  handlecreatContact(e){
    e.preventDefault();
    axios.post("http://localhost:3001/api/contacts",{
      userId:this.state.userId,
      first_name:this.state.firstname,
      last_name:this.state.lastname,
      email:this.state.email,
      city:this.state.city,
      state_or_province:this.state.stateprob,
      postal_code:this.state.postal,
      country:this.state.country,
      home_phone:this.state.homephone,
      mobile_phone:this.state.mobilephone,
      work_phone:this.state.workphone,
    })
    .then(res=>{
    window.location.reload(true)
    
    })

  }


  render(){
    const {classes} = this.props
    return(
      
      <div >
      <AppBar position="static" className={classes.root}>
        <Toolbar>
        <Tooltip title="Add contact">
        <Button className={classes.addcontact} variant="contained" color="secondary" edge="start"  onClick={this.handleClickOpen}>
        <AccountBoxIcon/>
        </Button></Tooltip>
        <Typography variant="h6" className={classes.title} style={{marginLeft:"20px",}} >
          Addressbook
        </Typography>
          <IconButton onClick={(e) => this.logout(e)} color="inherit" >Logout</IconButton>
        </Toolbar>
      </AppBar>
      <Table/>
      <form onSubmit={this.handlecreatContact}>
      <Dialog
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle onClose={this.handleClose}>
            Add New Contact
          </DialogTitle>
          <DialogContent dividers>
          <Grid container spacing={2}>
        <Grid item xs={12}>
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
                onBlur={this.handleInput('firstname')}
                onChange={this.handleInput('firstname')}/>
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={this.state.lastname}
                onBlur={this.handleInput('lastname')}
                onChange={this.handleInput('lastname')}/>
            </Grid>
          
    
        <Grid item xs={12}  sm={6}>
         <TextField
          variant="outlined"
           fullWidth
           margin="normal"
           label="Home Phone"
           className="text-field"
           value={this.state.homephone}
           onChange={this.handleInput('homephone')}/>
         </Grid> 
       <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Mobile Phone"
           margin="normal"
           value={this.state.mobilephone}
           onChange={this.handleInput('mobilephone')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Work Phone"
           margin="normal"
           value={this.state.workphone}
           onChange={this.handleInput('workphone')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Email"
           margin="normal"
           value={this.state.email}
           onChange={this.handleInput('email')}/>
      </Grid>


      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="City"
           margin="normal"
           value={this.state.city}
           onChange={this.handleInput('city')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="State or Province"
           margin="normal"
           value={this.state.stateprob}
           onChange={this.handleInput('stateprob')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Postal Code"
           margin="normal"
           value={this.state.postal}
           onChange={this.handleInput('postal')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Country"
           margin="normal"
           value={this.state.country}
           onChange={this.handleInput('country')}/>
      </Grid>

          </Grid> 
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handlecreatContact} color="primary">
              Save New Contact
            </Button>
          </DialogActions>
        </Dialog>
        </form>
    </div>
    )
  }
}

export default withStyles (useStyles)  (Addressbook)