import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './test.controller';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [TestController],
})
export class HttpModule {}
