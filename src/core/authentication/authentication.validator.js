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

  register: Joi.object({
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    phoneWA: Joi.string().required(),
    nik: Joi.string().pattern(/^\d+$/).required(), 
    divisionId: Joi.string().required(),
    address: Joi.string().optional(),
    role: Joi.string().valid('admin', 'user', 'guest').required(), 
    password: Joi.string().max(constant.MAX_LEN_PW).required(),
    confirm_password: Joi.string()
      .max(constant.MAX_LEN_PW)
      .valid(Joi.ref('password'))
      .messages({
        'any.only': 'Konfirmasi password tidak cocok dengan password',
      })
      .required(),
  }).custom((values) => {
    const { confirm_password, ...rest } = values;
    return rest;
  }),
};

export default AuthenticationValidator;
