import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Student } from '../../../models/student.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../Servies/student-service';
import Swal from 'sweetalert2';
import { LoaderService } from '../../../Servies/loader.service.ts';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
  standalone: true
})
export class AddStudent {

  @Input() StudentDataEventData: Student | null = null;
titlescreen="Add Student Details";
btnsaveorupdatetext="Add Student";
  student: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    mobile: '',
    email: '',
    address: '',
    course: '',
    yearOfStudy: 0,
    admissionDate: '',
    roomId: undefined,
    status: 'Active'
  };
  today = new Date().toISOString().split('T')[0];
  genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' }
];
 numberOfYearsOptions = [
  { value: 1, label: 'Year 1' },
  { value: 2, label: 'Year 2' },
  { value: 3, label: 'Year 3' },
  { value: 4, label: 'Year 4' }
];

 
  /**
   *
   */
  constructor(private studentService: StudentService, private loaderService: LoaderService,
     @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddStudent>
  ) {
this.titlescreen = data.title;
this.student = data.StudentDataEventData || this.student;
  this.student.dateOfBirth = this.formatDate(this.student.dateOfBirth);
  this.student.admissionDate = this.formatDate(this.student.admissionDate);
this.btnsaveorupdatetext = this.student.studentId ? 'Update Student' : 'Add Student';
  console.log('Data received from parent:', data);
  }
  
formatDate(date: string): string {
  return date ? date.substring(0, 10) : '';
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
            title: this.student.studentId ? 'Update Successful' : 'Save Successful',
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
       // Close the dialog and pass true to indicate success
      
      });
       this.dialogRef.close(true); // You can emit an event or call a service to save the student data
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
