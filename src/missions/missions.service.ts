import { Injectable, HttpException} from '@nestjs/common';
import { MISSIONS } from '../mocks/missions.mock';
import { resolve } from 'dns';

@Injectable()
export class UsersService {
    missions = MISSIONS;

    getTitle(title): Promise<any> {
        const name = String(title);
        return new Promise(resolve => {
        const mission = this.missions.find(mission => mission.title === name); 
        if (!mission) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(mission.title)
        });
    }
    getType(type): Promise<any> {
        const typeName = String(type);

        const mission = this.missions.find(mission => mission.type === typeName); 
        if (!mission) {
            throw new HttpException('User does not exist!', 404);
        }
        return Promise.resolve(mission.type)
    }
}