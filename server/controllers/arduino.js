module.exports = {
    wea(req, res){
        
        res.send("wea")
    },
    send(req, res){
        console.log(req.body.user)
    }
};
