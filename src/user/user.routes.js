import { Router } from "express";
import { check } from "express-validator";
import {
    createUser,
    getUsers,
    updateUser
} from "./user.controller.js";
import {
    existeUserById,
    existenteEmail
} from "../helpers/db-validators.js"
import {validarCampos} from "../middlewares/validar-campos.js"

const router = Router();

router.get("/", getUsers);

router.post(
    "/",
    [
        check("name", "name is required").not().isEmpty(),
        check("UserName", "UserName is required"),
        check("lastName", "LastName is required"),
        check("email").custom(existenteEmail),
        check("password").isLength({min:6})
    ],
    createUser
);

router.put(
    "/:id",
    [
        check("id", "It is not a valid ID").isMongoId(),
        check("id").custom(existeUserById),
        validarCampos,
    ],
    updateUser
);
export default router;
