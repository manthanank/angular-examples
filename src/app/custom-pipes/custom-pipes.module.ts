import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from './custom-date.pipe';
import { CustomUppercasePipe } from './custom-uppercase.pipe';
import { CustomLowercasePipe } from './custom-lowercase.pipe';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { CustomPercentPipe } from './custom-percent.pipe';
import { CustomSlicePipe } from './custom-slice.pipe';
import { CustomNumberPipe } from './custom-number.pipe';
import { CustomJsonPipe } from './custom-json.pipe';
import { CustomAsyncPipe } from './custom-async.pipe';

@NgModule({
  declarations: [
    CustomDatePipe,
    CustomUppercasePipe,
    CustomLowercasePipe,
    CustomCurrencyPipe,
    CustomPercentPipe,
    CustomSlicePipe,
    CustomNumberPipe,
    CustomJsonPipe,
    CustomAsyncPipe
  ],
  imports: [CommonModule],
  exports: [
    CustomDatePipe,
    CustomUppercasePipe,
    CustomLowercasePipe,
    CustomCurrencyPipe,
    CustomPercentPipe,
    CustomSlicePipe,
    CustomNumberPipe,
    CustomJsonPipe,
    CustomAsyncPipe
  ]
})
export class CustomPipesModule {}
