import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacultyComponent} from './faculty.component';
import {CreateFacultyComponent} from './create-faculty.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: ''
        },
        children: [
            {
                path: '',
                redirectTo: 'faculty'
            },
            {
                path: 'faculty',
                component: FacultyComponent,
            },
            {
                path: 'createFac',
                component: CreateFacultyComponent,
            },
            {
                path: 'editFaculties',
                component: CreateFacultyComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacultyRoutingModule {
}
