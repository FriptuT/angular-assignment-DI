import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()

export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private countService: CounterService){}


    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countService.incrementInactiveToActive();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countService.incrementActiveToInactive();

    }


}