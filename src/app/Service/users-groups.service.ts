import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersGroupsService {
  baseUrl: string = 'https://localhost:44337/api/Group/CreateGroup'; 

  constructor(private http: HttpClient) { }

  createGroup(group: any) {
    return this.http.post(this.baseUrl, group);
  }
}
