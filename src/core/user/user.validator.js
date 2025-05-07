import Joi from "joi";

export const userValidator = {
  create: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    nip: Joi.string().required(),
    role: Joi.string().required(),
    jenisKelamin: Joi.string().valid("Laki-laki", "Perempuan").required(),
    jabatan: Joi.string().required(),
    tempatLahir: Joi.string().required(),
    tanggalLahir: Joi.date().required(),
    telepon: Joi.string().pattern(/^[0-9]+$/).required(),
    status: Joi.boolean().required(),
    alamat: Joi.string().required(),
  }),
  update: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    nip: Joi.string(),
    role: Joi.string(),
    jenisKelamin: Joi.string().valid("Laki-laki", "Perempuan"),
    jabatan: Joi.string(),
    tempatLahir: Joi.string(),
    tanggalLahir: Joi.date(),
    telepon: Joi.string().pattern(/^[0-9]+$/),
    status: Joi.boolean(),
    alamat: Joi.string(),
  }),
};

export default userValidator;
