import { response, request } from 'express'; 
import Publications from './publications.model.js';
import User from '../publications/';

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
        console.error(error)
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

export const updatePublications = async (req, res)=> {
    try{
        const { id } = req.params;
        const { title, category, content} = req.body;

        const updatedPublications = await updatePublicationsById(id, title, category, content, req.user.id);

        res.status(200).json({
            msg: 'publications updated',
            publications: updatePublications
        })
    }catch(e){
        console.error(error);
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
};

export const deletePublications = async (req, res) => {
    const { id } = req.params;
    
    try {

        const publications = await Publications.findById(id);



        if (String(publications.createdBy) !== req.user.id) {
            return res.status(403).json({
                msg: 'There was an error deleting the post'
            })
        }

        await Publications.findByIdAndUpdate(id, { state: false });

        res.status(200).json({
            msg: 'Publications eliminated', 
            publications
        });

    } catch (e) {
        console.log(error);
        res.status(500).json({
            msg: 'There was an error deleting the publications'
        })
    }
}