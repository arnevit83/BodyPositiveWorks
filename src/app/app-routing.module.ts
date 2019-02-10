import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/app.Header';
import { HomeComponent } from './ContentArea/app.Home';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';


import { YogaComponent } from './ContentArea/Services/yoga/yoga.component';
import { TherapyComponent } from './ContentArea/Services/therapy/therapy.component';
import { ReikiComponent } from './ContentArea/Services/reiki/reiki.component';
import { PilatesComponent } from './ContentArea/Services/pilates/pilates.component';
import { NutritionComponent } from './ContentArea/Services/nutrition/nutrition.component';
import { MeditationComponent } from './ContentArea/Services/meditation/meditation.component';
import { DepressionComponent } from './ContentArea/Services/depression/depression.component';
import { ChiropracticComponent } from './ContentArea/Services/chiropractic/chiropractic.component';
import { AyurvedaComponent } from './ContentArea/Services/ayurveda/ayurveda.component';
import { ArtTherapyComponent } from './ContentArea/Services/art-therapy/art-therapy.component';

import { NegativeBodyImageComponent } from './ContentArea/Expertise/negative-body-image/negative-body-image.component';
import { EatingDisordersComponent } from './ContentArea/Expertise/eating-disorders/eating-disorders.component';
import { DepressionExpertiseComponent } from './ContentArea/Expertise/depression/depression.component';
import { AnxietyComponent } from './ContentArea/Expertise/anxiety/anxiety.component';
import { AddictionComponent } from './ContentArea/Expertise/addiction/addiction.component';

import { RentOurSpaceComponent } from './ContentArea/Pricing/rent-our-space/rent-our-space.component';
import { PricingAndBundlesComponent } from './ContentArea/Pricing/pricing-and-bundles/pricing-and-bundles.component';

import { CommunityComponent } from './ContentArea/community/community.component';

import { OutreachComponent } from './ContentArea/outreach/outreach.component';

import { ContactUsComponent } from './ContentArea/AboutUs/contact-us/contact-us.component';
import { FoundersBiosComponent } from './ContentArea/AboutUs/founders-bios/founders-bios.component';
import { OurMissionComponent } from './ContentArea/AboutUs/our-mission/our-mission.component';
import { TestimonialsComponent } from './ContentArea/AboutUs/testimonials/testimonials.component';

import { ScheduleComponent } from './ContentArea/Schedule/schedule.component';






const routes: Routes = [{ path: '', component: HomeComponent },

{ path: 'Services/Yoga', component: YogaComponent },
{ path: 'ServicesTherapy', component: TherapyComponent },
{ path: 'Services/Reiki', component: ReikiComponent },
{ path: 'Services/Pilates', component: PilatesComponent },
{ path: 'Services/Nutrition', component: NutritionComponent },
{ path: 'Services/Meditation', component: MeditationComponent },
{ path: 'Services/Depression', component: DepressionComponent },
{ path: 'Services/Chiropractic', component: ChiropracticComponent },
{ path: 'Services/Ayurveda', component: AyurvedaComponent },
{ path: 'Services/Art-Therapy', component: ArtTherapyComponent },

{ path: 'Expertise/Negative-Body-Image', component: NegativeBodyImageComponent },
{ path: 'Expertise/Eating-Disorders', component: EatingDisordersComponent },
{ path: 'Expertise/Depression', component: DepressionExpertiseComponent },
{ path: 'Expertise/Anxiety', component: AnxietyComponent },
{ path: 'Expertise/Addiction', component: AddictionComponent },

{ path: 'Pricing/Rent-Our-Space', component: RentOurSpaceComponent },
{ path: 'Pricing/Pricing-And-Bundles', component: PricingAndBundlesComponent },

{ path: 'Community', component: CommunityComponent },

{ path: 'Outreach', component: OutreachComponent },

{ path: 'About-Us/Contact-Us', component: ContactUsComponent },
{ path: 'About-Us/Founders-Bios', component: FoundersBiosComponent },
{ path: 'About-Us/Our-Mission', component: OurMissionComponent },
{ path: 'About-Us/Testimonials', component: TestimonialsComponent },

{ path: 'Schedule', component: ScheduleComponent },









{ path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
