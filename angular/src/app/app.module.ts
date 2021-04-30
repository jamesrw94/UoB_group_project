import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DataService} from './data.service';

import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {BrexitComponent} from './topicpage/brexit/brexit.component';
import {EducationComponent} from './topicpage/education/education.component';
import {ClimateComponent} from './topicpage/climate/climate.component';
import {PoliticsComponent} from './topicpage/politics/politics.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    HomescreenComponent,
    ResultspageComponent,
    PageNotFoundComponent,
    BrexitComponent,
    EducationComponent,
    ClimateComponent,
    PoliticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    DragDropModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
