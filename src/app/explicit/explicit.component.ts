import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../categories.service';

@Component({
  selector: 'app-explicit',
  templateUrl: './explicit.component.html',
  styleUrls: ['./explicit.component.css']
})
export class ExplicitComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  explicit: any;
  ngOnInit() {
    this.getCatExplicit();
  }
  getCatExplicit(): void {
    this.categoriesService.getCatExplicit()
    .subscribe(explicit => this.explicit = explicit);
  }

}
