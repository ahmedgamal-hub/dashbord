import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-cards',
  templateUrl: './tabs-cards.component.html',
  styleUrls: ['./tabs-cards.component.scss']
})
export class TabsCardsComponent implements OnInit {
  check:boolean=false;
  data=[
    {
      id:1,
      stat:true,
      check:false,
    },
    {
      id:2,
      stat:true,
      check:false,
    },
    {
      id:3,
      stat:false,
      check:false,
      
    },
    {
      id:4,
      stat:false,
      check:false,
      
    },
    {
      id:5,
      stat:false,
      check:false,
      
    },
  ]
  selectedCategories: any[] = [];

  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' },
      { name: 'Accounting', key: 'd' },
      { name: 'Marketing', key: 'w' },
      { name: 'Production', key: 'q' },
      { name: 'Research', key: 'j' },
  ];
  
  

  
    
  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1,3);
    // this.data=[
    //   {
    //     id:1,
    //     stat:true,
    //     check:false,
    //   },
    //   {
    //     id:2,
    //     stat:true,
    //     check:false,
    //   },
    //   {
    //     id:3,
    //     stat:false,
    //     check:false,
        
    //   },
    //   {
    //     id:4,
    //     stat:false,
    //     check:false,
        
    //   },
    //   {
    //     id:5,
    //     stat:false,
    //     check:false,
        
    //   },
    // ]
  }
  togelChek(id:any){
    console.log("tttttttttttttttt");
    
    this.data.forEach((element:any) => {
      console.log( ">>>>>>>>>"+ element);
      
      if(id==element.id){
        if(element.check == false){
          element.check=true;
        }else{
          element.check=false;
        }
        
      }
      
    });
    // if(id==this.data)
    // if(this.check==false){
    //   this.check=true;
    // }else{
    //   this.check=false;
    // }
  }
}
