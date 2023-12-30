import { Component, inject } from '@angular/core';
import { TaskService } from '../Service/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {
  tasks:string[]= ['task1','task2','task3'];
  taskService:TaskService=inject(TaskService);
   ngOnInit(){
     this.taskService.CreateTask.subscribe((value:string)=>{
       this.tasks.push(value);
     })
   }
}
