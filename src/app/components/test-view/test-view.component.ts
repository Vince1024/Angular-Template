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
    name: 'Versions',
    children: [
      {
        name: 'Release',
        children: [{name: '1.0.0'}, {name: '1.0.1'}],
      },
      {
        name: 'Qa',
        children: [{name: '1.0.2'}, {name: '1.0.3'}],
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
