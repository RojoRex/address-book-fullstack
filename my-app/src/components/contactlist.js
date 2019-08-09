import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Viewcontact from './viewContacts'
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';



const tableStyle={
    'signIn':{
        margin:'15px auto',
        padding:'17px',
        maxWidth: '90%',
        marginTop:'50px',
        height:'800px',
        border:'1px solid black',
       },
       'input':{
        marginLeft:'20px',
        marginTop:'10px',
        width:'19%',
       },
       'bg':{
          backgroundColor:'gray',
       },
       'field':{
        marginTop:'10px',
        marginLeft:'40px',
        width:'39%',
     },
     root: {
      width: '100%',
      overflowX: 'auto',
    },
     
     
}




class Tablelist extends React.Component{
    constructor(props){
        super(props)

        this.state={
            contacts:[],
            viewcontact:[],
            val:'',
            serts:'',
            open: false,
            query: '',
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleSelect=this.handleSelect.bind(this)
        this.handelcontactView=this.handelcontactView.bind(this)
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/api/list/${localStorage.getItem('usernameId')}`)
        .then(res=>{this.setState({
            contacts:res.data
        }) 
    })   
    }
    
    search(e){
      this.setState({
        query: '',
      })
    }
  
    handleSearch(event) {
      this.setState({
        query: event.target.value
      })
    }
  
  

    handleDelete(id){
        axios.delete(`http://localhost:3001/api/delete/${id}`)
        .then(res =>{
          window.location.reload(true)
        })
      }

      handleSelect=sort=>e=>{
        this.setState({[sort]:e.target.value,})
      }

   handlesort(e){
     this.setState({val:e})
        axios.get(`http://localhost:3001/api/list/${localStorage.getItem('usernameId')+'?sort='+e}`)
        .then(res => {  this.setState({ contacts: res.data})  
        }).catch(err => {console.error(err)})
        }


        handelcontactView(e){
          
          axios.get(`http://localhost:3001/api/data/${e}`)
          .then(res=>{
            this.setState({
              viewcontact: res.data[0],
              open:true,
            })
          })  
        }

        handleClose = () => {
          this.setState({ open: false});
        };


    render(){
        const {classes}=this.props
        return(


       <React.Fragment>   


        <Grid className={classes.signIn} >
          <Paper className={classes.root}>
          <div>
          <TextField variant="outlined" className={classes.field} label="Search" value={this.state.query} onChange={(event) => this.handleSearch(event)} fullWidth/>

          <FormControl className={classes.input}>
            <InputLabel htmlFor="sort">sort</InputLabel>
        <       Select  value={this.state.val} onChange={(e)=>this.handlesort(e.target.value)}>
               <MenuItem value="first_name" >Firstname</MenuItem>
               <MenuItem  value="last_name">Lastname</MenuItem>
               
                </Select>
        </FormControl >
          
        </div>
        <Table >
          <TableHead>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Mobile Phone</TableCell>
              <TableCell align="left">Actions</TableCell>
          </TableHead>
          
          {this.state.contacts.filter(contacts=>contacts.first_name.toLowerCase().match(this.state.query.toLowerCase())||contacts.last_name.toLowerCase().match(this.state.query.toLowerCase())).map(res => (
             <TableBody >
             <TableRow key={res.userId}>
                <TableCell align="left" >{res.first_name}</TableCell>
                <TableCell align="left" >{res.last_name}</TableCell>
                <TableCell align="left" >{res.mobile_phone}</TableCell>
                <TableCell align="left">
                <Tooltip title="View">
                    <IconButton onClick={()=> this.handelcontactView(res.id)} >
                    <VisibilityIcon />
                    </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                    <IconButton  onClick={()=>this.handleDelete(res.id)}>
                    <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                  </TableCell>
              </TableRow>
              </TableBody>
            ))}
         
        </Table>
        </Paper>
    </Grid>
    <Dialog  open={this.state.open} onClose={this.handleClose}>
    <Viewcontact contactsList={this.state.viewcontact} open={this.state.open}/>
    </Dialog>
    
    </React.Fragment>
        )
    }
}

export default withStyles (tableStyle) (Tablelist)