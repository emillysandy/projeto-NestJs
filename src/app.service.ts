import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Iniciando os estudos e aplicação com NestJs';
  }
}
