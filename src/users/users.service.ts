import { Injectable, HttpException} from '@nestjs/common';
import { USERS } from '../mocks/users.mock';
import { resolve } from 'dns';

@Injectable()
export class UsersService {
    users = USERS;

    getUsers(): Promise<any> {
        return new Promise (resolve => {resolve(this.users)})
    }
    getUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            const user = this.users.find(user => user.id === id);
            if (!user) {
                throw new HttpException('User does not exist!', 404);
            }
            resolve(user);
        });
    }
    addUser(user): Promise<any> {
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }
    getPassword(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.Password)
        });
    }
    getEmail(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.Email)
        });
    }
    getName(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.name)
        });
    }
    getGender(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.gender)
        });
    }
    getAge(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
        const user = this.users.find(user => user.id === id); 
        if (!user) {
            throw new HttpException('User does not exist!', 404);
        }
        resolve(user.age)
        });
    }
    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            let index = this.users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new HttpException('user does not exist!', 404);
            }
            this.users.splice(1, index);
            resolve(this.users);
        });
    }
}
