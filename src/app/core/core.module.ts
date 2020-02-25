import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SortFormComponent } from './sort-form/sort-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './filter-form/filter-form.component';

@NgModule({
  declarations: [SidebarComponent, SortFormComponent, FilterFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SidebarComponent, SortFormComponent, FilterFormComponent]
})
export class CoreModule { }
