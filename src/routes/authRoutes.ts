import { Router, RouterOptions } from "express";
import { authController } from "../controllers/authController";

class AuthRoutes {

    // Objeto del tipo router
    public router: Router;

    // Inicializar
    constructor() {

        this.router = Router();
        this.config();

    }

    config() {
        this.router.post('/', authController.iniciarSesion);        
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;