import { Component, inject } from '@angular/core';
import { TaskService } from '../Service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
     newTask:string = '';
     taskService:TaskService=inject(TaskService);
     onCreateTask(){
       console.log(this.newTask);
       this.taskService.OnCreateTask(this.newTask);
     }
}
