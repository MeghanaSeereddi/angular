import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from '../ellipsis.pipe';
import { CounterComponent } from '../counter/counter.component';



@NgModule({
  declarations: [
    EllipsisPipe,
    CounterComponent],
  imports: [
    CommonModule
  ]
})
export class mymoduleModule { }