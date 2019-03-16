import { Injectable } from '@angular/core';
import { ToastController} from 'ionic-angular';

@Injectable()
export class Toast{
    constructor(private toastController: ToastController){}

    public show(message : string, duration : number = 2000){}

        public presentToast(message : string){
            const toast = this.toastController.create({
                message: message,
                duration: 5000
              })
              toast.present();
            }
            public loadingShow(message : string = "Toast!"){
                  this.presentToast(message); }
                }