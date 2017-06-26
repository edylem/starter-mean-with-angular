import { MachineService } from '../../services/machine/machine.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-form',
  templateUrl: './machine-form.component.html',
  styleUrls: ['./machine-form.component.css']
})
export class MachineFormComponent implements OnInit {

  model: any = {};

  constructor(private machineService: MachineService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('MachineFormComponent.onSubmit', this.model);
    this.machineService.saveMachine(this.model);
    this.model = {};
  }

}