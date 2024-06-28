import { Request, Response } from "express";
import validator from "validator";
import model from "../models/usuarioModelo";
//import model from "../models/usuarioModel";


class UsuarioController {


  public async list(req: Request, res: Response) {
    try {
      return res.json({ message: "Listado de Usuario", code: 0 });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }


  public async add(req: Request, res: Response) {
    try {
        const { email, password, role } = req.body;

        // Verificar que los datos no estén vacíos
        if (validator.isEmpty(email.trim()) || validator.isEmpty(password.trim()) || validator.isEmpty(role.trim())) {
            return res.status(400).json({ message: "Todos los campos son requeridos", code: 1 });
        }

        // Agregar el usuario
        await model.add({ email, password, role });
        return res.json({ message: "Usuario agregado exitosamente", code: 0 });
    } catch (error: any) {
        return res.status(500).json({ message: `${error.message}` });
    }
}

public async update(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        // Verificar que los datos no estén vacíos
        if (validator.isEmpty(email.trim()) || validator.isEmpty(password.trim())) {
            return res.status(400).json({ message: "Todos los campos son requeridos", code: 1 });
        }

        // Actualizar el usuario
        await model.update({ email, password });
        return res.json({ message: "Usuario actualizado exitosamente", code: 0 });
    } catch (error: any) {
        return res.status(500).json({ message: `${error.message}` });
    }
}



  public async delete(req: Request, res: Response) {
    try {
      return res.json({ message: "Eliminación de Usuario", code: 0 });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }
}
export const usuarioController = new UsuarioController();
