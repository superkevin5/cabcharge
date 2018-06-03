/* app/controllers/email.controller.ts */

import {Request, Response} from 'express';

class EmailController {

    constructor() {
    }
    public sendEmail(req: Request, res: Response) {
        res.send('Hello, World!');
    }
}

export const emailController: EmailController = new EmailController();