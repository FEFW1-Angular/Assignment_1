export interface IUser
{
    _id?: number;
    name: string;
    password: string;
    confirmPassword: string,
    email: string;
    role?:string
}

export interface ISigninUser{
    email: string;
    password: string;
}