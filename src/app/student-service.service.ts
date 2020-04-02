import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { IStudent } from './model/IStudent';
import { IIspit } from './model/IIspit';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  _url = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}


  // * --------------- STUDENTS --------------- * //
  // * Get all 
  getAllStudent(): Observable<IStudent[]>{
    return this._http.get<IStudent[]>(this._url + 'students')
                      .pipe(
                        retry(3),
                        catchError(this.handleError)
                      );
  }

  // * Create student
  createNewStudent(studentData){
    return this._http.post((this._url + 'students'), studentData)
  }

  // * Delete student
  deleteStudent(id){
    return this._http.delete(this._url + 'students/' + id)
  }

  // * Change student
  change(newStudentData){
    return this._http.put((this._url + 'students'), newStudentData)
  }

  // * --------------- ISPITI --------------- * //
  // * Get all
  getAllExams(): Observable<IIspit[]>{
    return this._http.get<IIspit[]>(this._url + 'ispiti')
                      .pipe(
                        retry(3),
                        catchError(this.handleError)
                      );
  }

  // * Delete exam
  deleteExam(id){
    return this._http.delete(this._url + 'ispiti/' + id)
  }

  // * Create exam
  createNewExam(examData):Observable<IIspit[]>{
    return this._http.post<IIspit[]>((this._url + 'ispiti'), examData)
  }

  // * ---------------------- PRIJAVLJENI ISPITI ------------------ *
  getPrijavljeniIspiti(){
    return this._http.get(this._url + 'prijavljeniIspiti')
  }

  // ! Handling errros
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
