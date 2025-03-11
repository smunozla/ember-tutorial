/* BEGIN-SNIPPET item-list */
import Component from '@glimmer/component';

export default class ItemListComponent extends Component {
  items: string[] = [
    { name: 'Sandra', surname: 'Muñoz' },
    { name: 'Megan' },
    { name: 'Tom' },
    { name: 'Joe', surname: 'Doe' },
    { name: 'Carl' },
  ];
}
/* END-SNIPPET */
