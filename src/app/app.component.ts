import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaCardComponent } from "./components/da-card/da-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DaCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
