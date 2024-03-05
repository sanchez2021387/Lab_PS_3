import { response, request } from 'express'; 
import Publications from './publications.model.js';
import User from './publications.model.js';

export const createPublications =  async (req, res) => {
    const {title, category, content} = req.body;

    const  createdBy = req.user.id;
    try{
        const publications = new Publications({title, category, content, createdBy});

        await publications.save();

        res.status(201).json({
            msg: 'Publication created',
            publications
        })
    }catch (e){
<<<<<<< HEAD
        console.error(error)
=======
        console.error(e)
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

export const getPublications = async(req = request, res = response) =>{
    const {limit, since } =  req.query;
    const query = {state: true}

    const [total, publications] = await Promise.all([
        Publications.countDocuments(query),
        Publications.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ]);
    res.status(200).json({
        total,
        publications
    })
}

<<<<<<< HEAD
export const updatePublications = async (req, res = response) => {
    const { id } = req.params;
    const { title, category, content } = req.body;

    try {

        const publications = await Publications.findById(id);

        if (!publications) {
            return res.status(404).json({
                msg: 'Publication not found'
            });
        }

        if (String(publications.creatorBy) !== req.user.id) {
            return res.status(403).json({
                msg: 'You do not have permission to edit this publication'
            });
        }

        publications.title = title;
        publications.category = category;
        publications.content = content;

        await publications.save();

        res.status(200).json({
            msg: 'Publication update',
            publications
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'There was an error updating the publication'
        });
    }
};


/*export const updatePublications = async (req, res)=> {
=======
export const updatePublications = async (req, res)=> {
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
    try{
        const { id } = req.params;
        const { title, category, content} = req.body;

<<<<<<< HEAD
        const updatedPublications = await updatePublicationsById(id, title, category, content, req.user.id);
=======
        const updatePublications = await updatePublicationsById(id, title, category, content, req.user.id);
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241

        res.status(200).json({
            msg: 'publications updated',
            publications: updatePublications
        })
    }catch(e){
<<<<<<< HEAD
        console.error(error);
=======
        console.error(e);
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
        res.status(500).json({
            msg: 'There was an error updating the post'
        });
    }


const updatePublicationsById = async (id, title, category, content, userId) =>{
    const publications = await Publications.findById(id);
    if(!publications){
        throw new Error('publications not found');
    }
}

    if(String(Publications.createdBy) !== userId){
     throw new Error('You do not have permission to edit this publications');
}

    Publications.title = title;
    Publications.category = category;
    Publications.content = content;

    await Publications.save();

    return Publications;
<<<<<<< HEAD
};*/
=======
};
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241

export const deletePublications = async (req, res) => {
    const { id } = req.params;
    
    try {

        const publications = await Publications.findById(id);



        if (String(publications.createdBy) !== req.user.id) {
            return res.status(403).json({
<<<<<<< HEAD
                msg: 'There was an error deleting the publication'
=======
                msg: 'There was an error deleting the post'
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
            })
        }

        await Publications.findByIdAndUpdate(id, { state: false });

        res.status(200).json({
<<<<<<< HEAD
            msg: 'Publication eliminated', 
=======
            msg: 'Publications eliminated', 
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
            publications
        });

    } catch (e) {
<<<<<<< HEAD
        console.log(error);
        res.status(500).json({
            msg: 'There was an error deleting the publication'
=======
        console.log(e);
        res.status(500).json({
            msg: 'There was an error deleting the publications'
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
        })
    }
}