import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrexitComponent } from './brexit/brexit.component';

const topicRoutes: Routes = [
    {path: 'brexit', component: BrexitComponent}
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