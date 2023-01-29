import type { Request, Response } from 'express';

const loginForm = (req: Request, res: Response) => {
    res.json({
        msg: 'Login',
    });
};
const registerForm = (req: Request, res: Response) => {
    res.json({
        msg: 'register',
    });
};
export { loginForm, registerForm };
