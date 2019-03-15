import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AwayComponent} from '../away/away.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HttpClient, HttpClientModule} from '@angular/common/http';

export function lazyCreateTranslateLoader(http: HttpClient) {
  debugger;
  return new TranslateHttpLoader(http, './assets/i18n/lazy/', '.json');
}

const myRoutes: Routes = [{path: '', component: AwayComponent}
];
@NgModule({
  declarations: [
    AwayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (lazyCreateTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [RouterModule]
})
export class LazyModule {
  constructor(){
    debugger;
  }
}
