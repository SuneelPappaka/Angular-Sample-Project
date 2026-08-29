import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentService } from '../../Servies/student-service';
import { CommonGridComponent } from '../common-grid-component/common-grid-component';
import { AddStudent } from './add-student/add-student';

@Component({
  selector: 'app-students',
  imports: [CommonGridComponent],
  templateUrl: './students.html',
  styleUrl: './students.css',
  standalone: true
})
export class Students {
  private studentService = inject(StudentService);
  /**
   *
   */
  constructor(private dialog: MatDialog) {
  }

  students: Student[] = [];
  GridData: any[] = [];

  displayedColumns: string[] = [];
  hideColumns: string[] = ['studentId','admissionDate','dateOfBirth','roomId','yearOfStudy','address','course'];
  displayedActions:any[] = [
    { ActionName: "--Select--", ActionCode: " " },
    { ActionName: "Edit", ActionCode: "E" },
    { ActionName: "Delete", ActionCode: "D" }
  ]
  isEditMode = false;
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: any[]) => {
        this.students = data;
        this.GridData = data;

      
        this.displayedColumns = data.length > 0 ? Object.keys(data[0]) : [];

        console.log(data);
      },
      error: (error: any) => {
        console.error('Error loading students', error);
      }
    });
  }
  AddOrUpdateStudentComponent() {
    const dialogRef = this.dialog.open(AddStudent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '90vh',
      maxHeight: '95vh',
      panelClass: 'student-dialog',
      data: {
        title: 'Add Student'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // refresh student list
      }
    });
  }




}
