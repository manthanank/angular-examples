import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClassDirective } from './custom-directives/ng-class.directive';
import { NgForDirective } from './custom-directives/ng-for.directive';
import { NgIfDirective } from './custom-directives/ng-if.directive';
import { NgModelDirective } from './custom-directives/ng-model.directive';
import { NgStyleDirective } from './custom-directives/ng-style.directive';
import { NgSwitchCaseDirective } from './custom-directives/ng-switch-case.directive';
import { NgSwitchDefaultDirective } from './custom-directives/ng-switch-default.directive';
import { NgSwitchDirective } from './custom-directives/ng-switch.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgClassDirective,
    NgStyleDirective,
    NgModelDirective,
    NgIfDirective,
    NgForDirective,
    NgSwitchDirective,
    NgSwitchCaseDirective,
    NgSwitchDefaultDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
