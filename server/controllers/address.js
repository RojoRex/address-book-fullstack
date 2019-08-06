function addNewcontact(req,res){
    const db=req.app.get('db');
    const{userId,firstname,lastaname,email,city,stateprob,postal,
        country,homephone,mobilephone,workphone,} =req.body;

    db.addcontacts
    .save({
        userId,
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
    .then(contact => res.status(201).json(contact))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

  function getuserData(req, res) {
    const db = req.app.get('db');
    const {userId}=req.params;
    const {sort} = req.query
    console.log(sort)
   if(sort!=undefined){
        db.addcontacts
      .find({userId},{order: [{field: sort,direction: 'asc',}]
      }).then(contact => { res.status(200).json(contact);
      }).catch(err => { res.status(500).end();
      })
    }else{
        db.addcontacts
      .find(      
      {
        userId      
      }).then(contact => { res.status(200).json(contact);
      }).catch(err => { res.status(500).end();
      })
    }
}

function deleteContact(req, res) {
    const db = req.app.get('db');
    const {id}=req.params;
    console.log(id)
    if(id){
    db.addcontacts.destroy({id})
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
    addNewcontact,
    getuserData,
    deleteContact,
};