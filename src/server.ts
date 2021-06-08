import express from 'express';
import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log('iniciando server '));

//yarn typeorm migration:create -n CreateSettings
