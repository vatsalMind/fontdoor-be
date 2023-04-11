import { Test, TestingModule } from '@nestjs/testing';
import { SummerizeController } from './summerize.controller';

describe('SummerizeController', () => {
  let controller: SummerizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummerizeController],
    }).compile();

    controller = module.get<SummerizeController>(SummerizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
