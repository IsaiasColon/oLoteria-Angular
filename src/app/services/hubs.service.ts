import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HubsService {

  public hubConnection: HubConnection = {} as any;

  public startConnection() {
    return new Promise((resolve, reject) => {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl("https://localhost:44324/hub/salas").build();
        
      this.hubConnection.start()
        .then(() => {
          console.log("connection established");
          return resolve(true);
        })
        .catch((err: any) => {
          console.log("error occured" + err);
          reject(err);
        });
    });
  }

  constructor() { }

  private $allFeed: Subject<string> = new Subject<string>();

  public get AllFeedObservable(): Observable<string> {
    return this.$allFeed.asObservable();
  }

  public limpiarGrupo(){
    return this.$allFeed = new Subject<string>();
    console.log(this.$allFeed);
    
  }

  public listenToAllFeeds() {
    (<HubConnection>this.hubConnection).on("cliente", (data: string) => {
      this.$allFeed.next(data);
    });
  }

  public listenToSalas() {
    (<HubConnection>this.hubConnection).on("Skp", data => {
      this.$allFeed.next(data);      
    });
  }

  public ShowWho() {
    (<HubConnection>this.hubConnection).on("ShowWho", data => {
      this.$allFeed.next(data);      
    });
  }

  entrarEnSala(idSala:number, userName: string, idUser: number, mensaje: string){    
    this.hubConnection.invoke("Send", 2, "Skp", 2, "Al entrar a sala");
  }
  
  addToGroup(idSala: string){
    console.log(idSala);    
    this.hubConnection.invoke("AddToGroup", idSala);
  }
  
  removeFromGroup(idSala: string){
    console.log(idSala);
    this.hubConnection.invoke("removeToGroup", idSala);
    this.$allFeed = new Subject<string>();
    console.log(this.$allFeed);
  }

}
