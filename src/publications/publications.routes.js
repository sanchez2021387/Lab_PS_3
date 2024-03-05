import { Router } from 'express';
import { check } from 'express-validator';
<<<<<<< HEAD
import { createPublications, deletePublications, getPublications, updatePublications} from '../publications/publications.controller.js'
import {existePublicationsById} from '../helpers/db-validators.js';
import { validarCampos } from "../middlewares/validar-campos.js";
=======
import { createPublications, deletePublications, updatePublications,getPublications } from '../publications/publications.controller.js';
import { existePublicationsById} from '../helpers/db-validators.js'
import { validarCampos } from "../middlewares/validar-campos.js"
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", getPublications);

router.post(
    "/",
    [
<<<<<<< HEAD
        check("title", "requerid"),
        check("category", "requerid"),
        check("content", "requerid"),
        check("id_User", "requerid"),
        validarCampos
    ], 
=======
        check("title", ""),
        check("category", ""),
        check("content", ""),
        check("id_User", ""),
        validarCampos
    ],
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
    validarJWT,
    createPublications
)

router.put(
    "/:id",
    validarJWT,
    updatePublications
)

router.delete(
    "/:id",
    validarJWT,
    deletePublications
);

export default router;