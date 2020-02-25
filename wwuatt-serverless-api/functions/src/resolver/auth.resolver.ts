import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { AuthService } from "../services/auth.service";
import { Auth } from "../schemas/auth";

@Resolver()
export class AuthResolver {

  constructor(private readonly authService: AuthService) { }

  @Mutation(() => Auth)
  async login(@Arg("token") token: string) : Promise<Auth> {
    return await this.authService.login(token);
  }

  @Query(() => Auth)
  async user(@Arg("email") email: string) : Promise<Auth> {
    const x = await this.authService.getUserByEmail(email);
    console.log(x);
    return x;
  }
}
