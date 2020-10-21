import { Component, } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Blog';

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
blogOne = "Trees";
blogtwo = "Building";
blogThree = "Pets";
blogContentOne = "Nature";
blogContentTwo= "Building";
blogContentThree= "Animals";
blogLoveItsTwo=6;
blogLoveItsOne = 5;
blogLoveItsThree=10;
blogDate = new Date()
  post= [
    {
      title: 'Trees',
      content: 'nature',
      loveIts: 5,
      created_at: Date,
    },
    {
      title: 'Building',
      content: 'architecture',
      loveIts: 5,
      created_at: Date,
    },
        {
      title: 'Pets',
      content: 'animals',
      loveIts: 5,
      created_at: Date,
    }
  ]
}

