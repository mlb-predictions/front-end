import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.routes'
import { HomePageComponent } from './app/features/home/pages/home-page/home-page.component'

// HomePageComponent is passed in since it is root component
bootstrapApplication(HomePageComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err))
