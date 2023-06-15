import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  title: string;

  @Field(() => ID)
  slug: string;
}
