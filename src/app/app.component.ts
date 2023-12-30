import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  title = 'Angular_observable';
  data:any[]=[];

 // array1=[1,2,5,6,7,9];
  //  array2=['A','B','C','D','E','F'];
  //  creating an observable
  // Myobservable is an object of observable class
  //new is a keyword to create an object
  // Observable() is a constructor
  //observer is a parameter of Observable() constructor. which is meaning less  name. we can give any name
  // next() is a method of observer object. which is used to send data to the subscriber. observer is a subscriber

 // myoberservable =of(this.array1,this.array2, "suzab", "Newton", "osama", 1,5,4,3,4); 
  //  promise1=new Promise((resolve,reject)=>{
  //   resolve([5,6,3,2,4,5,8,9]);
  //  })

 //myoberservable =from(this.promise1); 

  // myoberservable = new Observable((observer)=>
  // {
  //      setTimeout(()=>{ observer.next(1); },1000);
  //      setTimeout(()=>{ observer.next(2); },2000);
  //      setTimeout(()=>{ observer.next(3); },3000);
  //      setTimeout(()=>{ observer.next(4); },4000);
  //      setTimeout(()=>{ observer.next(5); },5000);
  //      //setTimeout(()=>{ observer.error(new Error('something went wrong . please try again')); },5000);
  //      setTimeout(()=>{ observer.next(7); },7000);
  //      setTimeout(()=>{ observer.next(8); },8000);
  //      setTimeout(()=>{ observer.next(9); },5000);
  //      setTimeout(()=>{ observer.next(10); },10000);
  //       setTimeout(()=>{ observer.complete(); },11000);
  // })


  //  subscribing to observable
  //  subscribe() is a method of observable class. which is used to subscribe to observable
  // val is a parameter of subscribe() method. which is used to receive data from observable
  // subscribe() method is a asynchronous method. it will not wait for the data. it will execute the next line of code
  //GetAsyncData() is a observer. which is used to receive data from observable. observer is a subscriber.
  // val is a callback function. which is used to receive data from observable.
  // The subscribe method takes a callback function (val:any) that will be executed when the Observable emits a value. In this case, the emitted value is the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
  //  GetAsyncData()
  //  {
  //     this. myoberservable.subscribe((val:any)=>{
  //       this.data.push(val);
  //     },
  //     (error:any)=>{
  //       alert('Something went wrong please try again' );
  //     },
  //     ()=>{
  //       alert('data is succesfully emitted . thank you obserabe vai.');
  //     }
  //     )
  //  }

  // from() is a method of observable class. which is used to create an observable from array. it takes an array as a parameter. it returns an observable. we can subscribe to this observable.
  //pipe() is a method of observable class. which is used to transform the data. it takes a callback function. which is used to transform the data . it returns an observable. we can subscribe to this observable.
  //  map() is a method of observable class. which is used to transform the data. it takes a callback function. which is used to transform the data . it returns an observable. we can subscribe to this observable.  
   //  filter() is a method of observable class. which is used to filter the data. it takes a callback function. which is used to filter the data . it returns an observable. we can subscribe to this observable.
  myoberservable=from([1,2,3,4,5,6,7,8,9,10]).pipe(
    map((val: any) => {
      return val * 5;
    }),
    filter((val) => {
      return  val%3==0;
    })
  );

  // transformData = this.myoberservable.pipe(
  //   map((val: any) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return  val%3==0;
  //   })
  // );
 
// transformfilterData = this.transformData.pipe(
//   filter((val) => {
//     return  val%3==0;
//   })
// );

  GetAsyncData()
      {
          this.myoberservable.subscribe({
            next:(val:any)=>{
              this.data.push(val);
             // this.data=val;
              //console.log(this.data);
            },
            error:(error:any)=>{
              alert('Something went wrong please try again' );
            },
            complete:()=>{
              alert('data is succesfully emitted . thank you obserabe vai.');
            }
          })
      }

      //lecture-72
      // ViewChild is a decorator. which is used to get the reference of html element. it works like document.getElementById(). Accessing html native element
      //in viewchild we have to pass the name of html element. which we want to access.read is a property of viewchild decorator. which is used to access the html element
      // static is a property of viewchild decorator. which is used to access the html element. 
      // if we set static to true. we can access the html element in ngOnInit() method. when we set true. we can access the html element in ngOninit method
      // @ViewChild('createbtn', {read: ElementRef, static: false}) creatbtn: ElementRef;
      // creatbtnObs;

      //fromEvent is a method of fromEvent class. which is used to create an observable from html element. it takes two parameters. first parameter is html element. second parameter is event name
      // fromEvent() method returns an observable. we can subscribe to this observable. how to work fromEvent() method. 
      //when we click on html element. it will emit data. we can subscribe to this data.then we can do whatever we want to do with this data
       
    // buttonClicked(){
    //   let count=0;
    //    this.creatbtnObs =fromEvent(this.creatbtn.nativeElement,'click')
    //                    .subscribe((data)=>
    //                    {
    //                     console.log(data);
    //                     this.ShowItem(++count);
    //                    })                   
    // }


    //ngAfterViewInit is a life cycle hook. which is used to execute the code after the view is initialized.
    ngAfterViewInit(){
     // this.buttonClicked();
    }
//ShowItem() is a method. which is used to show the data in html element
//val is a parameter of ShowItem() method. which is used to receive data from observable
//document.createElement() is a method. which is used to create an html element
//div is a variable. which is used to store the html element
//div.innerText is a property. which is used to set the text of html element
//div.className is a property. which is used to set the class of html element
//document.getElementById() is a method. which is used to get the reference of html element
//appendChild() is a method. which is used to append the html element to html element
//      ShowItem(val){
//           let div= document.createElement('div');
//            div.innerText='Item'+val;
//            div.className="data-list";
//            document.getElementById('container').appendChild(div);

// }


}


