
export class DatabaseService {
    constructor(private readonly _uri: string) {}

    get uri(){
        return this._uri;
    }

    connect() {
        return true;
    }
}