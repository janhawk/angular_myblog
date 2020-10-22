import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class BlogComponent implements OnInit {
  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogLoveIts: number;
  @Input() blogCreated_at: Date;

  constructor() {}

  ngOnInit() {}
}
