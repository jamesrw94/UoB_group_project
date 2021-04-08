import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { TopicPageRoutingModule } from './topicpage-routing.module';
import { TopicPageComponent } from './topicpage.component';

@NgModule({
  imports: [
    CommonModule,
    // TopicPageRoutingModule
  ],
  declarations: [
    TopicPageComponent
  ]
})
export class TopicPageModule {}
