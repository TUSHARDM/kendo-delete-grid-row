import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
       <kendo-grid [data]="gridData" (remove)="removeHandler($event)">
        <kendo-grid-column field="ProductID" title="Product ID"></kendo-grid-column>
       <kendo-grid-column field="ProductName" title="Product Name"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" editor="numeric" title="Price"></kendo-grid-column>
       <kendo-grid-command-column title="command">
    <ng-template kendoGridCellTemplate>
      <button kendoGridRemoveCommand>Remove row</button>
    </ng-template>
  </kendo-grid-command-column>
       </kendo-grid>
   `
})
export class AppComponent {
  public gridData: any[] = products;
  public removeHandler(dataItem) {
    console.log(dataItem.rowIndex);
    this.gridData.splice(dataItem.rowIndex, 1);
  }
}


const products = [{
  "ProductID": 1,
  "ProductName": "Chai",
  "UnitPrice": 18.0000,
  "Discontinued": true
}, {
  "ProductID": 2,
  "ProductName": "Chang",
  "UnitPrice": 19.0000,
  "Discontinued": false
},
{
  "ProductID": 3,
  "ProductName": "Chang",
  "UnitPrice": 19.0000,
  "Discontinued": false
},
{
  "ProductID": 4,
  "ProductName": "Chang",
  "UnitPrice": 19.0000,
  "Discontinued": false
}
];
