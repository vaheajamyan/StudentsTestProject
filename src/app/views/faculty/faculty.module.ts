import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';

import {FacultyRoutingModule} from './faculty-routing.module';
import {FacultyComponent} from './faculty.component';
import {CreateFacultyComponent} from './create-faculty.component';

@NgModule({
    declarations: [FacultyComponent, CreateFacultyComponent],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        FacultyRoutingModule,
    ]
})
export class FacultyModule {
}
