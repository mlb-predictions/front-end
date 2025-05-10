import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  standalone: true,
  selector: 'app-text-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
})
export class TextBoxComponent {
  value = ''
}
