import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-away',
  templateUrl: './away.component.html',
  styleUrls: ['./away.component.scss']
})
export class AwayComponent implements OnInit {

  constructor(private readonly translate: TranslateService) {
    this.translate = translate;
    // // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en_US');
    //
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en_US');
  }
  ngOnInit() {
  }

}
