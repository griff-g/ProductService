import logger from "../config/logger.config.js"
import { responseSend } from "../utils/server.util.js"

const options = {
    errors:{
        wrap:{
            label:""
        }
    }
}

export const reqValidator= (validationSchma)=>{
    return async function (req,res,next){
        try{
            logger.info("==Request Method==", req.method)
            if (["GET"].includes(req.method)){
                const validatedQuery = await validationSchma.validateAsync(req.query,options)
                req.query = validatedQuery
                next()
                
            }
            else if (["POST", "PUT"].includes(req.method)){
                const validatedBody = await validationSchma.validateAsync(req.body,options)
                req.body = validatedBody
                next()
            }
            
        }catch(error){
            responseSend(res,417,{
                success:false,
                message:error.message
            })
        }
    }
}