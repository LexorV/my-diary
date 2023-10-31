import { Length, IsString, IsDate } from 'class-validator';
export class CreateRecordingDto {
  @IsString()
  @Length(1, 200)
  public title: string;

  @IsString()
  @Length(1, 2000)
  public body: string;

  @IsDate()
  public date: Date;
}
