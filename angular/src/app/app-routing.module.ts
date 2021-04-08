import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {TopicpageComponent} from './topicpage/topicpage.component';
import {ResultspageComponent} from './resultspage/resultspage.component';

const routes: Routes = [
  {path: 'homepage', component: HomescreenComponent},
  {path: 'topicpage', component: TopicpageComponent},
  {path: 'resultspage', component: ResultspageComponent},
  {path: '**', component: HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
