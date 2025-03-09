import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, MainComponent, FooterComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = "Akhlaque";
}
