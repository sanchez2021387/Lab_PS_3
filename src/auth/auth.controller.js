import bcryptjs from 'bcryptjs';
import User from '../user/user.model.js';
import { generarJWT } from '../helpers/generate-jwt.js';

export const login = async (req, res) =>{
    const { emailOrUser, password} = req.body;

    try{
        const user = await User.findOne({
            $or: [
                {email: emailOrUser},
                {UserName: emailOrUser}
            ]
        });
        if (!user){
            return res.status(400).json({
                msg: "Incorrect credentials, email does not exist in the database."
            })
        }
        
        if(!user.state){
            return res.status(400).json({
                msg: "The user does not exist in your database"
            });
        }
        const valiPassword = bcryptjs.compareSync(password, user.password);
        if(!valiPassword){
            return res.status(400).json({
                msg: "Password is incorrect"
            });
        }
        
        const token = await generarJWT(user.id);
        res.status(200).json({
            msg: 'Login',
            user,
            token
        });
    }catch (e){
            console.log(e);
            res.status(500).json({
                msg: "Contact administrator"
            });
        }
 }