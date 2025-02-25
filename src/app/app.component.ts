import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from 'ngx-highlightjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Highlight],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docs';
  code = `
    export class AppBuilder{
    }
  `
}
