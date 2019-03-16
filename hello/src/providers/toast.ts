import { Injectable } from '@angular/core';
import { ToastController} from 'ionic-angular';

@Injectable()
export class Toast{
    constructor(private toastController: ToastController){}

    public show(message : string, duration : number = 5000){}

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
            
/*
@Injectable()
export class Toast {

  constructor(public toastCtrl: ToastController) { }

  presentToast(toastMessage : string) {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 3000
    });
    toast.present();
  }

  public loadingShow(toastMessage : string = "Login Falhou"){
    this.presentToast(toastMessage);
  }
}
*/