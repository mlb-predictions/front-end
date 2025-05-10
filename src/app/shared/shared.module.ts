import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextBoxComponent } from './components/text-box/text-box.component'

@NgModule({
  declarations: [TextBoxComponent],
  exports: [TextBoxComponent],
  imports: [CommonModule],
})
export class SharedModule {}
