export interface UserModel {
    userId: number;
    username: string;
    password: string;
    role: string;
    studentId?: number;
    wardenId?: number;
}
