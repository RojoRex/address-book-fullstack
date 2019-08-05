function addNewaddress(req,res){
    const db=req.app.get('db');
    const{userid,firstname,lastaname,email,city,stateprob,postal,
        country,homephone,mobilephone,workphone,} =req.body;

    db.addressbook
    .save({
        userid,
        firstname,
        lastaname,
        email,
        city,
        stateprob,
        postal,
        country,
        homephone,
        mobilephone,
        workphone,
    })
    .then(address => res.status(201).json(address))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

  function getuserData(req, res) {
    const db = req.app.get('db');
    const {userid}=req.params;
    
    if(userid){
    db.addressbook
    .find({userid: userid})
    .then(list =>{res.status(201).json(list)})
    .catch(err => {
          res.status(200).json({ error: err.message });
          console.error(err);
          res.status(500).end();
      });
    } else {
        res.status(201).json('list not found') 
    }

}

function deleteContact(req, res) {
    const db = req.app.get('db');
    const {id}=req.params;
    console.log(id)
    if(id){
    db.addressbook.destroy({id})
    .then(list =>{res.status(201).json(list)})
    .catch(err => {
          res.status(200).json({ error: err.message });
          console.error(err);
          res.status(500).end();
      });
    } else {
        res.status(201).json('user has been deleted') 
    }

}


module.exports={
    addNewaddress,
    getuserData,
    deleteContact,
};