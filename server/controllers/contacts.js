function createContact(req,res){
    const db=req.app.get('db')

    const{homephone,mobilephone,workphone}=req.body;

    db.contacts
    .save({
        homephone,
        mobilephone,
        workphone,
    })
    .then(contact=>res.status(201).json(contact))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

module.exports={
    createContact,
}