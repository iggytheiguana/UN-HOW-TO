import { Component } from '@angular/core';
import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the SAveddocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-s-aveddocs',
  templateUrl: 's-aveddocs.html',
})

export class SAveddocsPage {
  forms : any ={};
  savedForms: any = [];
  fad : any;
  fadActive : Boolean = false;
  constructor(public navCtrl: NavController,private iab: InAppBrowser,  private lsp : LocalStorageHelperProvider, public navParams: NavParams, private storage: Storage) {
    this.storage.get("savedForms").then((data) => {
      console.log("savedForms",data);
      if(data != undefined && data != null){
        this.savedForms = JSON.parse(data).saved; 
      }
    });
    this.storage.get("fad").then((data) => {
      if(data != undefined && data != null){
        this.fad = JSON.parse(data).docs;
        this.fad.forEach(function (arrayElement) {
          if (arrayElement.count > 2) {
            //this.fadActive =  true;
          }
        });
      }
    });
  }

  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }

  discard(index){
    console.log(index);
    this.savedForms.splice(index,1);
    console.log("before",this.savedForms);
    this.storage.set("savedForms",JSON.stringify({ 'saved': this.savedForms }));
    console.log("after",this.savedForms);
  }

  continue(index){
    this.navCtrl.push(this.savedForms[index].routeName,{
      id: index
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SAveddocsPage');
  }

}
