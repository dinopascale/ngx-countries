import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ToolbarAction {
  icon: IconDefinition;
  label: string;
  eventSign: string;
  active?: boolean;
}
