/* BEGIN-SNIPPET input-list */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputListComponent extends Component {
  @tracked items: string[] = [];

  @action
  addItem(value: InputEvent): void {
    if (value.data) {
      this.items = [...this.items, value.data];
    }
  }
}
/* END-SNIPPET */
