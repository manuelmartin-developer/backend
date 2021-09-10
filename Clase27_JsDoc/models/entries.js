const pool = require('../config/sql_config')


const entries = {
  // READ
  getAllEntries: async () => {
     let client
      try {
        client = await pool.connect();
        const result = await pool.query(`
        SELECT entries.title, entries.content,entries.category,entries.date,authors.email,authors.name,authors.image
        FROM entries
        INNER JOIN authors
        ON entries.id_author = authors.id_author`)
        return result.rows

    } catch (error) {
        
    } finally{
        client.release()
    }

  },
  // READ
  getEntriesByAuthor: async (email) => {
    let client;
    try {
        client = await pool.connect();
        const result = await pool.query(`
        SELECT entries.title, entries.content,entries.category,entries.date,authors.email,authors.name,authors.image
        FROM entries
        INNER JOIN authors
        ON entries.id_author = authors.id_author
        WHERE authors.id_author = (SELECT id_author FROM authors WHERE email=$1)`, [email]);
        return result.rows

    } catch (error) {
        
    } finally{
        client.release();
    }
},


// CREATE
  addEntry: async (entry) => {
    let client,result;
    const {title,content,category, email} = entry;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const sql_query = ` INSERT INTO entries(title,content,id_author,category)
        VALUES ($1,$2,(SELECT id_author FROM authors WHERE email=$4),$3) `
        result = await pool.query(sql_query,[title,content,category,email])
    }
    catch(e){
        console.log(e);
        throw e;
    }
    finally{
        client.release();
    }
    return result.rowCount
  },

};

module.exports = entries;


