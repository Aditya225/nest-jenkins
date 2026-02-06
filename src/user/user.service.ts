import { Inject,Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UserService {
    constructor(@Inject(CACHE_MANAGER) private cache){}

    async getUsers(){
        const key = "User"
        const data = await this.cache.get(key);
        if(data){
            return data

        }

    const users = [{ id: 1, name: 'Aditya' }];
    await this.cache.set(key, users, 60);
    return users;
    }
}
