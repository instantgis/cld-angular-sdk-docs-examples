import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideosComponent} from './videos/videos.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'images', component: ImagesComponent },
  { path: '', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
