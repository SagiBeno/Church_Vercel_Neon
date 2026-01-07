import { describe, it, expect, test, vi } from 'vitest';

import { Pool } from '@neondatabase/serverless';
import handler from './churches';

var pool = new Pool({ connectionString: process.env.DATABASE_CHURCHES_URL });

// Mock Neon
vi.mock('@neondatabase/serverless', () => ({
    Pool: vi.fn()
}));

const mockPool = {
    query: vi.fn()
}

describe('Fake Test Suite', () => {
    test('2+3=5', () => {
        expect(2+3).toBe(5);
    });
});

describe('Test Suite for REST API endpoints', () => {
    test('GET /api/churches', () => {
        fetch('https://church-vercel-neon-mu.vercel.app/api/churches')
        //  .then(console.log)
        //  .catch(console.warn)
            .finally(() => {})
    });

    test('POST /api/churches', async () => {
        // TODO - use pool and handler(req, res) to mock POST
        const mockReq = {
            method: 'POST',
            body: { name: 'Test Church', is_christian: false }
        }

        const mockRes = {
            status: vi.fn(),
            json: vi.fn()
        }
        mockPool.query.mockResolvedValue( { data: { rows: [ {id: 1} ] } } );

        const result = await handler(mockReq, mockRes);
        const resBodyJson = result?.json;
        expect(resBodyJson).not.toBeNull();
    });
});