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
  pageNumber = 1;
pageSize = 2;
totalCount = 0;

pageSizeOptions = [1,2,3,10, 25, 50, 100];
  constructor(private dialog: MatDialog) {
  }

  students: Student[] = [];
  GridData: any[] = [];

  displayedColumns: string[] = [];
  hideColumns: string[] = ['studentId', 'admissionDate', 'dateOfBirth', 'roomId', 'yearOfStudy', 'address', 'course'];
  displayedActions: any[] = [
    { ActionName: "Edit", ActionCode: "E" },
    { ActionName: "Delete", ActionCode: "D" }
  ]
  isEditMode = false;
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
  this.studentService.getStudents(this.pageNumber, this.pageSize).subscribe({
    next: (response: any) => {

      this.students = response.data;
      this.GridData = response.data;

      this.totalCount = response.totalCount;

      this.displayedColumns =
        response.data.length > 0
          ? Object.keys(response.data[0])
          : [];

      console.log(response);
    },

    error: (error: any) => {
      console.error('Error loading students', error);

      this.students = [];
      this.GridData = [];
      this.totalCount = 0;
    }
  });
}
  AddOrUpdateStudentComponent(code: string, Addorupdateordelete: any, title: string) {
    const dialogRef = this.dialog.open(AddStudent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '90vh',
      maxHeight: '95vh',
      panelClass: 'student-dialog',
      data: {
        title: title,
        StudentDataEventData: Addorupdateordelete
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // refresh student list
        this.loadStudents();
      }
    });
  }

  onCommonActionChange(code: string, editData: any) {
    if (code === 'E') {
      this.AddOrUpdateStudentComponent(code, editData, 'Edit Student Details');
    } else if (code === 'D') {
      this.AddOrUpdateStudentComponent(code, editData, 'Delete Student Details');
    } else {
      this.AddOrUpdateStudentComponent("", {}, 'Add Student Details');
    }
  }
  onchangePage(pageNumber : number,totalPages: number): void {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }

    this.pageNumber = pageNumber;
    
    this.loadStudents();
  }

  onchangePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.loadStudents();
  }
  onSearchChange(searchValue: string) {
    if (!searchValue) {
      this.GridData = this.students; // Reset to original data if search is empty
    } else {
      const lowerSearchValue = searchValue.toLowerCase();
      this.GridData = this.students.filter(student =>
        Object.values(student).some(value =>
          value && value.toString().toLowerCase().includes(lowerSearchValue)
        )
      );
    }
  }
  onStatusChange(statusValue: string) {
    if (!statusValue || statusValue === 'All Status') {
      this.GridData = this.students; // Reset to original data if search is empty
    } else {
      const lowerStatusValue = statusValue.toLowerCase();
      this.GridData = this.students.filter(student =>
        student.status && student.status.toString().toLowerCase() === lowerStatusValue
      );
    }
  }
  onStatusYearChange(yearValue: string) {
    if (!yearValue || yearValue === '0') {
      this.GridData = this.students; // Reset to original data if search is empty
    } else {
      const lowerYearValue = yearValue.toLowerCase();
      this.GridData = this.students.filter(student =>
        student.yearOfStudy && student.yearOfStudy.toString().toLowerCase() === lowerYearValue
      );
    }
  }
}
