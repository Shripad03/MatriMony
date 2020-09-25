import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { NgxPayPalModule } from 'ngx-paypal';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlansComponent } from './plans/plans.component';
import { SlideshowModule } from '../../public_api';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ForgotPasswordModule } from './auth/forgot-password/forgot-password.module';
import { FaqComponent } from './help/faq.component';
import { FaqModule } from './help/faq.module';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'plans',
        component: PlansComponent
    },
    {
        path: 'help',
        component: FaqComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'paymentPage',
        component: PaymentPageComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    }





];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ContactUsComponent,
        PlansComponent,
        LoginComponent,
        RegisterComponent,
        PaymentPageComponent,
        GalleryComponent

    ],
    imports: [
        SlideshowModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        AngularFontAwesomeModule,

        // Material
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatInputModule,
        MatRippleModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        ForgotPasswordModule,
        FaqModule,
        NgxPayPalModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
