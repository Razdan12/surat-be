import { log } from "console";
import BaseController from "../../base/controller.base.js";
import { NotFound } from "../../exceptions/catch.execption.js";
import suratMasukService from "./suratmasuk.service.js";

class suratMasukController extends BaseController {
  #service;

  constructor() {
    super();
    this.#service = new suratMasukService();
  }

  findAll = this.wrapper(async (req, res) => {
    const data = await this.#service.findAll(req.query);
    return this.ok(res, data, "Banyak suratMasuk berhasil didapatkan");
  });

  findById = this.wrapper(async (req, res) => {
    const data = await this.#service.findById(req.params.id);
    if (!data) throw new NotFound("suratMasuk tidak ditemukan");

    return this.ok(res, data, "suratMasuk berhasil didapatkan");
  });

  create = this.wrapper(async (req, res) => {
  
    const data = await this.#service.create(req.body, req.files, req.user.id);
    return this.created(res, data, "suratMasuk berhasil dibuat");
  });

  update = this.wrapper(async (req, res) => {
    const data = await this.#service.update(req.params.id, req.body);
    return this.ok(res, data, "suratMasuk berhasil diperbarui");
  });

  delete = this.wrapper(async (req, res) => {
    const data = await this.#service.delete(req.params.id);
    return this.noContent(res, "suratMasuk berhasil dihapus");
  });
}

export default suratMasukController;
