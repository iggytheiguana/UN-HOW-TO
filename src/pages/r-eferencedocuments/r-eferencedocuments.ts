import { LocalStorageHelperProvider } from './../../providers/local-storage-helper/local-storage-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-r-eferencedocuments',
  templateUrl: 'r-eferencedocuments.html',
})
export class REferencedocumentsPage {
  freqDocs: any;
  constructor(
    public navCtrl: NavController, 
    private transfer: FileTransfer , 
    private fileOpener: FileOpener, 
    private file: File, private iab: InAppBrowser,public navParams: NavParams ,
    private lsp : LocalStorageHelperProvider
  ) {
  }
  openURL(url,name){
    this.lsp.openURL(url,name);
    const browser = this.iab.create(url);
    browser.show();
  }
  inAppPDF(url){
    var app_path = this.file.applicationDirectory+"src/"+url;
    var urlparts = url.split("/");
    var fname = urlparts[urlparts.length-1];
    console.log(app_path);
    console.log(urlparts);
    console.log(fname);
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(app_path,  this.file.externalDataDirectory+ fname).then( (entry) => {
      console.log('download complete: ' , entry);
      console.log('To URL: ' , entry.toURL());
      this.fileOpener.open(entry.toURL(), 'application/pdf',)
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
    }).catch();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad REferencedocumentsPage');
  }

}
