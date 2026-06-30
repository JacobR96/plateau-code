import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  studentId: string;
  name: string;
  school: string;
  program: string;
  project: string;
  cloudProvider: string;
  graduationYear: number;
  status: string;
}

export interface UserResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl =
    'https://wf5fjzvaizkkirw5rvgfasoofy0amtkh.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.apiUrl);
  }
}