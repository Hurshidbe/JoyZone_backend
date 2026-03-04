import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGateway } from './admin.gateway';

@Module({
  providers: [AdminGateway, AdminService],
})
export class AdminModule {}
