import { Injectable } from "@angular/core";

@Injectable()

export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;


    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log("active->inactive " + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log("inactive->active " + this.inactiveToActiveCounter);
    }

}