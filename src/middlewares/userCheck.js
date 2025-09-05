function userCheck(req,res,next){
    const token = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    if(token !== token){
        return res.redirect("/")
    }
    else{
        next()
    }
}