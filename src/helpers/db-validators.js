import User from '../user/user.model.js';
<<<<<<< HEAD
=======
import Publications from '../Publications/Publications.model.js';

>>>>>>> a120ec048c6a6f8afd2e7b44bd59fc6195e62a91

export const existenteEmail = async (email = '') =>{
    const existeEmail = await User.findOne({ email });
    
    if (existeEmail){
        throw new Error(`The email ${email} has already been registered`);
    }
}
export const existeUserById = async (id = '') => {
    const existeUser = await User.findById(id);

    if (!existeUser){
        throw new Error(`The ID: ${id} Does not exist`);
    }
}

export const existePublicationsById = async (id = '') => {
    const existePublications = await Publications.findById(id);
    if(!existePublications) {
        throw new Error(`the id : ${id} Not found`)
    }
}