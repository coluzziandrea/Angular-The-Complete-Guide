import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountService } from "./account.service";
import { LoggingService } from "./logging.service";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AccountService, LoggingService], // if we put the service in the providers array of the app.module, we can use the same instance of the service in the other services too.
  bootstrap: [AppComponent],
})
export class AppModule {}
