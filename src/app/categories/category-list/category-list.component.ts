import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  
  public titleHeader?: string;

  public categories!: Observable<Category[]>;

  constructor(private route: ActivatedRoute, title: Title, private router: Router, private service: CategoryService){

    this.route.data.subscribe((res: any) => {
      title.setTitle(res.title);
      
      this.titleHeader = res.title;
    });

  }

  ngOnInit() {
    this.categories = this.service.list();
  }

  addClick(){
    this.router.navigate(['categories/create']);
  }
}
