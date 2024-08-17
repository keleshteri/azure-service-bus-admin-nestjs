import { Test, TestingModule } from '@nestjs/testing';
import { AzureServiceBusAdminService } from './azure-service-bus-admin.service';

describe('AzureServiceBusAdminService', () => {
  let service: AzureServiceBusAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureServiceBusAdminService],
    }).compile();

    service = module.get<AzureServiceBusAdminService>(
      AzureServiceBusAdminService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
