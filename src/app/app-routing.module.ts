import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ContentArea/app.Home';


import { YogaComponent } from './ContentArea/Services/yoga/yoga.component';
import { PsychotherapyComponent } from './ContentArea/Services/Psychotherapy/Psychotherapy.component';
import { ReikiComponent } from './ContentArea/Services/reiki/reiki.component';
import { HomeopathyComponent } from './ContentArea/Services/homeopathy/homeopathy.component';

import { PilatesComponent } from './ContentArea/Services/pilates/pilates.component';
import { NutritionComponent } from './ContentArea/Services/nutrition/nutrition.component';
import { MassageComponent } from './ContentArea/Services/Massage/Massage.component';
import { MeditationComponent } from './ContentArea/Services/meditation/meditation.component';
import { BodyworkComponent } from './ContentArea/Services/Bodywork/Bodywork.component';
import { ChiropracticComponent } from './ContentArea/Services/chiropractic/chiropractic.component';
import { AyurvedaComponent } from './ContentArea/Services/ayurveda/ayurveda.component';
import { ArtTherapyComponent } from './ContentArea/Services/art-therapy/art-therapy.component';

import { NegativeBodyImageComponent } from './ContentArea/Expertise/negative-body-image/negative-body-image.component';
import { EatingDisordersComponent } from './ContentArea/Expertise/eating-disorders/eating-disorders.component';
import { DepressionComponent } from './ContentArea/Expertise/depression/depression.component';
import { AnxietyComponent } from './ContentArea/Expertise/anxiety/anxiety.component';
import { AddictionComponent } from './ContentArea/Expertise/addiction/addiction.component';

import { UseOurSpaceComponent } from './ContentArea/Community/UseOurSpace/UseOurSpace.component';
import { PricingAndBundlesComponent } from './ContentArea/Pricing/pricing-and-bundles/pricing-and-bundles.component';

import { CommunityComponent } from './ContentArea/Community/community.component';

import { OutreachComponent } from './ContentArea/Outreach/outreach.component';

import { ContactUsComponent } from './ContentArea/Aboutus/contact-us/contact-us.component';
import { FoundersBiosComponent } from './ContentArea/Aboutus/founders-bios/founders-bios.component';
import { OurMissionComponent } from './ContentArea/Aboutus/our-mission/our-mission.component';
import { TestimonialsComponent } from './ContentArea/Aboutus/testimonials/testimonials.component';

import { EventsComponent } from './ContentArea/Events/Events.component';
import { ScheduleComponent } from './ContentArea/Schedule/schedule.component';

import { BlogComponent } from './ContentArea/Blog/Blog.component';
import { ArticleComponent } from './ContentArea/Blog/Article.component';
import { AuthorComponent } from './ContentArea/Blog/Author.component';
import { TagComponent } from './ContentArea/Blog/Tag.component';





const routes: Routes = [{ path: '', component: HomeComponent },

{ path: 'Services/Yoga', component: YogaComponent },
{ path: 'Services/Psychotherapy', component: PsychotherapyComponent },
{ path: 'Services/Reiki', component: ReikiComponent },
{ path: 'Services/Homeopathy', component: HomeopathyComponent },
{ path: 'Services/Pilates', component: PilatesComponent },
{ path: 'Services/Nutrition', component: NutritionComponent },
{ path: 'Services/Massage', component: MassageComponent },
{ path: 'Services/Meditation', component: MeditationComponent },
{ path: 'Services/Body-Therapy', component: BodyworkComponent },
{ path: 'Services/Chiropractic', component: ChiropracticComponent },
{ path: 'Services/Ayurveda', component: AyurvedaComponent },
{ path: 'Services/Art-Therapy', component: ArtTherapyComponent },

{ path: 'Expertise/Negative-Body-Image', component: NegativeBodyImageComponent },
{ path: 'Expertise/Eating-Disorders', component: EatingDisordersComponent },
{ path: 'Expertise/Depression', component: DepressionComponent },
{ path: 'Expertise/Anxiety', component: AnxietyComponent },
{ path: 'Expertise/Addiction', component: AddictionComponent },

{ path: 'Community/Use-Our-Space', component: UseOurSpaceComponent },
{ path: 'Pricing/Pricing-And-Bundles', component: PricingAndBundlesComponent },

{ path: 'Community', component: CommunityComponent },

{ path: 'Outreach', component: OutreachComponent },

{ path: 'About-Us/Contact-Us', component: ContactUsComponent },
{ path: 'About-Us/Founders-Bios', component: FoundersBiosComponent },
{ path: 'About-Us/Our-Mission', component: OurMissionComponent },
{ path: 'About-Us/Testimonials', component: TestimonialsComponent },

{ path: 'Events', component: EventsComponent , data: {
  preload: true
}},
{ path: 'Schedule', component: ScheduleComponent },

{ path: 'Article/:id', component: ArticleComponent },
{ path: 'Author/:id', component: AuthorComponent },
{ path: 'Tag/:id', component: TagComponent },

{ path: 'Blog/:id', component: BlogComponent },

{ path: 'Blog', redirectTo: '/', pathMatch: 'full' },



{ path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

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
    HomeopathyComponent,
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
    DepressionComponent,
    ScheduleComponent,
    EventsComponent,
    BlogComponent,
    ArticleComponent,
    TagComponent,
    AuthorComponent
]
