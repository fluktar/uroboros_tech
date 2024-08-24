// decyduj który potrzebujesz sql czy mongo, pamiętaj, że trzeba uruchomić bazę danych przed przystąpieniem do programowania, chyba, że mongo to nie trzeba - ponieważ jest w chmurze ale może być i lokalnie.
//tutaj jest sql
//   const mysql = require("mysql2/promise");
// 		const pool = mysql.createPool({
// 		  host: "localhost",
// 		  databasea: "blog",
// 		  user: "root",
// 		  password: "Sojokotojo1@3",
// 		});
// 		module.exports = pool;
// ---------------------------------------------------------------
//tutaj jest mongodb
const mongodb = require("mongodb");
const pas = require("./password");
const MongoClient = mongodb.MongoClient;
let database;
async function connect() {
  try {
    const client = await MongoClient.connect(
      `mongodb://admin:${pas}@localhost:27017/?authSource=admin`,

      {
        // Removed deprecated options
      }
    );
    database = client.db("uroboros");
    console.log("Połączono z bazą danych");
  } catch (error) {
    console.error("Błąd podczas łączenia z MongoDB:", error);
    throw error;
  }
}

function getDb() {
  if (!database) {
    throw new Error("Database not initialized");
  }
  return database;
}
module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
