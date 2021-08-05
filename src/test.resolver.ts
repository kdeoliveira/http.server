import { ExpressContext } from "Server";
import { Ctx, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
export declare class Person {
    name: string;
    age: number;
}
@Resolver(of => Person)
export class PersonResolver {
    @Query()
    getPerson(@Ctx() context : any): boolean{
        console.log(context)
        return false;
    }
}
