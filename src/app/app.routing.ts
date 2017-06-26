import { AboutComponent } from './about/about.component';
import { MachineFormComponent } from './machine-form/machine-form.component';
import { MachineListComponent } from './machine-list/machine-list.component';

import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'machineAdd',
        component: MachineFormComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);