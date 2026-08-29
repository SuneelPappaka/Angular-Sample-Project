import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../models/student.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../Servies/student-service';
import Swal from 'sweetalert2';
import { LoaderService } from '../../../Servies/loader.service.ts';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
  standalone: true
})
export class AddStudent {
  student: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: new Date(),
    mobile: '',
    email: '',
    address: '',
    course: '',
    yearOfStudy: 0,
    admissionDate: new Date(),
    roomId: undefined,
    status: 'Active'
  };
  today = new Date().toISOString().split('T')[0];
 
  /**
   *
   */
  constructor(private studentService: StudentService, private loaderService: LoaderService) {


  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    // Call your API/service here
    if (form.valid) {
      this.loaderService.show();
      this.studentService.createStudent(this.student).subscribe({
        next: (data) => {
          this.loaderService.hide();
      
          Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: JSON.stringify(data),
            confirmButtonText: 'OK'
          })
          // You can emit an event or call a service to refresh the student list
        },
        error: (error) => {
          console.log('Status:', error.status);
          console.log('Full error:', error);
          console.log('Validation errors:', error.error?.errors);

          Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: "Status : "+ error.status + " And Full error:"+ error + " And Validation errors:"+ error.error?.errors ,
          confirmButtonText: 'OK'
        });
        }
      });
      // You can emit an event or call a service to save the student data
    } else {
      Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Form is invalid, please check the fields',
          confirmButtonText: 'OK'
        });
    }
  }
}
