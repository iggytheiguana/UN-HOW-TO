import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';

/**
 * Generated class for the PortalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portals',
  templateUrl: 'portals.html',
})
export class PortalsPage {

 constructor(public navCtrl: NavController, private iab: InAppBrowser, public navParams: NavParams,
     private lsp : LocalStorageHelperProvider) {
  }
  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad POrtalsPage');
  }

}
