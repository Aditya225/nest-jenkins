import {Module, Global} from "@nestjs/common";
import { CacheModule } from '@nestjs/cache-manager';


@Global()
@Module({
    imports:[CacheModule.register({
         store: require('cache-manager-ioredis'),
        host: process.env.REDIS_HOST || 'localhost',
         port: 6379,
         ttl: 60,
    }),
],
exports: [CacheModule],
})
export class RedisModule {}