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

import axios from 'axios';


const tableStyle={
    'signIn':{
        margin:'15px auto',
        padding:'17px',
        maxWidth: '90%',
        marginTop:'50px',
        height:'700px',
        border:'1px solid black',
       },
       'input':{
        marginLeft:'20px',
        marginTop:'10px',
        width:'19%',
       },
       'list':{
        flexGrow: 1,
       },
       'bg':{
          backgroundColor:'gray',
       },
       'field':{
        marginTop:'10px',
        marginLeft:'40px',
        width:'39%',
     },
     
     
}




class Tablelist extends React.Component{
    constructor(props){
        super(props)

        this.state={
            contacts:[],
            val:'',
            serts:'',
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleSelect=this.handleSelect.bind(this)
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/api/list/${localStorage.getItem('usernameId')}`)
        .then(res=>{this.setState({
            contacts:res.data
        }) 
        console.log(res) 
    })   
    }
    

    handleDelete(id){
        axios.delete(`http://localhost:3001/delete/${id}`)
        .then(res =>{
          window.location.reload(true)
        })
      }

      handleSelect=sort=>e=>{
        this.setState({[sort]:e.target.value,})
      }

   handlesort(e){
     console.log(e)
     this.setState({val:e})
        axios.get(`http://localhost:3001/api/list/${localStorage.getItem('usernameId')+'?sort='+e}`)
        .then(res => {  this.setState({ contacts: res.data})  
        }).catch(err => {console.error(err)})
        }

    render(){
        const {classes}=this.props
        return(

<Paper >
          
    <div style={{width: '100%',display: 'flex',flexWrap: 'wrap',}}>
        
        <FormControl className={classes.input}>
        <InputLabel htmlFor="sort">sort</InputLabel>
        <Select  value={this.state.val} onChange={(e)=>this.handlesort(e.target.value)}>
               <MenuItem value="firstname" >Firstname</MenuItem>
               <MenuItem  value="lastaname">Lastname</MenuItem>
               
        </Select>
        </FormControl >



          <TextField className={classes.field} label="Search" value={this.state.serts} onChange={this.handleSelect("serts")} fullWidth/>


    </div>

        <Grid className={classes.signIn}>
        <Table >
          <TableHead>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Mobile Phone</TableCell>
              <TableCell align="left">Actions</TableCell>
          </TableHead>
          <TableBody>
          {this.state.contacts.map(res => (
              <TableRow key={res.id}>
                <TableCell align="left" >{res.firstname}</TableCell>
                <TableCell align="left" >{res.lastaname}</TableCell>
                <TableCell align="left" >{res.mobilephone}</TableCell>
                <TableCell align="left" >
                    <IconButton size="small"  >
                      edit
                    </IconButton>
                    <IconButton size="small" onClick={()=>this.handleDelete(res.id)}>
                    <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
    </Grid>
</Paper>
        )
    }
}

export default withStyles (tableStyle) (Tablelist)