export const sentToken=function(res,message,user,statuscode=200){

    const options={
       expires :new Date(Date.now()+5*24*60*60*1000),
       httpOnly:true,
       sameSite:"none",
       secure:true
    };

const token =user.getJWTtoke();

    res.status(statuscode).cookie("token",token,options).json({
        success:true,
        message,
        user
    })

}