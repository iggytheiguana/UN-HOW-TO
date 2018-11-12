import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the COreunbodiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c-oreunbodies',
  templateUrl: 'c-oreunbodies.html',
})
export class COreunbodiesPage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser, public navParams: NavParams,
    private lsp : LocalStorageHelperProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad COreunbodiesPage');
  }
  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }
}
