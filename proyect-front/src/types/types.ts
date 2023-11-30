export interface AuthResponse{
    body:{
        user: User;
    };
}

export interface AuthResponseError {
    body:{
        error: string;
    };
}

export interface User{
    username: string;
    password: string;
}