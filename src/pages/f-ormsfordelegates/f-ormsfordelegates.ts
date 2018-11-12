import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the FOrmsfordelegatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-f-ormsfordelegates',
  templateUrl: 'f-ormsfordelegates.html',
})
export class FOrmsfordelegatesPage {

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
  formSG5(){
    this.navCtrl.push('Sg5Page');
  }
  formSG39(){
    this.navCtrl.push('Sg39Page');
  }
  formSG32(){
    this.navCtrl.push('Sg32Page');
  }
  formSG8(){
    this.navCtrl.push('Sg8Page');
  }
  formSG38(){
    this.navCtrl.push('Sg38Page');
  }
  sCLetter(){
    this.navCtrl.push('ScLetterPage');
  }
}
