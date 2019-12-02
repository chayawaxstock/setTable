import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
  editTablePlate()
  {
    this.route.navigate(['editTableBigPlate']);
  }
}
