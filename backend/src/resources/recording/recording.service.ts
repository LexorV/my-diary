import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecordingDto } from './dto/create-recording.dto';
import { UpdateRecordingDto } from './dto/update-recording.dto';
import { Recording } from './entities/recording.entity';

@Injectable()
export class RecordingService {
  constructor(
    @InjectRepository(Recording)
    private recordingRepository: Repository<Recording>,
  ) {}

  public async create(createRecordingDto: CreateRecordingDto) {
    await this.recordingRepository.save({
      ...createRecordingDto,
    });
    return this.recordingRepository.find();
  }

  public async findAll() {
    return this.recordingRepository.find();
  }

  public async findOne(id: number) {
    return await this.recordingRepository.findOne({ where: { id } });
  }

  update(id: number, updateRecordingDto: UpdateRecordingDto) {
    return `This action updates a #${id} recording`;
  }

  remove(id: number) {
    return `This action removes a #${id} recording`;
  }
}
