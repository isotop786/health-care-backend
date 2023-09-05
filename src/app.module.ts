import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'marufkabir01',
      password: 'MaruF@123',
      database: 'healthcarddb',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
