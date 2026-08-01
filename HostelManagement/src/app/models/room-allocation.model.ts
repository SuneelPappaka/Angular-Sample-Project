export interface RoomAllocationModel {
    allocationId: number;
    studentId: number;
    roomId: number;
    allocatedDate: Date;
    vacatedDate?: Date;
    status: string;
}
// ng g interface models/room-allocation.model