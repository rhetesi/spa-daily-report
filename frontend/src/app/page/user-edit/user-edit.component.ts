import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { SelectField } from 'src/app/areus-form/model/select-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap(params => {
      if (params.id === '') {
        return of(new User())
      }
      return this.userService.get(params.id);
    })
  );
  user: User = new User();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.setForm();
        this.showForm = true;
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.user._id }),
      new InputField({ key: 'lastName', label: 'Vezetéknév', type: 'text', value: this.user.lastName as string,  validators: [Validators.required, Validators.pattern(/^[A-Ü][a-ü]{0,19}/)], errorMessage: 'Adjon meg egy 3-20 karakter közötti vezetéknevet!' }),
      new InputField({ key: 'firstName', label: 'Keresztnév', type: 'text', value: this.user.firstName as string }),
      new InputField({ key: 'email', label: 'Email', type: 'text', value: this.user.email as string }),
      new InputField({ key: 'address', label: 'Cím', type: 'text', value: this.user.address as string }),
      new InputField({ key: 'role', label: 'Jogosultság', type: 'number', value: this.user.role as unknown as number }),
      //new SelectField({key: 'active', label: 'Aktív?', type: 'boolean', value: this.user.active}),
      new InputField({key: 'password', label: 'Jelszó', type: 'text', value: this.user.password as string}),
    ]
  }

  onSave(user: User): void {
    if (user._id === null) {
      this.userService.create(user).subscribe(
        () => this.router.navigate(['/', 'users'])
      );
    } else {
      this.userService.update(user).subscribe(
      user => this.router.navigate(['/', 'users'])
      );
    }
  }

}
