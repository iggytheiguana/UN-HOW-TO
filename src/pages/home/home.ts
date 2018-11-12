import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,private lsp : LocalStorageHelperProvider,private iab: InAppBrowser,
    public navParams: NavParams, public alertCtrl: AlertController,public plt: Platform, public appAvail : AppAvailability) {
  }
  refDoc(){
    this.navCtrl.push('REferencedocumentsPage');
  }
  unBodies(){
    this.navCtrl.push('COreunbodiesPage');
  }
  resGuide(){
    this.navCtrl.push('REsourceguidePage');
  }
  forms(){
    this.navCtrl.push('FOrmsfordelegatesPage');
  }
  saved(){
    this.navCtrl.push('SAveddocsPage');
  }
  portals(){
    this.navCtrl.push('PortalsPage');
  }
  inAppOpen(url){
    console.log("URL = "+url);
     
      var scheme,playURL;
      if(this.plt.is('ios')) {
        scheme = 'whatsapp://';
      }
      else if(this.plt.is('android')) {
        scheme = 'com.whatsapp';
      }
    console.log("scheme "+scheme);
        /*window.open(url, '_system', 'location=no');
        console.log("win open");*/
        
        this.appAvail.check(
            scheme // Package Name
        ).then(function(info) {           // Success callback        
            // Info parameter is available only for android
            //console.log('WhatsApp is available, and it\'s version is ', info.version);
            window.open(url, '_system', 'location=no');
        },
        function() {      
          if(this.plt.is('ios')) {
                playURL = "https://itunes.apple.com/app/id310633997";
            }   
            else if(this.plt.is('android')) {
                playURL = "https://play.google.com/store/apps/details?id=com.whatsapp";
            }
            window.open(playURL, '_system', 'location=no');
            // Error callback
            console.log('WhatsApp is not available');
        });
  }
  
  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }

  helpRefDoc(){
    let alert = this.alertCtrl.create({
      title: 'Reference Documents',
      subTitle: 'Includes essential UN documents such as the Charter, rules of procedure, documents and the Delegate\'s handbook.',
      buttons: ['OK'],
      cssClass: 'alertCustomCss',
    });
    alert.present();
  }
  helpUnBodies(){
    let alert = this.alertCtrl.create({
      title: 'Core UN Bodies',
      subTitle: 'The Core UN Bodies section includes links to main UN organs such as The United Nations General Assembly, The UN Economic and Social Council, The UN Trusteeship Council and the UN Security Council. ',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }
  helpResGuide(){
    let alert = this.alertCtrl.create({
      title: 'Resource Guide',
      subTitle: 'The Resource Guide section includes essential resources for UN activities such as the General Assembly Resolutions and links to the Dag Hammarskjold Library.',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }
  helpForms(){
    let alert = this.alertCtrl.create({
      title: 'Forms for Delegates',
      subTitle: 'The Forms for Delegates section includes essential forms for delegates such as grounds pass request forms, the focal point designation form, letter templates to the Security Council and others. (All these forms can be filled out in the app).',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }
  helpSaved(){
    let alert = this.alertCtrl.create({
      title: 'Saved/Unfinished, Frequently Accessed Docs',
      subTitle: 'The Saved Documents section includes saved forms and documents the user was unable to complete earlier. This section also includes documents the user frequently uses.',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }
  helpPortals(){
    let alert = this.alertCtrl.create({
      title: 'Portals',
      subTitle: 'The Portals Section provides access to several portals such as E-delegate and CandiWeb. When the user clicks on any of these portals, they will be redirected to the page for that portal where they will log in with a previously provided username and password.',
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
