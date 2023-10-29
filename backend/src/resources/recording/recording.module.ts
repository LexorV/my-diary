import { Module } from '@nestjs/common';
import { RecordingService } from './recording.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordingController } from './recording.controller';
import { Recording } from './entities/recording.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recording])],
  controllers: [RecordingController],
  providers: [RecordingService],
  exports: [RecordingService],
})
export class RecordingModule {}
