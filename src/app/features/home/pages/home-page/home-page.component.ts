import { Component } from '@angular/core'
import { ModelInputFormComponent } from '../../components/model-input-form/model-input-form.component'

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [ModelInputFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
