import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  submitForm: FormGroup;
  statusArr = ["Stable", "Critical", "Finished"];

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.ownProjectNameValidator,
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.ownAsyncEmailValidator
      ),
      projectStatus: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.submitForm);
  }

  ownProjectNameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { isNameForbidden: true };
    } else {
      return null;
    }
  }

  ownAsyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.indexOf("@test.com") !== -1) {
          resolve({ isEmailForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
