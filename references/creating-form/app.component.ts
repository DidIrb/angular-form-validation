import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  // creating a new property called topic to feed it into select and bindi t to html
  topics = ['angular', 'React', 'Vue'];
}
