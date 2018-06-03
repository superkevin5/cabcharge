/**
 * Created by Luming on 6/4/2018.
 */
import {Router} from 'express';
import {emailController} from '../controllers/email.controller';

// Assign router to the express.Router() instance
const router: Router = Router();

router.post('/sendEmail', emailController.sendEmail);


// Export the express.Router() instance to be used by server.ts
export const routes: Router = router;