import { Service } from "typedi";
import { v4 as uuidv4 } from 'uuid';

import { OAuth2Client } from 'google-auth-library';
import { DbService } from "./dbService";
import { Auth } from '../schemas/auth';
const keys = require('../../../../../wwuatt-config/google-credential.json');


@Service()
export class AuthService {

  private client: OAuth2Client;

  constructor(private readonly dbService: DbService) {
    this.client = new OAuth2Client(
      keys.web.client_id,
      keys.web.client_secret,
      'postmessage'
    );
  }

  async login(token: string): Promise<Auth> {
    const ticket = await this.client.getToken(token);
    const access_token = ticket && ticket.tokens.access_token;

    if (!access_token) {
      throw new Error("Something happends");
    } else {
      const data: any = await this.client.getTokenInfo(access_token)
      console.log("ticket", ticket);
      console.log("===================");
      console.log("data", data);
      const userData = await this.getUserByEmail(data.email);
      
      if (userData) {
        console.log("HERE", userData);
        return userData;
      } else {
        console.log("trying to save");
        const newUserData = new Auth({
          id: uuidv4(),
          access_token,
          name: "",
          expiry_date: ticket.tokens.expiry_date || 0,
          refresh_token: ticket.tokens.refresh_token || '',
          email: data.email,
        });
        console.log("NEW HERE", newUserData);
        await this.saveUserData(newUserData.id, newUserData);
        console.log("SAVED", newUserData);

        return newUserData;
      }
    }
  }

  async getUserByEmail(email: string): Promise<Auth> {
    return await this.dbService.find("auth", email, "email");
  }

  async saveUserData(id: string, data: Auth) {
    await this.dbService.save('auth', id, data);
  }
}
