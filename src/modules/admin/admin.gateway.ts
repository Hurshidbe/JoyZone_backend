import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@WebSocketGateway()
export class AdminGateway {
  constructor(private readonly adminService: AdminService) {}

  @SubscribeMessage('createAdmin')
  create(@MessageBody() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @SubscribeMessage('findAllAdmin')
  findAll() {
    return this.adminService.findAll();
  }

  @SubscribeMessage('findOneAdmin')
  findOne(@MessageBody() id: number) {
    return this.adminService.findOne(id);
  }

  @SubscribeMessage('updateAdmin')
  update(@MessageBody() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(updateAdminDto.id, updateAdminDto);
  }

  @SubscribeMessage('removeAdmin')
  remove(@MessageBody() id: number) {
    return this.adminService.remove(id);
  }
}
