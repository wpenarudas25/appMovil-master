import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CitePage } from '../pages/cite/cite';
import { ProfilePage }from '../pages/profile/profile';
import { TabsPage }from '../pages/tabs/tabs';
import { AboutPage }from '../pages/about/about';
import { ContactPage }from '../pages/contact/contact';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CitesProvider } from '../providers/cites/cites';
import { UsersProvider } from '../providers/users/users';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CitePage,
    ProfilePage,
    TabsPage,
    AboutPage,
    ContactPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CitePage,
    ProfilePage,
    TabsPage,
    AboutPage,
    ContactPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CitesProvider,
    UsersProvider,
    AuthProvider
  ]
})
export class AppModule {}
