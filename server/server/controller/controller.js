var Manager = require("../model/model");

//create and save new user
exports.Create = async (req, res) => {
//validate request
if(!req.body){
   return res.status(400).send({message: "content cannot be empty"});
}
try{
//new user
const user = await Manager.create({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
})
const origin = req.header('Origin');
//send response
return res.status(200).redirect(origin);
}catch(err){
    return res.status(500).send(err.message);
}

}
//retrieve and return all users // retrieve one user
exports.find =  (req, res) => {
  Manager.find().then(data =>{return res.status(201).send(data)}).catch(err => {return res.status(500).send(err.message)})
}
//update a new identified user by userId
exports.update = (req, res) => {
     if(!req.body){
         return res.status(400).send({message: "Data cannot be empty"});
     }
     const id = req.params.id;
     Manager.findByIdAndUpdate(id, req.body, {useFindAndModify: true}).then(data => {
         if(!data){ return res.status(400).send({message: "cannot find id"})}
         else{
            return res.status(201).send(data);
        }
     }).catch(err => {
        return res.status(404).send(err.message)
    })
}

//delete a user with specified userId
exports.delete = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: "Data cannot be empty"});
    }
    const id = req.params.id;
    Manager.findByIdAndDelete(id).then(data => {
        if(!data){
            return res.status(404).send({message : "check your id"});
        }else{
            return res.status(201).send("User Deleted Successfully");
        }
    }).catch(err => {
        return res.status(404).send(err.message);
    })
}