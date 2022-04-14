import { Component, OnInit } from '@angular/core';
import { Totaldefects } from 'src/app/service/totaldefects';
import { TotaldefectsService } from 'src/app/service/totaldefects.service';

@Component({
  selector: 'app-totaldefects',
  templateUrl: './totaldefects.component.html',
  styleUrls: ['./totaldefects.component.css']
})
export class TotaldefectsComponent implements OnInit {

dataSource : Totaldefects[]; 
displayedColumns = ['defect_id','teamId','newValue','high','medium','low','fixed','inTesting','closed','testFailed','grandTotal'];
  
  constructor(private service: TotaldefectsService) {
    this.dataSource=[];
  
   }
  ngOnInit(): void {
    this.service.findTotalDefects().subscribe({
      next:(defect)=>{
        this.dataSource=defect;
        console.log(this.dataSource);
      }
    });

}
}
// export class UserDataSource extends DataSource<any>{
//   constructor(private service: TotaldefectsService){
//     super();
//   }
//   connect(): Observable<Totaldefects[]>{
//     return this.service.findTotalDefects();
//   }
//   disconnect(){}

// }
   


