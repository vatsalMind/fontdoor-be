import { Test, TestingModule } from '@nestjs/testing';
import { SummerizeService } from './summerize.service';

describe('SummerizeService', () => {
  let service: SummerizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummerizeService],
    }).compile();

    service = module.get<SummerizeService>(SummerizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
