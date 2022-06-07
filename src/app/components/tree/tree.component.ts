import { Component, ElementRef, OnInit } from '@angular/core';
import { data } from 'src/app/models/data';
import { TreeService } from 'src/app/service/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  parent: data[] = [
    // {
    //   title: 'book1',
    //   children: [{ kind: 'sport', count: 5, notes: ['effective', 'useful'] }],
    //   expand: false,
    // },
    // { title: 'book2', children: [{ kind: 'sport', count: 8 }], expand: false },
    // { title: 'book3', children: [{ kind: 'math', count: 10 }], expand: true },
    // { title: 'book4' },
  ];
  color = 'white';

  constructor(private _element: ElementRef, private dataServe: TreeService) {}

  ngOnInit(): void {
    this.dataServe.getAllEvents().subscribe((data) => {
      this.parent = data;
    });
  }
  changeHColor(value: string) {
    this.color = value;
  }
}
