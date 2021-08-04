import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent implements OnInit {
  mailSended: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.http
        .post('https://formspree.io/f/mdoylzpp', f.value)
        .subscribe((resData) => {
          this.mailSended = true;
        });
    }

    f.reset();
  }
}
