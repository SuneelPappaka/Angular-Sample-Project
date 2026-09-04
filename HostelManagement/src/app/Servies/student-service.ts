import { inject, Service } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Service()
export class StudentService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7188/api/Students/';

  // READ - Get all students
  // getStudents(): Observable<Student[]> {
  //   return this.http.get<Student[]>(this.apiUrl);
  // }
 //getStudents(pageNumber: number, pageSize: number): Observable<Student[]> {
  //return this.http.get<Student[]>(
    //`${this.apiUrl}/Students/GetAllStudents?pageNumber=${pageNumber}&pageSize=${pageSize}`
  //);
//}
  getStudents(pageNumber: number, pageSize: number){
   return this.http.get<any>(
     `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`
   );
 }


  // READ - Get student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // CREATE
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}CreateStudents`, student);
  }

  

  // UPDATE
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(
      `${this.apiUrl}/${id}`,
      student
    );
  }

  // DELETE
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
