import express from 'express';
const router = express.Router();
import userRouter from "./core/user/user.router.js";
import authRouter from "./core/authentication/authentication.router.js";

export const routeLists = [
    {
        path : '/user',
        route: userRouter
    },
    {
        path : '/auth',
        route: authRouter
    },

]

routeLists.forEach((route) => {
    router.use(route.path, route.route);
  });
  
  export default router;