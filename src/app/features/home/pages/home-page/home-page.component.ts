import { Component } from '@angular/core'
import { TextBoxComponent } from '../../../../shared/components/text-box/text-box.component'

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [TextBoxComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
