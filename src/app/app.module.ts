import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStyleDirective } from './shared/custom/custom-style.directive';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  declarations: [AppComponent, CustomStyleDirective, TreeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
