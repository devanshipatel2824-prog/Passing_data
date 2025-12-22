import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Child } from './home/child/child';

export const routes: Routes = [
{
    path:'home',
    component:Home,
    children:[
        {path:'child',component:Child},
]
},
{
    path:'',
    redirectTo:'contact',
    pathMatch:'full'
}
];
