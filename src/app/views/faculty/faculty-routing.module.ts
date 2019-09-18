import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacultiesComponent} from './faculties.component';
import {FacultyComponent} from './faculty.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Faculties'
        },
        children: [
            {
                data: {
                    title: ''
                },
                path: '',
                component: FacultiesComponent,
            },
            {
                data: {
                    title: 'Create'
                },
                path: 'create',
                component: FacultyComponent,
            },
            {
                data: {
                    title: 'Edit'
                },
                path: 'edit',
                component: FacultyComponent,
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
