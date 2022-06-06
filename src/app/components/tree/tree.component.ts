import { Component, ElementRef, OnInit } from '@angular/core';
import { data } from 'src/app/models/data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  parent: string[] = ['Book1', 'Book2'];
  child: data[] = [{ kind: 'sport', count: 5, expand: false }];
  open = false;

  constructor(private _element: ElementRef) {}

  ngOnInit(): void {}

  openTree() {
    this.open = !this.open;
  }
}
