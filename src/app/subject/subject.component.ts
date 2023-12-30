import { Component } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { AsyncSubject } from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
   
  ngOnInit()
     {  

    //    const subject =new Subject();
     
    //   // let obs=new Observable((observer)=>{
    //   //        observer.next(Math.random());
    //   // });
    //  // subscriber 1
    //  subject.subscribe((data)=>{console.log(data)});
    //   // subscriber 2
    //   subject.subscribe((data)=>{console.log(data)});
    //   subject.next(Math.random());
//     const subject =new Subject();
//     const data= ajax( 'https://randomuser.me/api/');
//     subject.subscribe((res)=>{console.log(res)});
//     subject.subscribe((res)=>{console.log(res)});
//     subject.subscribe((res)=>{console.log(res)});

// data.subscribe(subject);

     // const subject =new BehaviorSubject<number>(100);
      //const subject =new Subject<number>();
      // const subject =new ReplaySubject(2,1000);
      // subject.next(2020);
      // subject.next(2021);
      // subject.next(2022);
      // subject.subscribe((data)=>{console.log("subject 1  "+data)});
      // subject.subscribe((data)=>{console.log("subject 2  "+data)});
      // subject.subscribe((data)=>{console.log("subject 3  "+data)});
      // subject.next(2023);

      // subject .subscribe((data)=>{console.log("subject 4  "+data)});
      // subject.next(20224);
      // subject .subscribe((data)=>{console.log("subject 5  "+data)});

      // AsyncSubject
      //const asyncSubject =new AsyncSubject();
    //   const asyncSubject =new  AsyncSubject();
    //   asyncSubject.next(100);
    //   asyncSubject.next(200); 
    //   asyncSubject.next(300);
    //   asyncSubject.subscribe((data)=>{console.log(`Subscriber 1 : ${data}`)});
     
    //   asyncSubject.complete();
    //   asyncSubject.next(400);
    //   asyncSubject.complete();

    //   asyncSubject.subscribe((data)=>{console.log(`Subscriber 2 : ${data}`)});

       //Difference between Subject and BehaviorSubject. 1. BehaviorSubject needs an initial value as it must always return a value on subscription even if it hasn't received a next(). 2. With BehaviorSubject you can get the last value "immediately" on subscription, 3. BehaviorSubject also has a getValue() function to extract the last value as raw data.
       //2. ReplaySubject needs a bufferSize parameter, that will determine how many values are sent to new subscribers. 3. ReplaySubject will replay the values to all new subscribers even if they have missed the values the first time. 4. ReplaySubject will also replay the values to subscribers that subscribe after the sequence has completed.
       //3. AsyncSubject emits the last value on completion of the sequence. 2. If you want the last value of an Observable no matter when the subscriber subscribes you can use the AsyncSubject.
       //4. AsyncSubject in RxJS is similar to last() operator in RxJava.

       // difference between promise and observable

        //1. Observable are lazy, promise are not
        //2. Observable can be cancelled, promise cannot be cancelled
        //3. Observable can be retried, promise cannot be retried
        //4. Observable can be used with operators, promise cannot be used with operators
        //5. Observable have multiple values, promise have single value
        //6. Observable can be used with rxjs library, promise cannot be used with rxjs library
        
        // promise
         const promise=new Promise((resolve,reject)=>{
         console.log('Promise is called');
         resolve(100);
         resolve(200);
         resolve(300);
         });
          promise.then((data)=>{console.log(data)});

          // observable
           const obs=new Observable((observer)=>{
              console.log('Observable is called');
              observer.next(100);
              observer.next(200);
              observer.next(300);
            });

   obs.subscribe((data)=>{console.log(data)});


      }
  
   
}
