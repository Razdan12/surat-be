import express from 'express';
const router = express.Router();
import userRouter from "./core/user/user.router.js";
import authRouter from "./core/authentication/authentication.router.js";
import suratMasukRouter from "./core/suratmasuk/suratmasuk.router.js";
import suratKeluarRouter from "./core/suratkeluar/suratkeluar.router.js";

export const routeLists = [
    {
        path : '/user',
        route: userRouter
    },
    {
        path : '/auth',
        route: authRouter
    },
    {
        path : '/surat-masuk',
        route: suratMasukRouter
    },
    {
        path : '/surat-keluar',
        route: suratKeluarRouter
    },

]

routeLists.forEach((route) => {
    router.use(route.path, route.route);
  });
  
  export default router;