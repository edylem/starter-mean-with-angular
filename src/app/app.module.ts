import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HttpService } from './common/http/http.service';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineService } from './service/machine.service';
import { MachineFormComponent } from './machine-form/machine-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    MachineFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HttpService,
    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
