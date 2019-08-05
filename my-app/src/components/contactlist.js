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
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IconButton } from '@material-ui/core';
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
        width:'19%',
       },
     
}




class Tablelist extends React.Component{
    constructor(props){
        super(props)

        this.state={
            contacts:[],
        }
        this.handleDelete=this.handleDelete.bind(this)
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
          console.log(res)
        })
      }

    render(){
        const {classes}=this.props
        return(

<Paper >
          
    <div style={{width: '100%',display: 'flex',flexWrap: 'wrap',}}>
        
        <FormControl className={classes.input}>
        <InputLabel htmlFor="sort">sort</InputLabel>
        <Select  >
                
               <MenuItem  value='recent edited' >Recent Edited</MenuItem>
               <MenuItem  value='aToz' >Name A-Z</MenuItem>
               <MenuItem  value='zToa' >'Name Z-A</MenuItem>
             
        </Select>
      </FormControl >

      <FormControl className={classes.input}>
        <InputLabel htmlFor="status">Search</InputLabel>
        <Select >
               <MenuItem  value='All' >All</MenuItem>
        </Select>
      </FormControl>

    <Button >  Apply </Button>
    
    
    </div>

        <Grid className={classes.signIn}>
        <Table>
          <TableHead>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Mobile Phone</TableCell>
              <TableCell align="left">Actions</TableCell>
          </TableHead>
          <TableBody>
          {this.state.contacts.map(res => (
              <TableRow >
                <TableCell align="left">{res.firstname}</TableCell>
                <TableCell align="left">{res.lastaname}</TableCell>
                <TableCell align="left">{res.mobilephone}</TableCell>
                <TableCell align="left">
                    <IconButton size="small" onClick={()=>this.handleDelete(res.id)} >
                      edit
                    </IconButton>
                    <IconButton size="small">
                      delete
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