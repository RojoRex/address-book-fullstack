function addNewaddress(req,res){
    const db=req.app.get('db');
    const{firstname,lastaname,email,city,stateprob,postal,country,homephone,mobilephone,workphone,} =req.body;

    db.addressbook
    .save({
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

function getList(req, res) {
    const db = req.app.get('db');
  
    db.addressbook
      .find()
      .then(address => res.status(200).json(address))
      .catch(err => {
        console.error(err);
        res.status(500).end();
      });
  }


module.exports={
    addNewaddress,
    getList,
};