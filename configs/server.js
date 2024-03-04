'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { dbConnection } from './mongo.js';
import userRoutes from '../src/user/user.routes.js';
import authRoutes from '../src/auth/auth.routes.js';
import publicationsRoutes from '../src/Publications/publications.routes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/opinionManager/v1/users';
        this.authPath = '/opinionManager/v1/auth';
<<<<<<< HEAD
        this.publicationsPath= '/opinionManager/v1/publications';
=======
>>>>>>> a120ec048c6a6f8afd2e7b44bd59fc6195e62a91
        

        this.middlewares();
        this.conectarDB();
        this.routes();
    } 
<<<<<<< HEAD

=======
>>>>>>> a120ec048c6a6f8afd2e7b44bd59fc6195e62a91
    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(this.usuarioPath, userRoutes);
        this.app.use(this.authPath, authRoutes);
        this.app.use(this.publicationsPath, publicationsRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

export default Server;