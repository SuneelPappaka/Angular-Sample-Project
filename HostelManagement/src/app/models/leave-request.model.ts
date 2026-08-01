export interface LeaveRequestModel {
    leaveId: number;
    studentId: number;
    fromDate: Date;
    toDate: Date;
    reason: string;
    status: string;
    appliedDate: Date;
}
// ng g interface models/user.model