import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FormsModule,
    CommonModule
    ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
