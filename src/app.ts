
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes   from './routes/authRoutes';

class Server {

    private app: Application;

    // Inicializar la clase
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.listen(this.app.get("port"), () => {
          console.log("Server on port", this.app.get("port"));
      });      
    }  
    
    // Configuración de Módulos
    config(): void {
        // configuración del puerto para el servidor
        this.app.set("port", 3000);
       
        // muestra las peticiones en consola
        this.app.use(morgan("dev"));
   
        // puertos de conexión de la API
        this.app.use(cors());
   
        // solo se permiten peticiones en formato JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false,}),)
    }
  

    // Configurar Rutas
    routes() {
        this.app.use("/", authRoutes);

    }
}

const server = new Server();

import express from 'express';
const app = express();
 
/*  DotEnv  */
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  

