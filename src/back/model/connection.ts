import mysql from 'mysql2/promise';

// export const con = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.PASSWORD,
// });
//  const connection =

export class Sql {
  constructor() {
    this.con();
  }
  private con() {
    mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      connectionLimit: 4,
      database: process.env.USE_DB,
    });
  }
}
