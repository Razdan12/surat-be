import BaseService from '../../base/service.base.js';
import prisma from '../../config/prisma.db.js';
import { hash } from '../../helpers/bcrypt.helper.js';

class userService extends BaseService {
  constructor() {
    super(prisma);
  }

  findAll = async (query) => {
    const q = this.transformBrowseQuery(query);
    const data = await this.db.user.findMany({ ...q });

    if (query.paginate) {
      const countData = await this.db.user.count({ where: q.where });
      return this.paginate(data, countData, q);
    }
    return data;
  };

  findById = async (idUser) => {
    const id = parseInt(idUser);
    const data = await this.db.user.findUnique({ where: { id } });
    return data;
  };

  create = async (payload) => {
    const { email, password, ...others } = payload;

    const existing = await this.db.user.findUnique({ where: { email } });

    if (existing) throw new Forbidden('Akun dengan email telah digunakan');
    if (!email || !password) throw new Forbidden('Email dan password tidak boleh kosong');

    const data = await this.db.user.create({
      data: {
        email,
        password: await hash(password, 10),
        ...others,
      },
    });

    return {
      data,
      message: 'Akun berhasil terdaftar! Silahkan verifikasi akun anda',
    };
  };

  update = async (idUser, payload) => {
    const id = parseInt(idUser);
    const data = await this.db.user.update({ where: { id }, data: payload });
    return data;
  };

  delete = async (id) => {
    const data = await this.db.user.delete({ where: { id } });
    return data;
  };
}

export default userService;
