import Joi from "joi";

export const suratMasukValidator = {
  create: Joi.object({
    noSurat: Joi.string().required().messages({
      "string.empty": "Nomor surat tidak boleh kosong",
      "any.required": "Nomor surat wajib diisi",
    }),
    perihal: Joi.string().required().messages({
      "string.empty": "Perihal tidak boleh kosong",
      "any.required": "Perihal wajib diisi",
    }),
    tglSurat: Joi.date().required().messages({
      "date.base": "Tanggal surat harus berupa tanggal yang valid",
      "any.required": "Tanggal surat wajib diisi",
    }),
    tglDiterima: Joi.date().required().messages({
      "date.base": "Tanggal diterima harus berupa tanggal yang valid",
      "any.required": "Tanggal diterima wajib diisi",
    }),
    pengirim: Joi.string().required().messages({
      "string.empty": "Pengirim tidak boleh kosong",
      "any.required": "Pengirim wajib diisi",
    }),
    lampiran: Joi.string().optional(),
    noAgenda: Joi.string().optional().allow(null).messages({
      "string.empty": "Nomor agenda tidak boleh kosong",
    }),
    klasifikasi: Joi.string().optional().allow(null).messages({
      "string.empty": "Klasifikasi tidak boleh kosong",
    }),
    perihalSurat: Joi.string().optional().allow(null).messages({
      "string.empty": "Perihal surat tidak boleh kosong",
    }),
    sifatSurat: Joi.string().required().messages({
      "string.empty": "Sifat surat tidak boleh kosong",
      "any.required": "Sifat surat wajib diisi",
    }),
    status: Joi.string().required().messages({
      "string.empty": "Status tidak boleh kosong",
      "any.required": "Status wajib diisi",
    }),
   
  }),
  update: Joi.object({
    noSurat: Joi.string().optional(),
    perihal: Joi.string().optional(),
    tglSurat: Joi.date().optional(),
    tglDiterima: Joi.date().optional(),
    pengirim: Joi.string().optional(),
    lampiran: Joi.string().optional(),
    noAgenda: Joi.string().optional().allow(null),
    klasifikasi: Joi.string().optional().allow(null),
    perihalSurat: Joi.string().optional().allow(null),
    sifatSurat: Joi.string().optional(),
    status: Joi.string().optional(),
  }),
};

export default suratMasukValidator;
