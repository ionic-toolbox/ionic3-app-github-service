import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { ProfilesPage } from '../pages/profiles/profiles';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubService } from './../providers/github-service';

@NgModule({
  declarations: [
	MyApp,
	HomePage,
	TabsPage, RepoDetailsPage, ProfilesPage, ContactPage, AboutPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage,
	TabsPage, RepoDetailsPage, ProfilesPage, ContactPage, AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},

	GithubService
  ]
})
export class AppModule {}
