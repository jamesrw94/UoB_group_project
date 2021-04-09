import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './topicpage.component';
import { BrexitComponent } from './brexit/brexit.component';


const topicRoutes: Routes = [
  { path: '', component: TopicPageComponent },
  {path: 'topicpage/brexit', component: BrexitComponent}
]

@NgModule({
    imports: [
      RouterModule.forChild(topicRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class TopicPageRoutingModule {}
