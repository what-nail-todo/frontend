export class ApiError extends Error {
    code: number;
    info: string;

    constructor(message: string, code: number, info: string) {
        super(message);
        this.name = 'ApiError';
        this.code = code;
        this.info = info;
    }
}
