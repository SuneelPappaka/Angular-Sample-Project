export interface UserModel {
    id:number;
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
    phonenumber: string;
    role?: string;
    StudentId?: number;
    WardenId?: number;
}
