import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import {VerticalTimelineModule} from 'angular-vertical-timeline';
import {BsDropdownModule, CollapseModule, ProgressbarModule, AccordionModule, AlertModule} from 'ngx-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfosComponent } from './contact-infos/contact-infos.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { InterestsComponent } from './interests/interests.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TimelineComponent,
    SkillsComponent,
    ContactFormComponent,
    ContactInfosComponent,
    FooterComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollToModule,
    VerticalTimelineModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularFontAwesomeModule,
    AccordionModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
