import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import axios from 'axios';

const AddressStyle={
  'mid':{
    margin:'15px auto',
    padding:'17px',
  
   },
}


class Addressbook extends React.Component{
constructor(props){
  super (props)
  this.state = {
    open:this.props.open,
    disable:true,
    userId:this.props.contactsList.id,
    firstname:this.props.contactsList.first_name,
    lastname:this.props.contactsList.last_name,
    email:this.props.contactsList.email,
    city:this.props.contactsList.city,
    stateprob:this.props.contactsList.state_or_province,
    postal:this.props.contactsList.postal_code,
    country:this.props.contactsList.country,
    homephone:this.props.contactsList.home_phone,
    mobilephone:this.props.contactsList.mobile_phone,
    workphone:this.props.contactsList.work_phone,
  };
  this.handleInput=this.handleInput.bind(this)
  this.handleUpdate=this.handleUpdate.bind(this)
}
  
  handleUpdate(){
    const id=this.props.contactsList.id
    axios.patch(`http://localhost:3001/api/update/`+id,{
      first_name:this.state.firstname,
      last_name:this.state.lastname,
      email:this.state.email,
      postal_code:this.state.postal,
      city:this.state.city,
      state_or_province:this.state.stateprob,
      country:this.state.country,
      home_phone:this.state.homephone,
      mobile_phone:this.state.mobilephone,
      work_phone:this.state.workphone,
      
    }).then(res=>{
     window.location.reload();
    })
  }



  handleEdit = () => {
    this.setState({ disable: false })
  };

  handleCancleEdit=()=>{
    this.setState({disable:true,open:false})
  }

  handleInput=input=>e=>{
    this.setState({[input]:e.target.value,})
  }
 
    
  handleClose = (e) => {
    this.setState({ open: true})
    
  };

  render(){
      const {classes}=this.props 
    return(
      
      <div className={classes.mid}>
          <DialogTitle>
            Contact
          </DialogTitle>
          <DialogContent dividers>
          
          <Grid container spacing={2}>
          
        <Grid item xs={12}>
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
                disabled={this.state.disable}
                autoFocus
                value={this.state.firstname}
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
                disabled={this.state.disable}
                value={this.state.lastname}
                onChange={this.handleInput('lastname')}/>
            </Grid>
          
    
        <Grid item xs={12}  sm={6}>
         <TextField
          variant="outlined"
           fullWidth
           margin="normal"
           label="Home Phone"
           disabled={this.state.disable}
           className="text-field"
           value={this.state.homephone}
           onChange={this.handleInput('homephone')}/>
         </Grid> 
       <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Mobile Phone"
           disabled={this.state.disable}
           margin="normal"
           value={this.state.mobilephone}
           onChange={this.handleInput('mobilephone')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Work Phone"
           disabled={this.state.disable}
           margin="normal"
           value={this.state.workphone}
           onChange={this.handleInput('workphone')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           disabled={this.state.disable}
           label="Email"
           margin="normal"
           value={this.state.email}
           onChange={this.handleInput('email')}/>
      </Grid>


      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           disabled={this.state.disable}
           label="City"
           margin="normal"
           value={this.state.city}
           onChange={this.handleInput('city')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           disabled={this.state.disable}
           label="State or Province"
           margin="normal"
           value={this.state.stateprob}
           onChange={this.handleInput('stateprob')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           disabled={this.state.disable}
           label="Postal Code"
           margin="normal"
           value={this.state.postal}
           onChange={this.handleInput('postal')}/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           disabled={this.state.disable}
           variant="outlined"
           label="Country"
           margin="normal"
           value={this.state.country}
           onChange={this.handleInput('country')}/>
      </Grid>

          </Grid> 
            </Grid>
          </Grid>
    </DialogContent>
    <DialogActions>
            <Button onClick={this.handleEdit} variant="contained"  color="primary">
              Edit
            </Button>
            <Button onClick={this.handleUpdate} variant="contained" disabled={this.state.disable} color="primary">
              Save
            </Button>
            <Button onClick={this.handleCancleEdit} variant="contained" color="secondary">
              Cancel Edit
            </Button>
          </DialogActions>
         
    </div>
    )
  }
}

export default withStyles (AddressStyle) (Addressbook)