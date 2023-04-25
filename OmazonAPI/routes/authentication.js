const router = require("express").Router();
const User = require("../model/User");




//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    fullname:req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password:req.body.password,
    paymentPassword:req.body.password,

  });


  //save user information in db
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne(
            {
                userName: req.body.user_name
            }
        );

        !user && res.status(401).json("Wrong User Name");

        const originalPassword = user.password
        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

  
        const { password, ...others } = user._doc;  

        res.status(200).json({...others});
 ;

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;