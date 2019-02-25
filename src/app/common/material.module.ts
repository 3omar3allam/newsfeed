import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
  exports:[
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class MaterialModule {

}
