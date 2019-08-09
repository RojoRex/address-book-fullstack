function addnewGroup(req,res){
    const db=req.app.get('db');
    const{groupname} =req.body;

    db.groups
    .save({
        groupname
    })
    .then(contact => res.status(201).json(contact))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

module.exports={
addnewGroup,
}