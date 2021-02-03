import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Tool from "./Tool";
import ToolSchema from "../../model/ToolSchema";

@InputType()
class ToolInput {
  @Field()
  name: String;
  @Field()
  description: String;
}

@InputType()
class SearchInput {
  @Field({ nullable: true })
  name: String;
  @Field({ nullable: true })
  description: String;
}

@InputType()
class DeleteInput {
  @Field()
  _id: String;
}

@InputType()
class UpdateInput {
  @Field()
  _id: String;
  description: String;
  name: String;
}

@Resolver(Tool)
class ToolResolver {
  @Query(() => [Tool])
  async categories(@Arg("searchInput") searchInput: SearchInput) {
    const Tool = await ToolSchema.find(searchInput);
    return Tool
  }

  @Mutation(() => Tool)
  async createTool(@Arg("toolInput") toolInput: ToolInput) {
    const tool = await ToolSchema.create(toolInput);
    return tool;
  }

  @Mutation(() => Tool)
  async deleteTool(@Arg("deleteInput") deleteInput: DeleteInput) {
    await ToolSchema.deleteOne(deleteInput._id)
    return;
  }
  @Mutation(() => Tool)
  async updateTool(@Arg("updateInput") updateInput: UpdateInput) {
    const tool = await ToolSchema.updateOne(updateInput)
    return tool
  }

}

export default ToolResolver;