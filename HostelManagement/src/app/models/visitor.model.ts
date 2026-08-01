export interface VisitorModel {
    visitorId: number;
  studentId: number;
  visitorName: string;
  relation: string;
  mobile: string;
  visitDate: Date;
  checkIn: string;
  checkOut?: string;
}
// ng g interface models/leave-request.model