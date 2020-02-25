import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CountriesService } from 'src/app/services/countries.service';
import { Sorting, Orders, SortCriteria } from 'src/app/interfaces/countries.interface';

@Component({
  selector: 'cnt-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortFormComponent implements OnInit, OnDestroy {

  sortingForm: FormGroup;

  private sub: Subscription;

  @Output() submitted: EventEmitter<SortCriteria> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private countriesService: CountriesService) { }

  ngOnInit(): void {

    this.sortingForm = this.formBuilder.group({
      type: this.formBuilder.control(''),
      order: this.formBuilder.control('')
    });

    this.sub = this.countriesService.sortingCriteria
      .subscribe(({ type, order }) => this.sortingForm.patchValue({ type, order }));
  }

  ngOnDestroy(): void {
    !!this.sub && this.sub.unsubscribe();
  }

  onResetForm(): void {
    this.sortingForm.patchValue({ type: 'name', order: 'ASC' });
  }

  onSubmit(): void {
    this.submitted.emit(this.sortingForm.value);
  }

}
