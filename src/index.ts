import * as express from 'express';
import * as cors from 'cors';
import { Application } from 'express';
import { router } from './app/routers';
import { authentication }from './lib/auth';
import { initSocket } from './lib/socket';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(authentication);
app.use(router);
const { PORT = 3000 } = process.env;
let http = require("http").Server(app);
initSocket(http);


http.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});  

