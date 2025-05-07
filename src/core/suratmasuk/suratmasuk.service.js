import { log } from 'console';
import BaseService from '../../base/service.base.js';
import prisma from '../../config/prisma.db.js';

class suratMasukService extends BaseService {
  constructor() {
    super(prisma);
  }

  findAll = async (query) => {
    const q = this.transformBrowseQuery(query);
    const data = await this.db.suratMasuk.findMany({ ...q });

    if (query.paginate) {
      const countData = await this.db.suratMasuk.count({ where: q.where });
      return this.paginate(data, countData, q);
    }
    return data;
  };

  findById = async (id) => {
    const data = await this.db.suratMasuk.findUnique({ where: { id } });
    return data;
  };

  create = async (payload, files, idUser) => {
    if (files && files.lampiran && files.lampiran.length > 0) {
      payload.lampiran = files.lampiran[0].path;
    }
    if (idUser) {
      payload.uploadedBy = idUser;
    }
    log('payload', payload);
    const data = await this.db.suratMasuk.create({ data: payload });
    return data;
  };

  update = async (id, payload) => {
    const data = await this.db.suratMasuk.update({
      where: { id },
      data: payload,
    });
    return data;
  };

  delete = async (id) => {
    const data = await this.db.suratMasuk.delete({ where: { id } });
    return data;
  };
}

export default suratMasukService;
