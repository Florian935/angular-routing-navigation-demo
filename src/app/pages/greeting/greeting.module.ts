import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingRoutingModule } from './greeting-routing.module';
import { GreetingComponent } from './greeting/greeting.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [GreetingComponent],
    imports: [CommonModule, GreetingRoutingModule],
})
export class GreetingModule {}
