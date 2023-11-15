import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HubsService } from 'src/app/services/hubs.service';

const synth = window.speechSynthesis;
// utterThis.lang = 'es-ES';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  texto:string = "El diablo";

  feed: string[] = [];
  allFeedSubscription: any;

  constructor(private hubsService: HubsService){
  }

  ngOnInit(): void {
    // 1 - start a connection
    this.hubsService.startConnection().then(() => {
      console.log("connected");

      // 2 - register for ALL relay
      this.hubsService.listenToAllFeeds();

      // 3 - subscribe to messages received
      this.allFeedSubscription = this.hubsService.AllFeedObservable
            .subscribe((res: string) => {
              this.feed.push(res);
            });
    });
  }
  
  reproducir(texto: string){
    console.log(texto);
    
    const utterThis = new SpeechSynthesisUtterance(texto);
    synth.speak(utterThis);    
  }

  voces(){
    let voces = synth.getVoices();
    console.log(voces);
  }

  ngOnDestroy(): void {
    (<Subscription>this.allFeedSubscription).unsubscribe();
  }

}
