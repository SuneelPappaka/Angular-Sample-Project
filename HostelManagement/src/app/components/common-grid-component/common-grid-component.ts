import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LoaderService } from '../../Servies/loader.service.ts';
import { time } from 'console';

@Component({
  selector: 'app-common-grid-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './common-grid-component.html',
  styleUrl: './common-grid-component.css',
  standalone: true
})
export class CommonGridComponent {
  @Input() GridData: any[] = [];
  @Input() displayedColumns: any[] = [];
  @Input() displayedActions: any[] = [];
  @Input() hideColumns: string[] = [];
  @Output() commonAction = new EventEmitter<{ code: string, data: any }>();
  @Output() Pagechange = new EventEmitter<{ pageNumber : number ,totalPages:number}>(); 
  @Output() PageSizechange = new EventEmitter<{ pageSize: number }>();
  pageNumber = 1;
  pageSize = 2;
  @Input() totalCount = 0;
  totalPages = 0;
  pageSizeOptions = [1,2,3,10, 25, 50, 100];
  Math = Math;
  selectionOption!: "";

  /**
   *
   */
  constructor(private loaderService: LoaderService) {
    
  }

  onCommonActionChange(actioncode: string, row: any) {
    this.commonAction.emit({ code: actioncode, data: row });
  }
  exportExcel(): void {
    this.loaderService.show();
    const table = document.getElementById('Commongrid');

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
    this.loaderService.hide();
  }
  async exportTableToPdf(): Promise<void> {
    this.loaderService.show();
    const table = document.getElementById('Commongrid');

    if (!table) {
      return;
    }
    const columnsToRemove = [6];
    // Clone table so original UI is not affected
    const clonedTable = table.cloneNode(true) as HTMLElement;

    // Remove 3rd column (index = 2)
    clonedTable.querySelectorAll('tr').forEach(row => {
      const cells = row.children;

      columnsToRemove
        .sort((a, b) => b - a)
        .forEach(index => {
          cells[index]?.remove();
        });
    });

    // Position clone outside visible area
    clonedTable.style.position = 'absolute';
    clonedTable.style.left = '-99999px';
    clonedTable.style.top = '0';

    document.body.appendChild(clonedTable);

    try {
      const canvas = await html2canvas(clonedTable, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 10;
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(
        imgData,
        'PNG',
        margin,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight - margin * 2;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + margin;

        pdf.addPage();

        pdf.addImage(
          imgData,
          'PNG',
          margin,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pageHeight - margin * 2;
      }

      pdf.save('CommonGrid.pdf');
      this.loaderService.hide();
    } finally {
      // Remove cloned table
      clonedTable.remove();
      this.loaderService.hide();
    }
  }

  changePage(page: number) {
    //this.Pagechange.emit({ page: this.pageNumber, totalPages: this.totalPages });
    this.pageNumber=page;
    this.Pagechange.emit({ pageNumber : page, totalPages: this.totalCount });
  }
    
  

  changePageSize() {
    //this.PageSizechange.emit({ pageNumber: this.pageNumber });
    this.pageNumber=this.pageSize;
    this.PageSizechange.emit({ pageSize: this.pageSize });
  }
}
