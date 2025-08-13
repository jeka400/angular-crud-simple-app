import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    { path: '', component: CrudComponent },
    { path: 'crud', component: CrudComponent }
];
