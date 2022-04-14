import { Component, OnInit } from '@angular/core';
import { Opendefects } from 'src/app/service/opendefects';
import { OpendefectsService } from 'src/app/service/opendefects.service';

@Component({
  selector: 'app-opendefects',
  templateUrl: './opendefects.component.html',
  styleUrls: ['./opendefects.component.css']
})
export class OpendefectsComponent implements OnInit {

  dataSource: Opendefects[];
  displayedColumns = ['openid','teamId','open','critical','high','medium','low'];
  constructor(private service : OpendefectsService) { 
    this.dataSource=[];
  }
  
  ngOnInit(): void {
    this.service.findOpenDefects().subscribe({
      next:(defect)=>{
        this.dataSource=defect;
        console.log(this.dataSource);
      }
    });
  }

}
