import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { People } from "./interfaces/people.interface";


interface PeopleApiResponse {
    results: People[];
}
  

@Injectable({ providedIn: 'root' })
export class PeopleService{

    constructor(private readonly _httpClient: HttpClient){}

    private apiUrl: string = 'https://swapi.dev/api/people/';

    getAllPeople(): Observable<People[]> {
        return this._httpClient.get<PeopleApiResponse>(`${this.apiUrl}`).pipe(
            map(
                response => response.results
            )
        )
    }

}