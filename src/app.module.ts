import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummerizeController } from './summerize/summerize.controller';
import { SummerizeService } from './summerize/summerize.service';
// import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'summary' }),
    // MongooseModule.forFeature([{ name: 'Summary', schema: SummerizeSchema }]),
    DatabaseModule,
  ],
  controllers: [AppController, SummerizeController],
  providers: [AppService, SummerizeService],
})
export class AppModule {}
