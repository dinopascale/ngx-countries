import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ToolbarAction {
  icon: IconDefinition;
  label: string;
  eventSign: 'home' | 'filter' | 'sort';
  active?: boolean;
}
