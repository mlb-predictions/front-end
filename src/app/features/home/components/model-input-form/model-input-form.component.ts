import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-model-input-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './model-input-form.component.html',
  styleUrl: './model-input-form.component.css',
})
export class ModelInputFormComponent {}
