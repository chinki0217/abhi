const router = require("express").Router();

router.post("/bfhl", (req, res) => {
    let arr = req.body.data;
    let number=[],alphabets = [];
    arr.forEach(e => {
        if(isNaN(e)){
            alphabets.push(e);
        }
        else{
            number.push(e);
        }
    });
    let obj = {
        "is_success":true,
        "user_id":"abhishek",
        "email":"abishek.cse19@chitkara.edu.in",
        "roll_number":"1910990",
        "numbers":number,
        "alphabets":alphabets
    }
    res.send(obj);
});

module.exports = router;
