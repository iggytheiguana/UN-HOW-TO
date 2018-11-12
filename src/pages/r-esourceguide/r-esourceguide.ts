import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the REsourceguidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-r-esourceguide',
  templateUrl: 'r-esourceguide.html',
})
export class REsourceguidePage {
  search;
  searchResults:any;
  constructor(public navCtrl: NavController, 
    private iab: InAppBrowser, public navParams: NavParams,
  private lsp : LocalStorageHelperProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad REsourceguidePage');
  }
  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }
  searchDatabase(){
    console.log("search data");
    console.log(this.search); 
    var url = "https://search.un.org/api.php?tpl=ods&wt=json&query=" + this.search + "&fq=lang:en";
    console.log(url);
    this.lsp.searchDatabase(url).then((doc)=>{
      var result = JSON.parse(doc['_body']).response.docs;
      console.log(result);
      this.searchResults = result;
      // result.forEach((value) => {
      //   console.log("value",value);
      //   value.title = "No title";
      //   value.forEach((v1,k1) => {
      //     if (k1.indexOf("title") !== -1) {
      //       value.title = v1;
      //       console.log("moving " + k1 + " to title, contents: " + v1);
      //   }
      //   });
      // });
    });
  }
  
}
