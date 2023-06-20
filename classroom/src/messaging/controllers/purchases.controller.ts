import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface Customer {
  authUserId: string;
}

interface Product {
  id: string;
  title: string;
  slug: string;
}

interface PurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchasesController {
  @EventPattern('purchases.new-purchase')
  async purchasesCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    console.log(payload);
  }
}
