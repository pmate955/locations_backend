import * as express from 'express';
import { Application } from 'express';
import { router } from './app/routers';
import { authentication }from './lib/auth';


const app: Application = express();
app.use(express.json());
app.use(authentication);
app.use(router);
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});  

