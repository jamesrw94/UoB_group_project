import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomescreenComponent} from './homescreen/homescreen.component';
import {ResultspageComponent} from './resultspage/resultspage.component';
import { BrexitComponent } from './topicpage/brexit/brexit.component';
import { TopicPageComponent } from './topicpage/topicpage.component';

const routes: Routes = [
  {path: 'homepage', component: HomescreenComponent},
  {
    path: 'topicpage',
    component: TopicPageComponent,
    children: [
      {
        path: 'topicpage/brexit',
        component: BrexitComponent
      }
    ]
  },
  {path: 'resultspage', component: ResultspageComponent},
  {path: '**', component: HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
