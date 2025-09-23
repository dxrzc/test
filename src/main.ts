import { DatabaseService } from './services/database.service';

function main(){
    const db = new DatabaseService('random-uri');
    console.log(db.uri);
}

main();