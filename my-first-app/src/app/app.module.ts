import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EvenOddGameComponent } from './even-odd-game/even-odd-game.component';
import { OddComponent } from './even-odd-game/odd/odd.component';
import { EvenComponent } from './even-odd-game/even/even.component';
import { ControlComponent } from './even-odd-game/control/control.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent, AssignmentComponent, EvenOddGameComponent, OddComponent, EvenComponent, ControlComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
