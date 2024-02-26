import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/user";


@InputType()
class UserInput {
    @Field(() => String)
    name: string;
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
      const users = await User.find()
      return users 
    }

    @Mutation(() => String)
    async createUser(@Arg('data') data: UserInput): Promise<String>
    {
      const user = await User.create(data as any).save();
      return "User Created Successfully!"
    } 

}