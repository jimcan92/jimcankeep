export class FirestoreResult<T> {
    value?: T;
    error?: string;
    hasError: boolean;

    constructor({ value, error }: { value?: T, error?: string }) {
        this.value = value;
        this.error = error;
        this.hasError = !!error;
    }
}
