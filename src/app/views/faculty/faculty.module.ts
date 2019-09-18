import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';

import {FacultyRoutingModule} from './faculty-routing.module';
import {FacultiesComponent} from './faculties.component';
import {FacultyComponent} from './faculty.component';

@NgModule({
    declarations: [FacultiesComponent, FacultyComponent],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        FacultyRoutingModule,
    ]
})
export class FacultyModule {
}
