//import {sendError} from "./index";
import * as yup from "yup";




module.exports = {
validateCreateUser: async(req,res,next) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        profilePic: yup.string(),
      });
      await validate(schema, req.body, res, next);

},


}