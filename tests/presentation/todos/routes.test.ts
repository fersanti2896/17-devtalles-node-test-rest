import request from 'supertest'
import { testServer } from '../../test-server';

describe('Test in the routes.ts', () => { 
    beforeAll(async() => {
        await testServer.start();
    });

    afterAll(() => { 
        testServer.close();
    });

    test('should return TODOs api/todos.', async() => { 
        const respose = await request( testServer.app ).get( '/api/todos' );

        console.log(respose.body)
    });
});