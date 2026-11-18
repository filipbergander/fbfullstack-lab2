import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    // Ansluter till databasen när klassen initieras
    async onModuleInit() {
        await this.$connect();
    }
}
