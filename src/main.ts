import { DatabaseService } from "./services/database.service";

function main(){
    const database = new DatabaseService('myuri');
    if(database.connect())
        console.log('Connected!');
}

main();