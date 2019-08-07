import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const AddressStyle={
  root: {
    flexGrow: 1,
    maxWidth:'100%',
  },
  title: {
    flexGrow: 1,
  },
  butt:{
    marginRight:'20px',
    color:'white',
    
  },

    tool: {
        width: '100%',
        maxWidth: 360,
      },
}


class Addressbook extends React.Component{
constructor(props){
  super (props)
  this.state = {
    
  };
  this.handleClose=this.handleClose.bind(this)
}

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

 
  render(){
      const {classes,contactsList}=this.props
      
    return(
      <div className={classes.root}>
      
     
          <DialogTitle onClose={this.handleClose}>
            Contact
          </DialogTitle>
          <DialogContent dividers>
          
          <Grid container spacing={2}>
          
        <Grid item xs={12}>
        <List className={classes.loot}>
        <ListItem alignItems="flex-start">
        <ListItemText
          primary="Fullname"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.first_name+" " +contactsList.last_name}
            </React.Fragment>
          }
        />
      </ListItem>

      
        <ListItem alignItems="flex-start">
        <ListItemText
          primary="Email"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.email}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="City"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.city}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="State or Province"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.state_or_province}
            </React.Fragment>
          }
        />
      </ListItem>


      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Postal Code"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.postal_code}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Country"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.country}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Home Phone"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.home_phone}
            </React.Fragment>
          }
        />
      </ListItem>

        
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Mobile Phone"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.mobile_phone}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Work Phone"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               
              </Typography>
              {contactsList.work_phone}
            </React.Fragment>
          }
        />
      </ListItem>



      </List>
            </Grid>


           
   
          </Grid>
          
    </DialogContent>

      
    </div>
    )
  }
}

export default withStyles (AddressStyle) (Addressbook)