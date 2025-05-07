import BaseService from '../../base/service.base.js';
import { BadRequest, Forbidden, NotFound } from '../../exceptions/catch.execption.js';
import { compare, hash } from '../../helpers/bcrypt.helper.js';
import jwt, { decode } from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from '../../helpers/jwt.helper.js';
import prisma from '../../config/prisma.db.js';
import crypto from 'crypto';

class AuthenticationService extends BaseService {
  constructor() {
    super(prisma);
  }

  login = async (payload) => {
    const user = await this.db.user.findUnique({
      where: { email: payload.email },
    });
    if (!user) throw new NotFound('Akun tidak ditemukan');

    const pwValid = await compare(payload.password, user.password);
    if (!pwValid) throw new BadRequest('Password tidak cocok');

    const access_token = await generateAccessToken(user);
    const refresh_token = await generateRefreshToken(user)
    return { user: this.exclude(user, ['password', 'apiToken', 'isVerified']), token: {access_token, refresh_token} };
  };

  refreshToken = async (refresh) => {
    const payload = jwt.decode(refresh);

    const user = await this.db.user.findUnique({
      where: { email: payload.email },
    });
    if (!user) throw new NotFound('Akun tidak ditemukan');
   
    const access_token = await generateAccessToken(user);
    const refresh_token = await generateRefreshToken(user)
    return { user: this.exclude(user, ['password', 'apiToken', 'isVerified']), token: {access_token, refresh_token} };
  };

}

export default AuthenticationService;
