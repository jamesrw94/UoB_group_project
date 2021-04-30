import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './topicpage.component';
import { BrexitComponent } from './brexit/brexit.component';
import { EducationComponent } from './education/education.component';
import { ClimateComponent } from './climate/climate.component';
import { PoliticsComponent } from './politics/politics.component';


const topicRoutes: Routes = [
  { path: '', component: TopicPageComponent },
  {path: 'brexit', component: BrexitComponent},
  {path: 'education', component: EducationComponent},
  {path: 'climate', component: ClimateComponent},
  {path: 'politics', component: PoliticsComponent}
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
