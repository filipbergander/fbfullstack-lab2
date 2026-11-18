import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global()
@Module({
  providers: [PrismaService]
})
export class PrismaModule {}
