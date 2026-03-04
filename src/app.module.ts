import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { UsersModule } from './modules/users/users.module';
import { ViewersModule } from './modules/viewers/viewers.module';

@Module({
  imports: [AdminModule, UsersModule, ViewersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
