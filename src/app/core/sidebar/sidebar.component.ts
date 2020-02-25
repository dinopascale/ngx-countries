import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cnt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent<K> implements OnInit {

  @Input() position: 'left' | 'right' | 'bottom';
  @Input() outOfView = false;
  @Input() template: TemplateRef<K>;
  @Output() closing: EventEmitter<void> = new EventEmitter<void>();

  closeIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
