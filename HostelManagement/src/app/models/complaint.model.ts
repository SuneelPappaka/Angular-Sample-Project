export interface Complaint {
complaintId: number;
  studentId: number;
  complaintText: string;
  complaintDate: Date;
  status: string;
  resolvedDate?: Date;
}
// ng g interface models/visitor.model