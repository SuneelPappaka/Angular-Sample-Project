import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-common-grid-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './common-grid-component.html',
  styleUrl: './common-grid-component.css',
  standalone: true
})
export class CommonGridComponent {
@Input() GridData:any[]=[];
@Input() displayedColumns:any[]=[];
@Input() displayedActions:any[]=[];
@Input() hideColumns:string[]=[];
currentPage = 1;
pageSize = 1;
Math = Math;

get totalPages(): number {
  return Math.ceil(this.GridData.length / this.pageSize);
}

get paginatedGridData(): any[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;

  return this.GridData.slice(
    startIndex,
    startIndex + this.pageSize
  );
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}

onPageSizeChange(): void {
  this.currentPage = 1;
}
onActionChange(actioncode:string,row:any){
alert(actioncode);
}
exportExcel(): void {const table = document.getElementById('Commongrid');

if (!table) {
  return;
}

const worksheet = XLSX.utils.table_to_sheet(table);
const range = XLSX.utils.decode_range(worksheet['!ref']!);

// Remove last column
for (let row = range.s.r; row <= range.e.r; row++) {
  const cell = XLSX.utils.encode_cell({
    r: row,
    c: range.e.c
  });

  delete worksheet[cell];
}

range.e.c--;
worksheet['!ref'] = XLSX.utils.encode_range(range);

const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

XLSX.writeFile(workbook, 'CommonGrid.xlsx');

}
}
