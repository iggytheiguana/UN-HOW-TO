import { HelpPage } from './../pages/help/help';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {  FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms'; 
import { MyApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpModule } from '@angular/http';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { AppAvailability } from '@ionic-native/app-availability';
import { Printer } from '@ionic-native/printer';
import { LocalStorageHelperProvider } from '../providers/local-storage-helper/local-storage-helper';

@NgModule({
  declarations: [
    MyApp,HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HelpPage,
    InAppBrowser,FileOpener,File,FileTransfer,HTTP,EmailComposer,Printer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageHelperProvider,SpinnerDialog,AppAvailability
    
  ]
})
export class AppModule {}
