import { HttpService } from '../common/http/http.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

@Injectable()
export class MachineService {

    private _machines: BehaviorSubject<any[]> = new BehaviorSubject([]);
    public machines: Observable<any[]> = this._machines.asObservable();


    constructor(private httpService: HttpService) {
        this.loadAllMachines();
    }

    loadAllMachines() {
        // Subscribe on observable to update subject
        this.httpService.get('http://localhost:3000/api/machine').subscribe(machines => this._machines.next(machines));
    }

    saveMachine(machine: any) {
        // Subscribe on observable to update subject with newer inserted object
        this.httpService.post('http://localhost:3000/api/machine', machine).subscribe(newMachine => {
            if (machine._id) {
                console.log('Insert OK');
                const machines = this._machines.getValue();
                machines.push(newMachine);
                this._machines.next(machines);
            } else {
                console.log('Update OK');
                this.loadAllMachines();
            }
        });
    }
}