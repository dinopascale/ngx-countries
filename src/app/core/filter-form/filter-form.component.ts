import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { faGlobe, faGlobeAfrica, faGlobeAmericas, faGlobeAsia, faGlobeEurope, faKiwiBird } from '@fortawesome/free-solid-svg-icons';

import { Region } from 'src/app/interfaces/countries.interface';


@Component({
  selector: 'cnt-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit, OnDestroy {

  filterForm: FormGroup;

  private sub: Subscription;

  globalIcon = faGlobe;
  africaIcon = faGlobeAfrica;
  americasIcon = faGlobeAmericas;
  asiaIcon = faGlobeAsia;
  europeIcon = faGlobeEurope;
  oceaniaIcon = faKiwiBird;

  @Output() submitted: EventEmitter<{ region: Region }> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      region: this.formBuilder.control('')
    });

    this.sub = this.countriesService.filterCriteria
      .subscribe((region) => this.filterForm.patchValue({ region }));
  }

  ngOnDestroy(): void {
    !!this.sub && this.sub.unsubscribe();
  }

  onSubmit(): void {
    this.submitted.emit(this.filterForm.value);
  }

}
