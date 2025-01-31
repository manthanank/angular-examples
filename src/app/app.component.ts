import { Component } from '@angular/core';
import { EmulatedComponent } from "./components/emulated/emulated.component";
import { ShadowDomComponent } from "./components/shadow-dom/shadow-dom.component";
import { NoneComponent } from "./components/none/none.component";

@Component({
  selector: 'app-root',
  imports: [EmulatedComponent, ShadowDomComponent, NoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-examples';
}
