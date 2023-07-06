export const responseSend = (res,statusCode,{sucess,message,data})=>{
    return res.status(statusCode).send({
        sucess,message,data
    })}

