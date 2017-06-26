import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HttpService } from './services/http/http.service';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { MachineService } from './services/machine/machine.service';
import { AboutComponent } from './components/about/about.component';
import { routing } from './app.routing';
import { MachineFormComponent } from './components/machine-form/machine-form.component';

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
