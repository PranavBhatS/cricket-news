import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/shared/loader.service';

@Component({
  selector: 'app-coin-toss',
  templateUrl: './coin-toss.page.html',
  styleUrls: ['./coin-toss.page.scss'],
})
export class CoinTossPage implements OnInit {
  @ViewChild("coin", { read: ElementRef }) coin: ElementRef;
  state = 'start'
  constructor(private renderer: Renderer2, private loader: LoaderService) { }


  ngOnInit() {
    this.state = "start"
  }

  start() {
    this.state = 'start';
    this.removeAllClasses();
  }
  tossHelper(called) {
    this.state = 'reset';
    const msg = `We are tossing the coin.Please wait for the result</p>`;
    this.loader.presentLoadingWithOptions(msg)
    let flipResult = Math.random();
    this.removeAllClasses();
    setTimeout(() => {
      if (flipResult <= 0.5) {
        this.renderer.addClass(this.coin.nativeElement, 'heads')
        console.log('it is head');
      }
      else {
        this.renderer.addClass(this.coin.nativeElement, 'tails')
        console.log('it is tails');
      }
    }, 100);
  }
  removeAllClasses() {
    if (this.coin.nativeElement.classList.length > 0) {
      this.renderer.removeClass(this.coin.nativeElement, this.coin.nativeElement.classList[0])
      this.removeAllClasses();
    }
    return;
  }
}

// jQuery(document).ready(function($){

//   $('#coin').on('click', function(){
//     var flipResult = Math.random();
//     $('#coin').removeClass();
//     setTimeout(function(){
//       if(flipResult <= 0.5){
//         $('#coin').addClass('heads');
//         console.log('it is head');
//       }
//       else{
//         $('#coin').addClass('tails');
//         console.log('it is tails');
//       }
//     }, 100);
//   });
// });
