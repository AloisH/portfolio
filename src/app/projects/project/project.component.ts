import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  data : any = "";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
      const name : string | null = this.route.snapshot.paramMap.get("project-name");

      const jsonFIle : String = `../../assets/project/${name}.json`;
      this.loadData(jsonFIle);

  }

  loadData(path : any) {
    return new Promise<void>((resolve, reject) => {
      this.http.get(path, { responseType: "json"}).subscribe(data => 
       {
        this.data = data;
       });
      return;
    });
  }

}
