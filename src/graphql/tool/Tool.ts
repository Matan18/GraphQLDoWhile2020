import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Tool {
  @Field()
  name: String;
  @Field()
  description: String;
  @Field()
  _id: String;
}

export default Tool;