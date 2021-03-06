import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ToolbarAction } from 'src/app/interfaces/toolbar.interface';

@Component({
  selector: 'cnt-mobile-toolbar',
  template: `
    <div class="toolbar no-desktop">
      <ng-container *ngFor="let action of actions">
        <div class="__action"
          (click)="actionClicked.emit(action.eventSign)"
          [ngClass]="action.label.toLowerCase() === 'home' ? 'primary-fg' : 'grey-dark-fg'"
        >
          <fa-icon class="icon" [icon]="action.icon"></fa-icon>
          <span class="label" [class.active]="action.active">{{action.label}}</span>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./mobile-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileToolbarComponent implements OnInit {

  @Input() actions: ToolbarAction[];
  @Output() actionClicked: EventEmitter<'home' | 'filter' | 'sort'> = new EventEmitter<'home' | 'filter' | 'sort'>();

  constructor() { }

  ngOnInit(): void {
  }

}
