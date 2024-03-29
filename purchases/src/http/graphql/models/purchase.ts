import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './product';

enum PurchaseStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  FAILED = 'failed',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'The status of the purchase',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurchaseStatus)
  status: PurchaseStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Product)
  product: Product;
  productId: string;
}
