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
import IconButton from '@material-ui/core/IconButton';



const AddressStyle={
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  butt:{
    marginRight:'20px',
    color:'white',
    
  },
}


class Addressbook extends React.Component{
constructor(props){
  super (props)
  this.state = {
    open: false,
  };
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

    localStorage.clear()
    this.props.history.push('/')

  }

  render(){
      const {classes}=this.props
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" color="secondary" className={classes.butt} onClick={this.handleClickOpen}>
          Add New Contact
        </Button>
          <Typography variant="h6" className={classes.title}>
            Address Book    
          </Typography>
          <Button onClick={(e) => this.logout(e)  } color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>

      <Dialog
          onClose={this.handleClose}
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
                autoFocus/>
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"/>
            </Grid>
          
    
        <Grid item xs={12}  sm={6}>
         <TextField
          variant="outlined"
           fullWidth
           margin="normal"
           label="Home Phone"
           className="text-field"/> 
         </Grid> 
       <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Mobile Phone"
           margin="normal"/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Work Phone"
           margin="normal"/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Email"
           margin="normal"/>
      </Grid>


      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="City"
           margin="normal"/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="State or Province"
           margin="normal"/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Postal Code"
           margin="normal"/>
      </Grid>

      <Grid item  xs={12} sm={6}>
        <TextField
           fullWidth
           variant="outlined"
           label="Country"
           margin="normal"/>
      </Grid>

          </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save New Contact
            </Button>
          </DialogActions>
        </Dialog>

    </div>
    )
  }
}

export default withStyles (AddressStyle) (Addressbook)