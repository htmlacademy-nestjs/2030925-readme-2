import { UserRole } from "./user-role.enum";

export interface User {
    id?: string;
    mail: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    posts?: number;
    regDate: Date;
    followers?: number;
    pasHash: string;
    role: UserRole;
}