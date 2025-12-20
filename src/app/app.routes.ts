import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { ChildComponet } from './contact/child-componet/child-componet';

export const routes: Routes = [
{
    path:'contact',
    component:Contact,
    children:[
        {
                path:'child-componet',
                component:ChildComponet
        }
]
},

{
    path:'',
    redirectTo:'contact',
    pathMatch:'full'
}

];
