import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutComponent } from './pages/landing-page/about/about.component';
import { ContactComponent } from './pages/landing-page/contact/contact.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { JobseekerComponent } from './pages/jobseeker/jobseeker.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CandidatesPageComponent } from './pages/candidates-page/candidates-page.component';
import { AiCheckComponent } from './pages/ai-check/ai-check.component';
import { ChatBotComponent } from './pages/chat-bot/chat-bot.component';
import { CvUploadComponent } from './pages/cv-upload/cv-upload.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { JobsAvailableComponent } from './pages/jobs-available/jobs-available.component';
import { SkillsUploadingComponent } from './pages/skills-uploading/skills-uploading.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'about',component:AboutComponent},
    {path: 'contact',component:ContactComponent},
    {path:'employee',component:EmployeePageComponent},
    {path:'jobseeker',component:JobseekerComponent},
    {path:'interview', component:InterviewComponent},
    {path:'admin',component:AdminComponent},
    {path:'candidates',component:CandidatesPageComponent},
    {path:'aiChecking', component:AiCheckComponent},
    {path:'chat',component:ChatBotComponent},
    {path:'cvUpload',component:CvUploadComponent},
    {path:'analysis',component:AnalyticsComponent},
    {path:'policy', component:PrivacyPolicyComponent},
    {path:'jobseeker/jobs', component:JobsAvailableComponent},
    {path:'jobseeker/skillsUploading',component:SkillsUploadingComponent},
    {path:'jobseeker/skills', component:SkillsComponent},

   
];
