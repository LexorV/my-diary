import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordingModule } from './resources/recording/recording.module';
import { Recording } from './resources/recording/entities/recording.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'userDiary',
      password: '12345678',
      database: 'my_diary_db',
      entities: [Recording],
    }),
    RecordingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
