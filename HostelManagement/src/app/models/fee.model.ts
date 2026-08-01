export interface Fee {
    feeId: number;
  studentId: number;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  paymentMode: string;
  status: string;
}
// ng g interface models/attendance.model