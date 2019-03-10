
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header';


import { SignupComponent } from './Footer/app.Signup';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { YogaComponent } from './ContentArea/Services/yoga/yoga.component';
import { ArtTherapyComponent } from './ContentArea/Services/art-therapy/art-therapy.component';
import { AyurvedaComponent } from './ContentArea/Services/ayurveda/ayurveda.component';
import { ChiropracticComponent } from './ContentArea/Services/chiropractic/chiropractic.component';
import { BodyworkComponent } from './ContentArea/Services/Bodywork/Bodywork.component';
import { MeditationComponent } from './ContentArea/Services/meditation/meditation.component';
import { MassageComponent } from './ContentArea/Services/Massage/Massage.component';
import { NutritionComponent } from './ContentArea/Services/nutrition/nutrition.component';
import { PilatesComponent } from './ContentArea/Services/pilates/pilates.component';
import { PsychotherapyComponent } from './ContentArea/Services/Psychotherapy/Psychotherapy.component';
import { ReikiComponent } from './ContentArea/Services/reiki/reiki.component';

import { AddictionComponent } from './ContentArea/Expertise/addiction/addiction.component';
import { DepressionExpertiseComponent } from './ContentArea/Expertise/depression/depression.component';
import { AnxietyComponent } from './ContentArea/Expertise/anxiety/anxiety.component';
import { EatingDisordersComponent } from './ContentArea/Expertise/eating-disorders/eating-disorders.component';
import { NegativeBodyImageComponent } from './ContentArea/Expertise/negative-body-image/negative-body-image.component';

import { PricingAndBundlesComponent } from './ContentArea/Pricing/pricing-and-bundles/pricing-and-bundles.component';
import { UseOurSpaceComponent } from './ContentArea/Community/UseOurSpace/UseOurSpace.component';

import { ContactUsComponent } from './ContentArea/Aboutus/contact-us/contact-us.component';
import { FoundersBiosComponent } from './ContentArea/Aboutus/founders-bios/founders-bios.component';
import { OurMissionComponent } from './ContentArea/Aboutus/our-mission/our-mission.component';
import { TestimonialsComponent } from './ContentArea/Aboutus/testimonials/testimonials.component';

import { OutreachComponent } from './ContentArea/Outreach/outreach.component';
import { CommunityComponent } from './ContentArea/Community/community.component';
import { EventsComponent } from './ContentArea/Events/Events.component';
import { ScheduleComponent } from './ContentArea/Schedule/schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    YogaComponent,
    ArtTherapyComponent,
    AyurvedaComponent,
    ChiropracticComponent,
    BodyworkComponent,
    MeditationComponent,
    NutritionComponent,
    PilatesComponent,
    PsychotherapyComponent,
    ReikiComponent,
    AddictionComponent,
    AnxietyComponent,
    EatingDisordersComponent,
    NegativeBodyImageComponent,
    PricingAndBundlesComponent,
    UseOurSpaceComponent,
    MassageComponent,
    ContactUsComponent,
    FoundersBiosComponent,
    OurMissionComponent,
    TestimonialsComponent,
    OutreachComponent,
    CommunityComponent,
    DepressionExpertiseComponent,
    ScheduleComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    FontAwesomeModule,
    HttpClientModule ,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
