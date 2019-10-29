import { Component, OnInit } from '@angular/core';
import { ManegerService } from '../SHerd/maneger.service';

@Component({
  selector: 'app-annual-revenue-diagram',
  templateUrl: './annual-revenue-diagram.component.html',
  styleUrls: ['./annual-revenue-diagram.component.scss']
})
export class AnnualRevenueDiagramComponent implements OnInit {
  ngOnInit() {
    this.managmenService.getDiagramd().subscribe(res=>{
      var num=0;
      this.dataSource['data'].forEach(element => {
        element['value']=res[num];
        num++;
      });
    })
   }
   dataSource: Object;
     chartConfig: Object;
   constructor(public managmenService:ManegerService) { 
     this.chartConfig = {
       width: '700',
       height: '400',
       type: 'column2d',
       dataFormat: 'json',
   };
 
   this.dataSource = {
       "chart": {
         "caption": "הכנסות לשנת 2019",
         "subCaption": "In MMbbl = One Million barrels",
         "xAxisName": "חודשים",
         "yAxisName": "הכנסות",
         "numberSuffix": "ש.ח",
         "theme": "fusion",
       },
       "data": [{
         "label": "ינואר",
       }, {
         "label": "פבואר",
       }, {
         "label": "מרץ",
       }, {
         "label": "אפריל",
       }, {
         "label": "מאי",
       }, {
         "label": "יוני",
       }, {
         "label": "יולי",
       }, {
         "label": "אוגוסט",
       } , {
         "label": "ספטמבר",
       }, {
         "label": "אוקטובר",
       }, {
         "label": "נובמבר",
       }, {
         "label": "דצמבר",
       },
     ]
     };
 
   }
 }
