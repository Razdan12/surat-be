import Joi from "joi";

export const suratKeluarValidator = {
  create: Joi.object({
    tglSurat: Joi.date().required(),
    noSurat: Joi.string().required(),
    perihal: Joi.string().required(),
    tujuan: Joi.string().required(),
    lampiran: Joi.string().required(),
    kepada: Joi.string().required(),
    tglKirim: Joi.date().required(),
    noAgenda: Joi.string().optional(),
    klasifikasi: Joi.string().optional(),
    sifatSurat: Joi.string().required(),
    status: Joi.string().required(),
    tembusan: Joi.string().required(),
  }),
  update: Joi.object({
    tglSurat: Joi.date().optional(),
    noSurat: Joi.string().optional(),
    perihal: Joi.string().optional(),
    tujuan: Joi.string().optional(),
    lampiran: Joi.string().optional(),
    kepada: Joi.string().optional(),
    tglKirim: Joi.date().optional(),
    noAgenda: Joi.string().optional(),
    klasifikasi: Joi.string().optional(),
    sifatSurat: Joi.string().optional(),
    status: Joi.string().optional(),
    tembusan: Joi.string().optional(),
  }),
};

export default suratKeluarValidator;
