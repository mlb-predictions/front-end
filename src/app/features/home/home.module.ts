import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { HomeRoutingModule } from './home-routing.module'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule],
})
export class HomeModule {}
