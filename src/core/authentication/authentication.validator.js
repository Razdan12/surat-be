// src/core/authentication/authentication.validator.js
import Joi from 'joi';
import constant from '../../config/constant.js';

const AuthenticationValidator = {
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  refresh: Joi.object({
    refresh_token: Joi.string().required(),
  }),

};

export default AuthenticationValidator;
