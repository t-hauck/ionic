import { Injectable } from '@angular/core';
import { ToastController} from 'ionic-angular';

@Injectable()
export class Toast{
    constructor(private toastController: ToastController){
    }

    public show(message : string, duration : number = 5000){
        /*let options = {
            message: param1,
            duration: param2
          };
        let toast = this.toastController.create(options);
        
        toast.present();*/
        }
        public presentToast(message : string, duracao : number = 5000){
            const toast = this.toastController.create({
                message: message,
                duration: duracao
              })
              toast.present();
        
    }
}