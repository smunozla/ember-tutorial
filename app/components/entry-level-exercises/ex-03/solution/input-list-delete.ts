/* BEGIN-SNIPPET input-list-delete */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputListDeleteComponent extends Component {
  @tracked items: string[] = [];
  @tracked valueToDelete: string = '';

  @action
  addItem(value: InputEvent): void {
    if (value.data) {
      this.items = [...this.items, value.data];
    }
  }

  @action
  updateValueToDelete(value: InputEvent): void {
    if (value.data) {
      this.valueToDelete = value.data;
    }
  }

  @action
  deleteItem(itemToDelete: string): void {
    this.items = this.items.filter((item) => item !== itemToDelete);
  }
}
/* END-SNIPPET */
