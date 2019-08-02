import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
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
}




class Tablelist extends React.Component{
    constructor(props){
        super(props)

        this.state={
            contacts:[],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/api/contacts")
        .then(res=>{
            console.log(res.data)
            this.setState({
                contacts:res.data
            })
        })
    }

    render(){
        const {classes}=this.props
        return(
    <Paper className={classes.signIn}>
        <Grid>
        <Table>
          <TableHead>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Mobile Phone</TableCell>
          </TableHead>
          <TableBody>
          {this.state.contacts.map(res => (
              <TableRow >
                <TableCell align="right">{res.firstname}</TableCell>
                <TableCell align="right">{res.lastaname}</TableCell>
                <TableCell align="right">{res.mobilephone}</TableCell>
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