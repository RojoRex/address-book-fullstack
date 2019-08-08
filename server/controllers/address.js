function addNewcontact(req,res){
    const db=req.app.get('db');
    const{userId,first_name,last_name,email,city,state_or_province,postal_code,
        country,home_phone,mobile_phone,work_phone,} =req.body;

    db.contacts
    .save({
        userId,
        first_name,
        last_name,
        email,
        city,
        state_or_province,
        postal_code,
        country,
        home_phone,
        mobile_phone,
        work_phone,
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
  
   if(sort!=undefined){
        db.contacts
      .find({userId},{order: [{field: sort,direction: 'asc',}]
      }).then(contact => { res.status(200).json(contact);
      }).catch(err => { res.status(500).end();
      })
    }else{
        db.contacts
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

    if(id){
    db.contacts.destroy({id})
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

function getList(req, res) {
  const db = req.app.get('db');
  const {userId}=req.params;
 
  if(userId){
  
  db.contacts.find({id:userId})
  .then(list => res.status(201).json(list)
  )

  } else {
      res.status(201).json('error') 
  }

}

function contactdata(req, res) {
  const db = req.app.get('db');
  const {id}=req.params;
  
  if(id){
  db.contacts.find({id: id})
  .then(contactdata =>{
      
      res.status(201).json(contactdata)

  })
  .catch(err => {
        res.status(200).json({ error: err.message });
        console.error(err);
        res.status(500).end();
    });
  } else {
      res.status(201).json('Error') 
  }

}

function update_contactdata(req, res) {
  const db = req.app.get('db');
  const {id}=req.params;
  const { first_name,last_name,email,postal_code,city,
    state_or_province,country, home_phone, mobile_phone, work_phone} =req.body;
  
  if(id){
  db.contacts
  .update(
      {id: id},
      {
          first_name,last_name,email,postal_code,city,
          state_or_province,country, home_phone, mobile_phone, work_phone
      })
  .then(contactdata =>{
      res.status(201).json(contactdata)
  })
  .catch(err => {
        res.status(200).json({ error: err.message });
        console.error(err);
        res.status(500).end();
    });
  } else {
      res.status(201).json('Error') 
  }

}

module.exports={
    update_contactdata,
    addNewcontact,
    getuserData,
    deleteContact,
    getList,
    contactdata,
};