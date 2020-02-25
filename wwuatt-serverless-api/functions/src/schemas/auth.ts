import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Auth {

  constructor(auth: Auth) {
    this.name = auth.name || '';
    this.id = auth.id || '';
    this.email = auth.email || '';
    this.access_token = auth.access_token || '';
    this.expiry_date = auth.expiry_date || 0;
    this.refresh_token = auth.refresh_token || '';
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  access_token: string;
  refresh_token: string;
  expiry_date: number;
}