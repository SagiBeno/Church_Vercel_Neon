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
    let error = null; // handle errors!


    if (req.method == 'GET') {
        sql = `SELECT id, name, is_christian, created_at FROM public.churches`;
        data = await pool.query(sql);
        console.log('data: ', data)
        return res.status(200).json({ sql, data, error });
    }

    if (req.method == 'POST') {
        const { name, is_christian } = req.body;
        // validate req.body values
        if (!name || is_christian === null) return res.status(300).json( { error: 'Bad Data' } );
        console.log('{ name, is_christian }: ', { name, is_christian });

        sql = `INSERT INTO public.churches (name, is_christian) VALUES ($1, $2) RETURNING *`;
        
        try {
            data = await pool.query(sql, [name, is_christian]);
        } catch (err) {
            console.warn(err);
        }
        
        console.log('data: ', data);
        return res.status(201)?.json({ sql, data, error });
    }

    if (req.method == 'PATCH') {
        return res.status(200).json({ sql, data, error }); // TODO
    }

    if (req.method == 'DELETE') {
        return res.status(200).json({ sql, data, error }); // TODO
    }
}