import { Component } from '@angular/core';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Systems',
    children: [{name: 'Windows'}, {name: 'Linux'}, {name: 'Android'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
    selector: 'app-test-view',
    templateUrl: './test-view.component.html',
    styleUrl: './test-view.component.scss',
    standalone: false
})
export class TestViewComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
