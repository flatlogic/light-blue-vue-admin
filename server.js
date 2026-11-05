import express from 'express';
import { fileURLToPath } from 'node:url';

const app = express();
app.use('/light-blue-vue-admin', express.static(fileURLToPath(new URL('./dist', import.meta.url))));
app.use(express.static(fileURLToPath(new URL('./dist', import.meta.url))));
app.listen(process.env.PORT || 5000);
