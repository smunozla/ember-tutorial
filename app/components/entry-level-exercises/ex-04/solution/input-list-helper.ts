/* BEGIN-SNIPPET input-list-helper */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputListComponent extends Component {
  @tracked items: string[] = [];
  @tracked valueToDelete: string = '';

  @action
  addItem(value: InputEvent): string[] {
    if (value.data) {
      const newItem = value.data;
      this.items = [...this.items, newItem];
    }
    return this.items;
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
