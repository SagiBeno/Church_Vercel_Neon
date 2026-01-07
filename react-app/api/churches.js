/**
 * endpoint: /api/churches
 * 
 * @param {*} req
 * @param {*} res
 * 
 * @returns json
 */

import { Pool } from '@neondatabase/serverless';
var pool = new Pool( { connectionString: process.env.DATABASE_CHURCHES_URL } );

export default async function handler (req, res) {
    //console.log('pool: ', pool)

    const sql = `SELECT id, name, is_christian, created_at FORM public.churches`;

    const queryResult = await pool.query(sql);
    console.log('queryResult: ', queryResult)
    return res.status(200).json( { queryResult } );
}