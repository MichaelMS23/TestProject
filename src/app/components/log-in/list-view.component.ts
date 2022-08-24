import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { first } from 'rxjs/operators';
import paginate from 'node_modules/jw-paginate';

@Component({
  selector: 'app-myproject-component',
  templateUrl: 'myproject.component.html',
})
export class MyprojectComponent implements OnInit, OnChanges{
  pageOfItems: Array<any>;
  projects = [];
  pager: any = {};
  @Output() changePage = new EventEmitter<any>(true);

  initialPage = 1;
  itemsPerPage = 5;
  maxSize = 5;

  constructor() {}

  ngOnInit() {

  }

  setPage(page: number) {
    console.log('a');
    // get new pager object for specified page
    this.pager = paginate(this.projects.length, page, this.itemsPerPage, this.maxSize);

    // get new page of items from items array
    this.pageOfItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(this.pageOfItems);
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log(pageOfItems);
    console.log('a');
    this.pageOfItems = pageOfItems;
  }
}
