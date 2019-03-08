import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  constructor() { }
  firstname: string;
  lastname: string;
   submitted = false;
  @ViewChild('alert') alert: ElementRef;
  @Output() name = new EventEmitter<string>();

  onSubmit() {
    this.submitted = true;
    this.name.emit(this.firstname + ' ' + this.lastname);
   }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  ngOnInit() {
  }

}
