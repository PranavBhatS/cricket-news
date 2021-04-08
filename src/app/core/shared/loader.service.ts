import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoaderService {
   constructor(private loadingController: LoadingController) { }

   async presentLoadingWithOptions(message) {
      const loading = await this.loadingController.create({
         spinner: 'lines-small',
         duration: 2000,
         message: message,
         translucent: true,
         cssClass: 'custom-class custom-loading',
         backdropDismiss: true
      });
      await loading.present();

      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
   }
}