import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import slugify from 'slugify';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma;
  }

  listAllPurchases() {
    return this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
