import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsResolver } from './graphql/resolvers/product.resolver';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductsService } from '../services/products.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [ProductsResolver, ProductsService],
})
export class HttpModule {}
