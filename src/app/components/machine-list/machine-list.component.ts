import { MachineService } from '../../services/machine/machine.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machines: any[];

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    // Subscribe on subject to keep "machines" up to date
    this.machineService.machines.subscribe(machines => this.machines = machines);
  }

}