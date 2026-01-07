import { describe, it, expect, test } from 'vitest';

import { Pool } from '@neondatabase/serverless';
import handler from './churches';

var pool = new Pool({ connectionString: process.env.DATABASE_CHURCHES_URL });

describe('Fake Test Suite', () => {
    test('2+3=5', () => {
        expect(2+3).toBe(5);
    });
});

describe('Test Suite for REST API endpoints', () => {
    test('GET /api/churches', async () => {
        fetch('https://church-vercel-neon-mu.vercel.app/api/churches')
        //  .then(console.log)
        //  .catch(console.warn)
            .finally(() => {})
    });

    test('POST /api/churches', () => {
        // TODO - use pool and handler(req, res) to mock POST
    });
});