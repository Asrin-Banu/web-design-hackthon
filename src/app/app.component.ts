import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackathon';
  casualShoes = [{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"}]
  formalShoes = [{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"}]
}
