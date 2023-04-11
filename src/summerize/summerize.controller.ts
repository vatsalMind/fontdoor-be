import { Controller, Get, Query } from '@nestjs/common';
import { SummerizeService } from './summerize.service';

@Controller('summerize')
export class SummerizeController {
  constructor(private readonly summrizeService: SummerizeService) {}

  @Get()
  async summerize(@Query() query: any): Promise<void> {
    return this.summrizeService.findSummerize(query.text);
    // const summerizeServiceObj: any = new SummerizeService();
    // return summerizeServiceObj.findSummerize(query.text);
  }
}
