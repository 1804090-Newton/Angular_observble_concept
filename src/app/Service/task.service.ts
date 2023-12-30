import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class  TaskService{
   // CreateTask: EventEmitter<string> = new EventEmitter<string>();
   // another Alternate approach is to use Subject. now I used Subject instead of EventEmitter
   // Subject is a special type of Observable that allows values to be multicasted to many Observers.
   // While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
   // A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
   
    CreateTask = new Subject<string>();
    OnCreateTask(task:string){
        this.CreateTask.next(task);
    }
}
