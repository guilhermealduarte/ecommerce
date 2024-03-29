import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute, title: Title){
    this.route.data.subscribe((res: any) => {
      title.setTitle(res.title);
    });
  }
}
