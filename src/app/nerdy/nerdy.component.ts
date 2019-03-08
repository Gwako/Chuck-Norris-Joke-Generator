import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../categories.service';

@Component({
  selector: 'app-nerdy',
  templateUrl: './nerdy.component.html',
  styleUrls: ['./nerdy.component.css']
})
export class NerdyComponent implements OnInit {
  nerdy: any;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCatNerdy();
  }
  getCatNerdy(): void {
    this.categoriesService.getCatNerdy()
    .subscribe(nerdy => this.nerdy = nerdy);
  }

}
