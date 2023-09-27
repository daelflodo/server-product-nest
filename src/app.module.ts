import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Esto asegura que ConfigModule esté disponible de forma global
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1/products'),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
