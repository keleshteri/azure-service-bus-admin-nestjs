import { Module } from '@nestjs/common';
import { AzureServiceBusAdminService } from './azure-service-bus-admin.service';

@Module({
  providers: [AzureServiceBusAdminService],
  exports: [AzureServiceBusAdminService],
})
export class AzureServiceBusAdminModule {}
