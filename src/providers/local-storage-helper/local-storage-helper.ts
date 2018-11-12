import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/*
  Generated class for the LocalStorageHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageHelperProvider {
  freqDocs: any;
  constructor(private storage: Storage, public http:Http,private spinnerDialog: SpinnerDialog) {
    console.log('Hello LocalStorageHelperProvider Provider');
  }
  openURL(url,name){
    console.log("IN COMMAN FUNCTION");
    this.storage.get("fad").then((data)=>{
      if(data != undefined && data != null){
        this.freqDocs = JSON.parse(data);
      } else
      {
          this.freqDocs = { 'docs': [] };
      }
      var clickedLink = { "href": url, "name": name, "count": 1 };
      var doesExist = false;

      this.freqDocs.docs.forEach(function (arrayElement) {
          if (arrayElement.href == clickedLink.href)
          {
              arrayElement.count = arrayElement.count + 1
              doesExist = true;
          }
      });
      if (doesExist == false && url!="https://twitter.com/UN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" && url!="https://www.instagram.com/unitednations/")
      {
          this.freqDocs.docs.push(clickedLink);
      }

      var json = JSON.stringify(this.freqDocs);
      this.storage.set("fad",json);
    });
  }
  searchDatabase(urlString: string) {
    this.spinnerDialog.show();
    /*let header = new Headers({ 'Accept': 'application/json' });
    header.append('Access-Control-Allow-Origin' , '*');
    header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    header.append('Accept','application/json');
    header.append('content-type','application/json');
    let options = new RequestOptions({ headers: header });*/
    let promise = new Promise((resolve) => {
      this.http.get(urlString).subscribe(
        res => { // Success
          this.spinnerDialog.hide();
          resolve(res);
        }
      )
    });
    return promise;
  }
}
