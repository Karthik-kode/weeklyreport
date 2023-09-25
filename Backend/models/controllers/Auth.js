const db = require('../entities')
const employee = db.Employee

//Role based authentication
const auth = async(req,res) =>{
    const name = req.body.username
    try{
        const user = await employee.findOne({
            where : {
                employeeName : name,
                

            },
        })
        console.log(user,"asfg")

        if (user) {
            res.json(user.toJSON());
            // return res.status(404).json({ message: 'user not found' });
       }
       else{
        console.log("NULL DATA")
            // res.send("NULL user")
            return res.send('user not found');
       }
    //    else{
    //         res.json(user);
    //     }
        console.log("data",user)
        // return user ? user.toJSON() : null;
        
    }
    catch(err){
        console.log(err)
    }
}

module.exports ={
    auth
}