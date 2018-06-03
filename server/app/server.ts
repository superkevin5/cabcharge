/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
import {routes} from './routes/index';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = 3000;

app.use('/', routes);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});