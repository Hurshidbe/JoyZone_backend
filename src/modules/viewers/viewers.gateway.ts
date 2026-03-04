import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ViewersService } from './viewers.service';
import { CreateViewerDto } from './dto/create-viewer.dto';
import { UpdateViewerDto } from './dto/update-viewer.dto';

@WebSocketGateway()
export class ViewersGateway {
  constructor(private readonly viewersService: ViewersService) {}

  @SubscribeMessage('createViewer')
  create(@MessageBody() createViewerDto: CreateViewerDto) {
    return this.viewersService.create(createViewerDto);
  }

  @SubscribeMessage('findAllViewers')
  findAll() {
    return this.viewersService.findAll();
  }

  @SubscribeMessage('findOneViewer')
  findOne(@MessageBody() id: number) {
    return this.viewersService.findOne(id);
  }

  @SubscribeMessage('updateViewer')
  update(@MessageBody() updateViewerDto: UpdateViewerDto) {
    return this.viewersService.update(updateViewerDto.id, updateViewerDto);
  }

  @SubscribeMessage('removeViewer')
  remove(@MessageBody() id: number) {
    return this.viewersService.remove(id);
  }
}
