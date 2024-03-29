import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {

  public titleHeader?: string;

  constructor(private route: ActivatedRoute, private title: Title, private router: Router, private formBuilder: FormBuilder, private service: CategoryService){
    
    this.route.data.subscribe((res: any) => {
      this.title.setTitle(res.title);

      this.titleHeader = res.title;
    });
    
  }

  form = this.formBuilder.group({
    name: [null, Validators.required]
  });

  object(): Category{
    return {
      name: this.form.get('name')?.value!
    }
  }

  submitClick(){
    const object = this.object();

    this.service.create(object);
  }

  backPageClick(){
    this.router.navigate(['categories']);
  }
}
