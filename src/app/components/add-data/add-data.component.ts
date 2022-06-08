import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { data } from '../../models/data';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  newData: data = { title: '', children: [], expand: false };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  newDataValid = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  subData = this.newDataValid.valueChanges.subscribe((data) => {
    console.log(data);
  });
}
