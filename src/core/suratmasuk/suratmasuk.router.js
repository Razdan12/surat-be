import { Router } from 'express';
import validatorMiddleware from '../../middlewares/validator.middleware.js';
import suratMasukController from './suratmasuk.controller.js';
import suratMasukValidator from './suratmasuk.validator.js';
import { baseValidator } from '../../base/validator.base.js';
import auth from '../../middlewares/auth.middleware.js';
import uploader from '../../middlewares/multer.middleware.js';

const r = Router(),
  validator = suratMasukValidator,
  controller = new suratMasukController();

r.get(
  '/show-all',
  validatorMiddleware({ query: baseValidator.browseQuery }),
  controller.findAll
);

r.get('/show-one/:id', controller.findById);

r.post(
  '/create',
  uploader('/lampiran', 'file').fields([{ name: 'lampiran' }]),
  auth(),
  validatorMiddleware({ body: validator.create }),
  controller.create
);

r.put(
  '/update/:id',
  auth(),
  validatorMiddleware({ body: validator.update }),
  controller.update
);

r.delete('/delete/:id', auth(), controller.delete);

const suratmasukRouter = r;
export default suratmasukRouter;
