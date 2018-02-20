import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGeneratorComponent } from './users-generator/users-generator.component';
import { UserViewComponent } from './user-view/user-view.component';
import { DateFormatPipe } from './dateformat.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersGeneratorComponent, UserViewComponent, DateFormatPipe],
  exports: [UsersGeneratorComponent, UserViewComponent]
})
export class UserModule { }
