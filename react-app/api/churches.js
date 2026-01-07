/**
 * endpoint: /api/churches
 * 
 * @param {*} req
 * @param {*} res
 * 
 * @returns json
 */

import { Pool } from '@neondatabase/serverless';
var pool = new Pool({ connectionString: process.env.DATABASE_CHURCHES_URL });

export default async function handler(req, res) {

    let sql = '';
    let data = [];
    let error = null; // TODO - handle errors!


    if (req.method == 'GET') {
        sql = `SELECT id, name, is_christian, created_at FROM public.churches`;
        data = await pool.query(sql);
        console.log('data: ', data)
        return res.status(200).json({ sql, data, error });
    }

    if (req.method == 'POST') {
        // TODO
        sql = `SELECT id, name, is_christian, created_at FROM public.churches`;
        data = await pool.query(sql);
        console.log('data: ', data)
        return res.status(200).json({ sql, data, error });
    }

    if (req.method == 'PATCH') {
        return res.status(200).json({ sql, data, error }); // TODO
    }

    if (req.method == 'DELETE') {
        return res.status(200).json({ sql, data, error }); // TODO
    }
}