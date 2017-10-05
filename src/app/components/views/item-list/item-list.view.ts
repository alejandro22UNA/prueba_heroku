import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';




@Component({
  selector: 'item-list',
  templateUrl: 'item-list.view.html'
})
export class ItemListComponent implements OnDestroy, OnInit  {
public data;
public nav:any;
errorMessage: string;
group:string;
total : number;
private value:any = {};

public constructor(
  private http: Http,
  route: ActivatedRoute) {
  this.nav = document.querySelector('nav.navbar');
  this.group = route.snapshot.params['group'] ;

   //this.sharedService.stream$.subscribe(this.receiveMessage.bind(this));
}

public ngOnInit():any {
  //this.nav.className += " white-bg";
  console.log(this.data);
  this.getRegisters();
}

public ngOnDestroy():any {
  //this.nav.classList.remove("white-bg");
}

  getRegisters() {
      this.http.get("../assets/items.json")
              .subscribe((data)=> {
                  setTimeout(()=> {
                      this.data = data.json();
                      console.log(this.data);
                  }, 1000);
              });


  }

}
