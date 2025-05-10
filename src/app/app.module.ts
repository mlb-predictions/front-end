import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeModule } from './features/home/home.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, AppRoutingModule],
})
export class AppModule {}
