import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HttpService } from './common/http/http.service';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineService } from './service/machine.service';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MachineFormComponent } from './machine-form/machine-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    MachineFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    HttpService,
    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
