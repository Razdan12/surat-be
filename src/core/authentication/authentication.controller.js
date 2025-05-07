import BaseController from '../../base/controller.base.js';
import { NotFound } from '../../exceptions/catch.execption.js';
import AuthenticationService from './authentication.service.js';

class AuthenticationController extends BaseController {
  #service;

  constructor() {
    super();
    this.#service = new AuthenticationService();
  }

  login = this.wrapper(async (req, res) => {
    const data = await this.#service.login(req.body);
    return this.ok(res, data, 'Berhasil login!');
  });

  refresh = this.wrapper(async (req, res) => {
    const data = await this.#service.refreshToken(req.body.refresh_token);
    return this.ok(res, data, 'Berhasil login!');
  });
}

export default AuthenticationController;
