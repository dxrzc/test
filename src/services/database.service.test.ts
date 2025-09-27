import { DatabaseService } from './database.service';

describe('Database service', () => {
    test('uri getter should return the provided uri', async () => {
        const uri = 'database uri';
        const db = new DatabaseService(uri);
        expect(db.uri).toBe(uri);
    });
});
