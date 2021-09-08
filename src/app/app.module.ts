import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './pages/popup/compose-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsModule } from './pages/skills/skills.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
    declarations: [AppComponent, ComposeMessageComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        SkillsModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
