import { Router } from 'express';
import { check } from 'express-validator';
import { createPublications, deletePublications, getPublications, updatePublications} from '../publications/publications.controller.js'
import {existePublicationsById} from '../helpers/db-validators.js';
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", getPublications);

router.post(
    "/",
    [
        check("title", "requerid"),
        check("category", "requerid"),
        check("content", "requerid"),
        check("id_User", "requerid"),
        validarCampos
    ], 
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