import {Component} from "@angular/core";
@Component({
    selector: 'Courses',
    template: `<h2>{{title}}</h2>
      <ul>
        <li *ngFor="let course of courses">
{{course}}
</li>
      </ul>
    <img [src]="imgURL" alt=""/>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <button (click)="onSave($event)">Save</button>
    <input (keyup.enter)="onKeyUp()"  />
    <input #email (keyup)="onKeyUpVale(email.value)" />
    <input [(ngModel)]="emailValue" (keyup.enter)="onKeyUpTwoWay()"/>
    <p>{{ text | summary }}</p>
    `
  })

export class CoursesComponent {
  title= "List of Courses"
  courses = ["Course1", "Course2", "Course3"];
  imgURL= "";
  colSpan= 2;
  emailValue= "";
  text= 'sadsadasdsadsadsadasdsadsadsadasdasdadadasds ';


  onSave($event: MouseEvent) {
    console.log("Button was clicked")
  }

  onKeyUp() {
    console.log("Enter was pressed")
  }

  onKeyUpVale(value: string) {
    console.log(value)
  }

  onKeyUpTwoWay() {
    console.log(this.emailValue)
  }
}
