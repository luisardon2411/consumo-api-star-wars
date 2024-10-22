import { Component, OnInit } from '@angular/core';
import { People } from './interfaces/people.interface';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {

  public peopleList!: People[];


  constructor( private readonly _peopleService: PeopleService ){}
  ngOnInit(): void {
    this.getAllPeople();
  }



  getAllPeople(){
    this._peopleService.getAllPeople().subscribe(
      {
        next: (people) => {
          this.peopleList = people
        },
        complete: () =>{},
        error: (error) => {}
      }
    )
  }


  

}
