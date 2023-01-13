import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  topics = ['angular', 'React', 'Vue'];

  // creating a property called userModel
  // this is how the data is passed
  userModel = new User('Rob', 'rob@test.com', 5555555555, '', 'morning', true)

}
