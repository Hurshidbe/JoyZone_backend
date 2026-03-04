import { Module } from '@nestjs/common';
import { ViewersService } from './viewers.service';
import { ViewersGateway } from './viewers.gateway';

@Module({
  providers: [ViewersGateway, ViewersService],
})
export class ViewersModule {}
